const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);//this is where we create the collection in mongoDB.