const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var User = mongoose.model('User');

const passwordSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: false
    },
    autor: { 
        type: Schema.ObjectId, ref: "User" }
});

module.exports = mongoose.model('Password', passwordSchema);