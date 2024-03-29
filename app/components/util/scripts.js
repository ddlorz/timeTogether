import validator from 'validator';
import config from './keys/firebase';
import dbScripts from './dbScripts';
import moment from 'moment';

firebase.initializeApp(config);

let Scripts = {
    signUpAccount: (user, callback) => {
        if (validator.isEmail(user.email)) {
            if (validator.equals(user.password, user.confirm_password)) {
                firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                    .then(function () {   
                        dbScripts.saveUser(user).then( () => {
                            dbScripts.setSession(user)
                                .then(function(res) {
                                    console.log(res);
                                    callback({bool: true, msg: 'Sign Up Successful', user: res.data}); 
                                });                                               
                        })                        
                    }).catch(function (error) {
                        callback({bool: false, msg: error.message});                        
                });               
            }
            else callback({bool: false, msg: 'Password does not match'});
        }
        else callback ({bool: false, msg: 'Email is no good'});
    },

    signInAccount: (user, callback) => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(function () {
                dbScripts.setSession(user)
                    .then(function(res) {
                        callback({bool: true, msg: 'Successful', user: res.data});
                    });                
            }).catch(function (error) {
                callback({bool: true, msg: error.message});
        });
    },

    signOut: (callback) => {
        firebase.auth().signOut()
            .then( () => {
                callback();
            });
    },

    saveVideo: (videoURL, posterURL, callback) => {
        let video = {
            thumb: posterURL,
            location: document.getElementById('video-city-input').value,
            month: document.getElementById('video-month-input').value,
            year: document.getElementById('video-year-input').value,
            description: document.getElementById('video-desc-input').value,
            video: videoURL
        };
        dbScripts.saveVideo(video).then(function(res) {
            console.log(res.data);
            callback();
        });
    },

    saveAlbum: (thumbURL, updatePosts, callback) => {
        let album = {
            thumb: thumbURL,
            location: document.getElementById('album-city-input').value,
            month: document.getElementById('album-month-input').value,
            year: document.getElementById('album-year-input').value,
            description: document.getElementById('album-desc-input').value,
            album: []
        };
        dbScripts.saveAlbum(album).then(function(res) {
            console.log(res.data._id);
            callback(res.data._id);
            updatePosts();
        }); 
    },

    savePhotos: (photoArray, id, updatePosts) => {
        dbScripts.savePhotos(photoArray, id).then(function(res) {
            console.log(res.data._id); 
            updatePosts();
        }); 
    },

    getPosts: (callback) => {
        dbScripts.getPosts().then(function(res) {
            console.log(res.data);
            callback(res.data);
        });
    },

    deletePost: (id, callback) => {
        dbScripts.deletePost(id).then(function(res) {
            console.log('Deleted');
            callback();
        });
    },

     saveCode: (codeID, name, picture, posts) => {
         let code = { 
            name: name,            
            code: codeID,
            picture: picture,
            question: document.getElementById('secret-question').value,
            answer: document.getElementById('secret-answer').value,
            posts: posts,
            expiration: -(moment().diff(document.getElementById('expiration').value)),
         };
         dbScripts.saveCode(code).then(function(res) {
            console.log(res.data);
         });
     },

     confirmCode: (code, callback) => {
         dbScripts.confirmCode(code).then(function(res) {
             if (!res.data[0]) callback(false);
             else callback(true, res.data[0]);
         });
     },

     getPostsWithFilter: (months, callback) => {
         dbScripts.getPostsWithFilter(months).then(function(res) {
             console.log(res.data);
             callback(res.data);
         });
     }
}

export default Scripts;