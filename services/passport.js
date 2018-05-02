const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const Keys = require('../config/keys');

const User = mongoose.model('users');//Here, we are pulling the users collection from the MongoDB. Use one arg to fetch from and two args to insert.

passport.serializeUser((user, done) => {
    done(null, user.id);//This user id is the id that the Mongo db assigned to the user.

});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(new GoogleStrategy({
        clientID: Keys.googleClientID,
        clientSecret: Keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({googleId: profile.id})

          if (existingUser){
                    //We already have a record with the given profile ID.
              return done(null, existingUser);//done tells passport we are done and proceed with the auth flow. the first args is the error object, which communicate back to passport what went wrong.
                    //the second args is the user record.
          }
          //Create a new user.
          const user = await new User({googleId: profile.id}).save();
          done(null, user); //This line creates a record in the collection and saves it to the DB.

        }
    )
);
