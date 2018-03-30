//This is server side of our App.
const express = require('express');//We are using common nodeJS.
const mongoose = require('mongoose');
const Keys = require('./config/Keys.js');
require('./models/User');
require('./services/passport');


mongoose.connect(Keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);


//This is our first route handler.
// app.get('/', (req,res) => {
//    res.send({hello: 'you!'});
//
// });



const PORT = process.env.PORT || 5000; //We added the boolean (or 5000) to accommodate for running the app locally.
app.listen(PORT);//This line instruct express to tell node that it want to listen to traffic in port that Heroku gives us or our local port.
