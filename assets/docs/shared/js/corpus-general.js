$(function () {
    CorpusGeneral.setHashLinks();
});

var CorpusGeneral = {
    setHashLinks: function () {
        $.each($("h1, h2, h3"), function (index, value) {
            var id = $(value).attr("id");
            if (id)  $(value).append(' <a class="corpus-hash-link" href="#' + id + '"><i class="fa fa-link"></i></a>')
        });
    }
};

