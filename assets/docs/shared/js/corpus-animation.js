$(function () {

    $(document).click(function (e) {
        var target = e.target;
        if (
            !$(target).is('.global-search-input')
            && !$(target).parents().is('.search')
        ) {
            if (CorpusAnimate.searchIsOpen)
                CorpusAnimate.collapseGlobalSearch();
        }
    });

    $(".gsi").click(function () {
        CorpusAnimate.expandGlobalSearch();
    });
});

var CorpusAnimate = {

    collapseGlobalSearch: function () {
        $(".global-search-input").animate({
            opacity: 0,
            width: "0"
        }, 400, function () {
            // Animation complete.
            CorpusAnimate.searchIsOpen = false;
        });

        //Remove search result box when collapsing search box
        $(".global-search")
            .find(".corpus-search-results")
            .addClass("hidden")
            //Clear search input on collapse
            .parent()
            .find(".global-search-input").val("");
    },

    expandGlobalSearch: function () {
        $(".global-search-input").animate({
            opacity: 1,
            width: "400px"
        }, 400, function () {
            // Animation complete.
            CorpusAnimate.searchIsOpen = true;
            $(".global-search-input").focus();
        });
    }

};
