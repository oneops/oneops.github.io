if (location && location.search && location.search.indexOf('corpus_session=') !== -1) {
    (function() {
        var parts = location.search.substring(1).split('&');
        var qo = {};
        for (var i = 0; i < parts.length; i++) {
            var v = parts[i].split('=');
            qo[v[0]] = v[1];
        }
        localStorage.setItem('corpus-session', atob(qo.corpus_session));
        delete qo.corpus_session;
        var qs = Object.keys(qo).map(function (name) {return name + '=' + qo[name]; });
        var href = location.toString().split('?');
        href = qs.length > 1 ? [href[0], qs.join('&')].join('?') : href[0];
        if (location.hash) {
            href += '#' + location.hash;
        }
        history.replaceState({}, document.title, href);
    })();
}
