/* globals $, CorpusSettings */

$(function() {
    var CorpusSearch = {
        init: function init(url, args) {
            // convert to jquery elem
            var input = $(this);

            // turn off autocomplete for text input
            input.attr('autocomplete', 'off');

            // results div
            var results = $(document.createElement('div'));
            results.addClass('corpus-search-results');
            results.addClass('hidden');

            // append results div
            input.addClass('corpus-search-input');
            input.after(results);

            // prevent default so select works on focus
            input.mouseup(function (e) { e.preventDefault(); });

            // remove 'Search' hint, or select current search text
            input.focus(function () {
                if (input.val() === 'Search') {
                    input.val('');
                }
                input.select();
            });

            // add 'Search' hint when search text is empty
            input.focusout(function () {
                if (input.val() === '') {
                    input.val('Search');
                }
            });

            // call search endpoint and populate results, if any
            function search(query) {
                var types = input.data('search-types');
                if (typeof types === 'string') {
                    types = types.split(',').map(function (type) {
                        return type.trim();
                    });
                }
                var search_args = {
                    query: query,
                    types: types
                };
                var name = input.data('search-name');
                if (name) {
                    search_args.sites = name;
                }
                $.getJSON(url, search_args, function (result) {
                    var data = result.data;
                    var html = '<div>';
                    Object.keys(data).forEach(function (type) {
                        html += '<h2>' + type.charAt(0).toUpperCase() + type.slice(1) + '<h2>';
                        data[type].forEach(function (item) {
                            html += '<p><a href="' + item.source.url + '">' + item.source.title + '</a></p>';
                        });
                    });
                    html += '</div>';
                    results.html(html);
                }).fail(function () {
                    results.html('<div>No results found</div>');
                });
            }

            // search
            input.keyup(function (e) {
                if (input.val().trim().length >= 1) {
                    results.removeClass('hidden');
                    search(input.val());
                } else {
                    results.html('');
                    results.addClass('hidden');
                }
            });
        }
    };

    $('input[data-name="search"]').each(function () {
        CorpusSearch.init.call(this, CorpusSettings.searchUrl);
    });
});
