/* globals $, CorpusSettings */

var CorpusAuth = {
    _session_name: 'corpus-session',

    session: function session() {
        var sess = localStorage.getItem(CorpusAuth._session_name);
        if (typeof sess === 'string') {
            try {
                sess = JSON.parse(sess);
            } catch (e) {
                sess = null;
            }
        }
        // check session object
        if (sess && (!sess.token || sess.expiry < parseInt(new Date() * 1 / 1000))) {
            // session cleanup if session is invalid or expired
            localStorage.removeItem(CorpusAuth._session_name);
            sess = null;
        }
        return sess || {};
    },

    login: function login(redirect) {
        var session = CorpusAuth.session();
        if (session.token) {
            // session exists, nothing to do
            return;
        }
        redirect = redirect ? redirect : encodeURIComponent(window.location.toString());
        var href = [CorpusSettings.authUrl, 'login'].join('/')
            , qs = ['redirect_to', redirect].join('=');
        window.location = [href, qs].join('?');
        return null;
    },

    logout: function logout() {
        var session = CorpusAuth.session();
        if (!session.token) {
            // no session, nothing to do
            return;
        }
        CorpusAuth.request({
            method: 'DELETE',
            url: [CorpusSettings.authUrl, 'sessions', session.token].join('/')
        }).done(function () {
            localStorage.removeItem(CorpusAuth._session_name);
            console.log('logout complete');
        }).fail(function () {
            console.log('logout failed');
        });
    },

    // TODO: if login is needed, store event context to trigger event on login success
    request: function request(args) {
        args = args || {};
        if (!args.method || !args.url) {
            return null;
        }
        var session = CorpusAuth.session();
        if (!session.token) {
            return CorpusAuth.login(args.redirect);
        }
        var req_args = {
            method: args.method.toUpperCase(),
            url: args.url,
            data: args.data
        };
        if (session) {
            req_args.headers = {'Authorization': 'token ' + session.token};
        }
        return $.ajax(req_args);
    },

    session_capture: function session_capture() {
        if (location.search.indexOf('corpus_session=') === -1) {
            return;
        }
        var parts = location.search.substring(1).split('&');
        var qo = {};
        for (var i = 0; i < parts.length; i++) {
            var v = parts[i].split('=');
            qo[v[0]] = v[1];
        }
        localStorage.setItem(CorpusAuth._session_name, atob(qo.corpus_session));
        delete qo.corpus_session;
        var qs = Object.keys(qo).map(function (name) {
            return name + '=' + qo[name];
        });
        var href = location.toString().split('?');
        href = qs.length > 1 ? [href[0], qs.join('&')].join('?') : href[0];
        if (location.hash) {
            href += location.hash;
        }
        history.replaceState({}, document.title, href);
    }
};

CorpusAuth.session_capture();
