const User = require('../models/User.js');
const Post = require('../models/Post.js');
const Code = require('../models/Code.js');

const mongoose = require('mongoose');
Schema = mongoose.Schema;

module.exports = function(app) {

    app.post('/api/getPosts', function(req, res) {        
        Post.find({email: req.session.user.email}, function(err, doc) {
            if (err) console.log(err);
            res.send(doc);
        });
    });

    app.post('/api/setSession', function(req, res) {
        User.findOne({email: req.body.email}, function(err, doc) {
            if (err) console.log(err);
            req.session.user = doc;
            res.send(doc);
        });        
    });

    app.post('/api/newUser', function(req, res) { 
        console.log('new User');
        let newUser = new User({
            name: req.body.name,
            email: req.body.email,
            picture: 'https://d3g919u5f14ld1.cloudfront.net/assets/images/users/default-avatar.svg'
        })
        newUser.save(function(err, doc) {
            if (err) console.log(err);
            res.end();
        })       
    });

    app.post('/api/saveUrl', function(req, res) {
        console.log('save URL');
        User.findOneAndUpdate({email: req.session.user.email}, {$set: {picture: req.body.url}}, function(err, doc) {
            if (err) console.log(err);
            res.end();
        });
    });

    app.post('/api/savePhotos', function(req, res) {
        console.log('save Photos');
        Post.findByIdAndUpdate(req.body.id, {album: req.body.photos}, function(err, doc) {
            if (err) console.log(err);
            console.log(doc);
            res.end();
        });
    });

    app.post('/api/saveAlbum', function(req, res) {
        console.log('save Album');
        req.body.album.email = req.session.user.email;
        let newPost = new Post(req.body.album);
        newPost.save(function(err, doc) {
            if (err) console.log(err);
            res.send(doc);
        });
    });

    app.post('/api/saveVideo', function(req, res) {
        console.log('save Video');
        req.body.video.email = req.session.user.email;
        let newPost = new Post(req.body.video);
        newPost.save(function(err, doc) {
            if (err) console.log(err);
            res.send(doc);
        }); 
    });

    app.post('/api/deletePost', function(req, res) {
        console.log('delete Post');
        Post.findByIdAndRemove(req.body.id, function(err, doc) {
            if (err) console.log(err);
            res.send(doc);
        });       
    });

    app.post('/api/saveCode', function(req, res) {
        console.log('save Code');
        console.log(req.body.code);        
        Post.find({email: req.session.user.email}, function(err, doc) {
            if (err) console.log(err);
            console.log(doc);
            req.body.code.posts = doc;

           let newCode = new Code(req.body.code);
            newCode.save(function(err, doc) {
                Code.startTTLReaper();
                console.log('reaper');
                if (err) console.log(err);
            });
        });
    });
}