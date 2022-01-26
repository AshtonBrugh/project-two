function loginCheck(req, res, next) {
    console.log(req.session, "string");
    if (!req.session.loggedIn) {
        res.redirect('/')
    } else {
        next()
    }
};

module.exports = loginCheck;