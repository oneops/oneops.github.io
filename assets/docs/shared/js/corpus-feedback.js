/* globals $, CorpusSettings, CorpusAuth */

var CorpusFeedback = {
    _type_map: {
        article: 'sections',
        comment: 'comments',
        event: 'events'
    },

    Group: function (group) {
        this.group = $(group);
        this.container = this.group.parent();
        this.fragment_id = this.container.children(':header').first().attr('id');
        this.id = this.fragment_id ? [location.href.split('#')[0], this.fragment_id].join('#') : location.href;
        this.type = CorpusFeedback._type_map[this.container.data('feedback-type')] || 'sections';
        var self = this;
        this.group.find('button').click(function () {
            self.vote(this);
        });
    },

    init: function init() {
        if (!Array.isArray(CorpusFeedback.groups)) {
            CorpusFeedback.groups = [];
            $('.js-btn-vote-group').each(function () {
                CorpusFeedback.groups.push(new CorpusFeedback.Group(this));
            });
        }
        CorpusFeedback.reload();
    },

    reload: function reload() {
        CorpusFeedback.groups.forEach(function (g) {
            g.load();
        });
    },

    spinner: function (callback) {
        if (CorpusFeedback.spinnerIsOpen) {
            //$(".corpus-modal-buttons").animate({opacity: 1}, 400, function () {
            //});
            $("#spinner").animate({opacity: 0}, 400, function () {
                CorpusFeedback.spinnerIsOpen = false;
                if (callback) callback();
            });
        } else {
            //$(".corpus-modal-buttons").animate({opacity: 0}, 400, function () {
            //});
            $("#spinner").animate({opacity: 1}, 400, function () {
                CorpusFeedback.spinnerIsOpen = true;

            });
            if (callback) callback();
        }
    },

    modal: function (callback) {

        if (CorpusFeedback.modalIsOpen) {
            CorpusFeedback.modalIsOpen = false;
            if (callback) {
                $.modal.close({onClose: callback()});
            } else {
                $.modal.close();
            }
        } else {
            CorpusFeedback.modalIsOpen = true;
            CorpusModal.trigger();
        }

    },

    confirmation: function () {
        if (CorpusFeedback.confirmationOpen) {

            setTimeout(function () { //wait for modal to leave page

                //revert fields and value
                $(".cme").animate({opacity: 1}, 400, function () {
                });
                $("#corpus-feedback-textarea").val("");


            }, 1000);

            $("#feedback-confirmation").animate({opacity: 0}, 400, function () {
            });
            CorpusFeedback.confirmationOpen = false;
        } else {

            $(".cme").animate({opacity: 0}, 400, function () {
            });

            $("#feedback-confirmation").animate({opacity: 1}, 400, function () {
            });
            CorpusFeedback.confirmationOpen = true;
        }
    },

    isDownVote: function () {
        return CorpusFeedback.value == -1;
    }

};

CorpusFeedback.Group.prototype.load = function load() {
    var self = this;
    $.ajax({
        method: 'GET',
        url: [CorpusSettings.feedbackUrl, self.type].join('/'),
        data: {
            id: self.id,
            username: CorpusAuth.session().username || ''
        }
    }).done(function (res) {
        if (!res || !res.data) {
            console.log('init failed.');
            return;
        }
        var aggr = res.data.aggregate || {}
            , user = res.data.user || {};
        // set counter values
        self.group.find('.js-vote-positive-count').text(aggr.yes || 0);
        self.group.find('.js-vote-negative-count').text(aggr.no || 0);
        // set active button
        if (user && user.value === 1) {
            self.group.find('.js-btn-vote-yes').addClass('active');
        } else if (user && user.value === -1) {
            self.group.find('.js-btn-vote-no').addClass('active');
        }
    }).fail(function () {
        console.log('init failed.');
    });
};

CorpusFeedback.Group.prototype.vote = function vote(button) {

    if (button) {
        CorpusFeedback.active = this.group.find('.active')
            , CorpusFeedback.value = $(button).hasClass('js-btn-vote-yes') ? 1 : -1
            , CorpusFeedback.self = this;
        CorpusFeedback.button = button;
    }

    /**
     * If this button is active, unvote
     */

    if (CorpusFeedback.active.length && CorpusFeedback.button === CorpusFeedback.active[0]) {
        $(CorpusFeedback.button).removeClass('active');
        CorpusAuth.request({
            method: 'delete',
            url: [CorpusSettings.feedbackUrl, CorpusFeedback.self.type].join('/'),
            redirect: CorpusFeedback.self.id,
            data: {
                id: CorpusFeedback.self.id,
                username: CorpusAuth.session().username
            }
        }).done(function () {
            var cls = CorpusFeedback.value === 1 ? '.js-vote-positive-count' : '.js-vote-negative-count'
                , counter = $(CorpusFeedback.self.group).find(cls);
            counter.text(Math.max(parseInt(counter.text().trim(), 10) - 1), 0);
        });
    } else {

        /**
         * If this button is inactive, vote
         */

        //before anything else, check if it's a downvote (and then open the modal)
        if (CorpusFeedback.isDownVote()) {

            //first, check if user is logged in
            var session = CorpusAuth.session();
            if (!session.token) {
                return CorpusAuth.login(CorpusFeedback.self.id);
            }

            //if so, open comment modal
            if (!CorpusFeedback.modalIsOpen) {
                CorpusFeedback.modal();
                return false;
            }
        }

        $(CorpusFeedback.button).addClass('active');
        if (CorpusFeedback.active.length) {
            CorpusFeedback.active.removeClass('active');
        }

        CorpusFeedback.spinner();

        var args = {
            id: CorpusFeedback.self.id,
            username: CorpusAuth.session().username,
            value: CorpusFeedback.value
        };

        // only add message to payload if downvote
        if (CorpusFeedback.isDownVote()) args.message = $("#corpus-feedback-textarea").val();

        var xhr = CorpusAuth.request({
            method: 'put',
            url: [CorpusSettings.feedbackUrl, CorpusFeedback.self.type].join('/'),
            redirect: CorpusFeedback.self.id,
            data: args
        });
        if (xhr) {
            xhr.done(function () {

                if (CorpusFeedback.isDownVote() && CorpusFeedback.modalIsOpen) {

                    CorpusFeedback.spinner();
                    CorpusFeedback.confirmation();

                    setTimeout(function () {
                        CorpusFeedback.modal(CorpusFeedback.confirmation());
                    }, 3000);
                }

                var cls = CorpusFeedback.value === 1 ? '.js-vote-positive-count' : '.js-vote-negative-count'
                    , counter = $(CorpusFeedback.self.group).find(cls);
                counter.text(parseInt(counter.text().trim(), 10) + 1);
                if (CorpusFeedback.active.length) {
                    cls = CorpusFeedback.value === 1 ? '.js-vote-negative-count' : '.js-vote-positive-count';
                    counter = $(CorpusFeedback.self.group).find(cls);
                    counter.text(Math.max(parseInt(counter.text().trim(), 10) - 1), 0);
                }

            });
        }
    }
}
;

$(function () {
    CorpusFeedback.init();
});
