const mongoose = require('mongoose');

let PhotoSchema = new mongoose.Schema({    
    photo: {
        type: Array
    }
});

module.exports = mongoose.model('Photo', PhotoSchema);
