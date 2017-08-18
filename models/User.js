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
        default:'https://d3g919u5f14ld1.cloudfront.net/assets/images/users/default-avatar.svg'
    }
});

module.exports = mongoose.model('User', UserSchema);
