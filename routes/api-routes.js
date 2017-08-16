const User = require('../models/User.js');
const Album = require('../models/Album.js');
const Photo = require('../models/Photo.js');

module.exports = function(app) {

    app.post('/api/getPosts', function(req, res) {        
        Album.find({email: req.session.user.email}, function(err, doc) {
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
        Album.findByIdAndUpdate(req.body.id, {album: req.body.photos}, function(err, doc) {
            if (err) console.log(err);
            console.log(doc);
        });
    });

    app.post('/api/saveAlbum', function(req, res) {
        console.log('save Album');
        req.body.album.email = req.session.user.email;
        let newAlbum = new Album(req.body.album);
        newAlbum.save(function(err, doc) {
            if (err) console.log(err);
            res.send(doc);
        });
    });

    app.post('/api/deletePost', function(req, res) {
        console.log('delete Post');
        Photo.findByIdAndRemove(req.body.id, function(err, doc) {
            if (err) console.log(err);
            Album.remove({album_id: req.body.id}, function(err, doc) {
                if (err) console.log(err);
                res.end();
            });
        });       
    });

    app.post('/api/getPhotos', function(req, res) {
        console.log('get Photos');
        Photo.findById(req.body.id, function(err, doc) {
            if (err) console.log(err);
            res.send(doc);
        });
    });
}