const mongoose = require('mongoose');

let AlbumSchema = new mongoose.Schema({
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
        type: Array
    }
});

module.exports = mongoose.model('Album', AlbumSchema);
