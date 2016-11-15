var CorpusSpy = {
    init: function () {

        // Cache selectors
        CorpusSpy.lastId = "";
        CorpusSpy.topMenu = $("#sidenav");
        CorpusSpy.topOffset = $("#page-head").height();

        // All list items
        CorpusSpy.menuItems = CorpusSpy.topMenu.find("a");

        // Apply affix
        $('#nav-container').affix({
            offset: {
                top: CorpusSpy.topOffset,
                bottom: function () {
                    return (this.bottom = $('.footer').outerHeight(true) + 12)
                }
            }
        });

        $('#nav-container').on('affix.bs.affix', function () {
            $('#nav-container').removeAttr('style');
        });

        $("#menu-toggle").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
            $("#menu-toggle").toggleClass("toggleon");
        });

        $('#release-select').on('change', function () {
            var url = $(this).val();
            if (url) {
                window.location = url; // redirect
            }
            return false;
        });


        // Anchors corresponding to menu items
        CorpusSpy.scrollItems = CorpusSpy.menuItems.map(function () {
            var item;

            try {
                //if the href is preceded with a directory ("/")
                if ($(this).attr("href").split("#").length >= 2) {
                    var paths = $(this).attr("href").split("#");
                    item = paths[paths.length - 1];
                    item = $("#" + item);
                } else {
                    item = $($(this).attr("href"));
                }
            }
            catch (err) {
                item = null;
            }

            if (item !== undefined && item !== null) {
                return item;
            }
        });

        // Look at URL and set scrollbar location
        CorpusSpy.setCurrentLocation();

        // Bind to scroll
        $(window).scroll(function () {
            CorpusSpy.scrollSpy(this);
        });
    },

    setCurrentLocation: function (id) {
        //Clear all active classes
        CorpusSpy.menuItems.removeClass("active");

        var windowPath = window.location.pathname.split('/').clean("");

        var hrefMatch = windowPath[windowPath.length - 1];

        if (id) {
            hrefMatch = hrefMatch + "/#" + id;
        } else {
            hrefMatch = hrefMatch + "/" + window.location.hash;
        }

        var currentItem;
        try {
            currentItem = CorpusSpy.menuItems.filter("[href*='" + hrefMatch + "']");
            if (currentItem.length > 0) {

                $(".sub-menu-item").removeClass("active");
                $(".nav ul").addClass("hidden");

                $(currentItem[0]).addClass("active");

                var navItemParent = $(currentItem[0]).parent();
                if (navItemParent.is("li")) {
                    navItemParent.addClass("active");
                }

                if (navItemParent.parent().is("ul") && navItemParent.parent().hasClass("hidden")) {
                    navItemParent.parent().removeClass("hidden");
                }

                if (navItemParent.parent().parent().parent().is("ul") && navItemParent.parent().parent().parent().hasClass("hidden")) {
                    navItemParent.parent().parent().parent().removeClass("hidden");
                }
            }
        } catch (err) {

        }
    },

    scrollSpy: function () {

        // Get id of current scroll item
        var cur = CorpusSpy.scrollItems.map(function () {
            if ($(this).offset() && CorpusSpy.elementIsNearTop($(this)))
                return this;
        });

        // Get the id of the current element
        cur = cur[cur.length - 1];

        //If there's no result, just get the first one on the page
        if (!cur) {
            cur = CorpusSpy.lastId;
            if (!cur) cur = $($("#rightpage").find("article")[1]).find("h1").attr("id");
        }

        var id = cur && cur.length ? cur[0].id : "";

        if (id && CorpusSpy.lastId !== id) {
            CorpusSpy.lastId = id;
            this.setCurrentLocation(id);
        }

        this.moveNavExperience();
    },

    moveNavExperience: function () {
        if (!CorpusSpy.leftNavPosFromTop) CorpusSpy.leftNavPosFromTop = CorpusSpy.topOffset;

        if (CorpusSpy.elementIsNearBottom($(".sub-menu-item.active"))) {
            CorpusSpy.leftNavPosFromTop = CorpusSpy.leftNavPosFromTop - 200;
            $("#nav-container").css("top", CorpusSpy.leftNavPosFromTop);
        }

        if (CorpusSpy.elementIsNearTop($(".sub-menu-item.active"))) {
            CorpusSpy.leftNavPosFromTop = CorpusSpy.leftNavPosFromTop + 200;
            $("#nav-container").css("top", CorpusSpy.leftNavPosFromTop);
        }

    },

    elementIsNearTop: function (elem) {
        var offsetCalc = elem.offset().top - $(document).scrollTop();
        return offsetCalc > 0 && offsetCalc < 100;
    },

    elementIsNearBottom: function (elem) {
        return elem.offset().top > ($(window).scrollTop() + $(window).height() - 100);
    },

    linkClick: function (fullURL, sectionName) {

        if (sectionName) {
            if (!$("#dropdown-menu-" + sectionName).hasClass("hidden")) {
                $("#dropdown-menu-" + sectionName).addClass("hidden");
                return false;
            }
        }

        window.location = fullURL;

    }
};


Array.prototype.clean = function (deleteValue) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == deleteValue) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
};
