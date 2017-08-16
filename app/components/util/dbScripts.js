import axios from 'axios';

let dbScripts = {
    setSession: (user) => {
        return axios.post('/api/setSession', user);
    },
    saveUser: (user) => {
        return axios.post('/api/newUser', user);
    },
    saveUrl: (url) => {
        return axios.post('/api/saveUrl', {url: url});
    },
    savePhotos: (photoArray, id) => {
        return axios.post('/api/savePhotos', {photos: photoArray, id: id});
    },
    saveAlbum: (album) => {
        return axios.post('/api/saveAlbum', {album: album});
    },
    getPosts: () => {
        return axios.post('/api/getPosts', {});
    },
    deletePost: (id) => {
        return axios.post('/api/deletePost', {id: id});
    },
    getPhotos: (id) => {
        return axios.post('/api/getPhotos', {id: id});
    }
}

export default dbScripts;