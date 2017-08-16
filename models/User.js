const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    picture: {
        type: String,
    }
});

module.exports = mongoose.model('User', UserSchema);
