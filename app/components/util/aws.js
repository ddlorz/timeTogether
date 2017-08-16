import dbScripts from './dbScripts';
import uuid from 'uuid'

export default function AWS(file, tag, callback, length, loop) {

    initUpload(file);

    function initUpload(file) {
        //const file = blob;
        if (file == null){
            console.log('No file selected.');
        }
        getSignedRequest(file);
    };

    function getSignedRequest(file) {
        const xhr = new XMLHttpRequest();
        if (tag !== 'photo') file.name = uuid();        
        xhr.open('GET', `/sign-s3?file-name=${file.name}&file-type=${file.type}`);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4){
            if (xhr.status === 200){
                const response = JSON.parse(xhr.responseText);
                uploadFile(file, response.signedRequest, response.url);
            }
            else {
                alert('Could not get signed URL.');
            }
            }
        };
        xhr.send();
    };

    function uploadFile(file, signedRequest, url) {
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', signedRequest);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4){
            if (xhr.status === 200){
                console.log('Upload Complete');
                if (tag === 'profile') {
                    console.log('profile');
                    document.getElementById('display-photo').src = url;
                    dbScripts.saveUrl(url);
                }
                else if (tag === 'thumb') {
                    callback(url);
                }
                else if (tag === 'photo') {
                    callback(url);
                }
            }
            else {
                alert('Could not upload file.');
            }
            }
        };
        xhr.send(file);
    };
    
}
