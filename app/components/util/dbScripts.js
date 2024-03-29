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
    saveVideo: (video) => {
        return axios.post('/api/saveVideo', {video: video});
    },
    getPosts: () => {
        return axios.post('/api/getPosts', {});
    },
    deletePost: (id) => {
        return axios.post('/api/deletePost', {id: id});
    },
    saveCode: (code) => {
        return axios.post('/api/saveCode', {code: code});
    },
    confirmCode: (code) => {
        return axios.post('/api/confirmCode', {code: code});
    },
    getPostsWithFilter: (months) => {
        return axios.post('/api/getPostsWithFilter', {months: months});
    }
}

export default dbScripts;