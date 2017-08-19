const mongoose = require('mongoose');
const ttl = require('mongoose-ttl');

let CodeSchema = new mongoose.Schema({
    code: {
        type: String
    },
    name: {
        type: String
    },
    question: {
        type: String
    },
    answer: {
        type: String
    },
    posts: {
        type: Array,
        default: []
    }
    
}, {autoIndex: false, timestamps: true});

CodeSchema.plugin(ttl, {ttl: '1m', reap: true});


module.exports = mongoose.model('Code', CodeSchema);
