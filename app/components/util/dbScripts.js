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
    savePhotos: (photoArray) => {
        return axios.post('/api/savePhotos', {photos: photoArray});
    },
    saveAlbum: (album) => {
        return axios.post('/api/saveAlbum', {album: album});
    },
    getPosts: () => {
        return axios.post('/api/getPosts', {});
    }
}

export default dbScripts;