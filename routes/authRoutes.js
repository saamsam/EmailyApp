const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/logout', (req, res) => {
        req.logout(); //the logout function is one of the functions that passport attaches to the req object. The logout function will kill the cookie for that user.
        res.send(req.user); //let user know they are logged out.

    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });


};

