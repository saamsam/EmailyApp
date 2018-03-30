const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const Keys = require('../config/keys');

const User = mongoose.model('users');//Here, we are pulling the users collection from the MongoDB. Use one arg to fetch from and two args to insert.

passport.use(new GoogleStrategy({
        clientID: Keys.googleClientID,
        clientSecret: Keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
        new User({googleId: profile.id}).save(); //This line creates a record in the collection and saves it.
        done(null, profile);

    }
    )
);