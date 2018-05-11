const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }
});

//this is where we create the collection in mongoDB. First args is the name of the model class and the second args is the name of the schema.
mongoose.model('users', userSchema);
