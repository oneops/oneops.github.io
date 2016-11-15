var corpus = {
    sideBarIsOpen: false,

    init: function () {
        $(".side-nav-view-code").click(function () {
            corpus.toggleSideBar(this);
        });

        $(document).click(function (e) {
            var target = e.target;
            if (
                !$(target).is('.side-nav-view-code')
                && !$(target).parents().is('.side-nav-view-code')
                && !$(target).is('#sidebar-wrapper')
                && !$(target).parents().is('#sidebar-wrapper')
            ) {
                corpus.closeSideBar();
            }
        });
    },

    toggleSideBar: function (elem) {
        if ($(elem).is('.side-nav-view-code')) {
            this.renderCode(elem); //get code from closest tableblock
            this.animateSideBar();
        }
    },

    animateSideBar: function () {
        if (this.sideBarIsOpen) {
            this.closeSideBar();
        } else {
            this.openSideBar();
        }
    },

    closeSideBar: function () {
        $("#sidebar-wrapper").css("right", "-400px");
        this.sideBarIsOpen = false;
    },

    openSideBar: function () {
        $("#sidebar-wrapper").css("right", "0");
        this.sideBarIsOpen = true;
    },

    renderCode: function (elem) {
        var properties = $(elem).attr("class").split(" ");

        var codeSnippet = $("#" + properties[0])
            .html()
            .replace('<!--', '')
            .replace('-->', '');

        var definition = properties[2];
        var returnType = properties[3];

        $("#sidebar-code-definition").text(definition);
        $("#sidebar-code-returnType").text(returnType);
        $("#sidebar-code-snippet").text(codeSnippet);
    }
};