'use strict';



const public_paths = new RegExp('(' + [
    '^/login($|/$)',
].join('|') + ')');



const admin_restricted = new RegExp('(' + [
].join('|') + ')');



const content_manager_restricted = new RegExp('(' + [
].join('|') + ')');



const editor_restricted = new RegExp('(' + [
].join('|') + ')');



const writer_restricted = new RegExp('(' + [
].join('|') + ')');



const path_middleware = {
    public: (req, res, next) => {
        let current_path = req.originalUrl;

        if (typeof req.session !== 'undefined' && typeof req.session.user !== 'undefined') {
            return next();
        }

        if (public_paths.test(current_path)) {
            res.sendFile('index.html', { root: __dirname + '/../../../public'});
        }
        else {
            res.redirect('/login');
        }
    },
    restricted: (req, res, next) => {
        let current_path = req.originalUrl;
        
        switch (req.session.user.role) {
            case 'admin': 
                if (!admin_restricted.test(current_path)) {
                    res.redirect('/');
                }
                break;

            case 'content_manager': 
                if (!content_manager_restricted.test(current_path)) {
                    res.redirect('/');
                }
                break;

            case 'editor':
                if (!editor_restricted.test(current_path)) {
                    res.redirect('/');
                }
                break;

            case 'writer':
                if (!writer_restricted.test(current_path)) {
                    res.redirect('/');
                }
                break;

            default: res.status(401).send({ERROR: 'ROLE NOT FOUND!'}); break;
        }
    },
    send_file: (req, res, next) => {
        res.sendFile('index.html', { root: __dirname + '/../../../public'});
    }
};



module.exports = path_middleware;