const mongoose = require('mongoose');

let PostSchema = new mongoose.Schema({
    email: {
        type: String
    },
    thumb: {
        type: String
    },
    location: {
        type: String
    },
    month: {
        type: String
    },
    year: {
        type: String
    },
    description: {
        type: String
    },
    album: {
        type: Array,
        required: false
    },
    video: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Post', PostSchema);
