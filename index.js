//This is server side of our App. We are using express which is a Library that runs in the Node runtime. It has helpers to make dealing with HTTP traffic easier.
//Node is Javascript runtime used to execute code outside of the browser.
//When you runs a server onlocal machine, the server will look at http traffics on a port, our server is set to listen in port 5000. The Node will receive request, pass it on to Express which
//will decide what code will handle or respond to the request, e.g. use route handler for a authentication.

const express = require('express');//This is the express library. We are using common nodeJS modules. and that's why we use the keyword require. Another module called ES2015 looks like import express from 'express'
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const Keys = require('./config/Keys.js');
require('./models/User');
require('./services/passport');


mongoose.connect(Keys.mongoURI);

const app = express(); //This generate a new application that represents a new instance of express.

//This is telling express to use cookie. The app.use wires-up a middleware for the app. Middlewares are function that intercept and  modify requests before sending them to the passport.
app.use(
  cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000, //The max age tells how long the cookie will reside in our app before it expires, 30 days in this example.
      keys: [Keys.cookieKey]//This is a key that will encrypt the cookie.
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000; //We added the boolean (or 5000) to accommodate for running the app locally.
app.listen(PORT);//This line instruct express to tell node that it want to listen to traffic in port that Heroku gives us or our local port.
