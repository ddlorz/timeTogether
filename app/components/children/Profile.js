import React from 'react';
import uuid from 'uuid';
import Nav from './grandchildren/Nav';
import ProfileModal from './grandchildren/ProfileModal';
import ParentModal from './grandchildren/ParentModal';
import CarouselModal from './grandchildren/CarouselModal';
import Filter from './grandchildren/Filter';
import User from './grandchildren/User';
import Posts from './grandchildren/Posts';
import AWS from '../util/aws';
import Scripts from '../util/scripts';
import imageScripts from '../util/imageScripts';
import {Redirect} from 'react-router-dom';

class Profile extends React.Component {
    constructor (props) {
        super(props);        
        this.state = {
            code: ''
        }
        this.loadPosts = this.loadPosts.bind(this);
        this.changePicture = this.changePicture.bind(this);
        this.previewPicture = this.previewPicture.bind(this);
        this.previewAlbum = this.previewAlbum.bind(this);
        this.signOut = this.signOut.bind(this);
        this.saveAlbum = this.saveAlbum.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.loadPhotos = this.loadPhotos.bind(this);
        this.saveVideo = this.saveVideo.bind(this);
        this.createCode = this.createCode.bind(this);
        this.saveCode = this.saveCode.bind(this);
    }

    createCode () {
        this.setState({
            code: uuid()
        });
    }

    loadPhotos (id) {
        console.log(id);
        this.props.saveAlbumID(id);
    }

    componentWillMount () {
        this.loadPosts();
    } 

    loadPosts () {        
        Scripts.getPosts((posts) => {
            this.props.getPosts(posts);
        });
    }

    signOut () {
        Scripts.signOut( () => {
            this.props.updateLog();
        });
    }

    previewPicture () {
        imageScripts.previewPicture('profile-photo-input', 'profile-canvas', 'photo-canvas');
    }

    previewAlbum () {
        imageScripts.previewPicture('album-thumbnail-input', 'picture-canvas', 'album-canvas');
    }

    changePicture () {
        let canvas = document.getElementById('profile-canvas');
        canvas.toBlob(function(blob) { AWS(blob, 'profile') });
    }  
    
    deletePost (id) {
        console.log(id);
        Scripts.deletePost(id, () => {
            this.loadPosts();
        });
    }
    
    saveAlbum () {
        document.getElementById('save-album').innerHTML = 'Uploading...';
        let updatePosts = this.loadPosts;
        let thumbURL = '', photoArray = [];
        let albumID = '';
        let canvas = document.getElementById('picture-canvas');
        let files = document.getElementById('album-photo-input').files;
        canvas.toBlob(function(blob) { AWS(blob, 'thumb', 
            (url) => {
                thumbURL = url;
                Scripts.saveAlbum(thumbURL, updatePosts, (id) => {
                    albumID = id;
                    console.log(albumID);
                }); 
                for (var i = 0; i < files.length; i++) {
                    AWS(files[i], 'photo', 
                        (url) => {
                            photoArray.push(url);
                            if (photoArray.length === files.length) {
                                console.log(photoArray);
                                Scripts.savePhotos(photoArray, albumID, updatePosts);
                            }
                        }
                    )
                }
            }
        )});
    }

    saveVideo () {
        document.getElementById('save-video').innerHTML = 'Uploading...';
        let updatePosts = this.loadPosts;
        let video = document.getElementById('video-input').files;
        let poster = document.getElementById('poster-input').files;
        AWS(video[0], 'video', (url) => {
            let videoURL = url.replace('time-together.s3.amazonaws.com', 'd281fcpe4558jz.cloudfront.net');
            console.log(videoURL);
            AWS(poster[0], 'photo', (url) => {
                let posterURL = url;
                Scripts.saveVideo(videoURL, posterURL, () => {
                    updatePosts();
                    document.getElementById('close-video').click();
                });
            });
        });
    }

    saveCode () {
        let code = this.state.code;
        let name = this.props.user.name;
        Scripts.saveCode(code, name);
    }

    render () {
        if (!this.props.logged) return <Redirect push to='/' />;

        return (
            <div className='container'> 

                <Nav signOut={this.signOut} />               

                <hr className='top-hr' />

                <div className='row'>
                    
                    <User user={this.props.user} createCode={this.createCode} />
                                            
                    <Posts posts={this.props.posts} deletePost={this.deletePost} loadPhotos={this.loadPhotos} deletePost={this.deletePost} />                           

                    <Filter />

                </div>     

                {/* MODALS! */}

                <ProfileModal previewPicture={this.previewPicture} changePicture={this.changePicture} user={this.props.user} />   

                <ParentModal previewAlbum={this.previewAlbum} saveAlbum={this.saveAlbum}  saveVideo={this.saveVideo} />  

                <CarouselModal posts={this.props.posts} photos={this.props.photos} />

                <div className='modal fade' tabIndex='-1' role='dialog' id='generate-code-modal'>
                    <div className='modal-dialog' role='document'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <button type='button' className='close' data-dismiss='modal'>
                                    <span aria-hidden='true'>&times;</span>
                                </button>
                                <h4 className='modal-title pangolin-font'>Code for Share</h4>
                            </div>
                            <div className='modal-body pangolin-font'>
                                <div className='row'>
                                    <div className='col-md-8 col-md-offset-2'>
                                        <h6 className='text-center'>The code is...</h6>
                                        <h2 className='text-center'>{this.state.uuid}</h2>
                                        <label htmlFor='secret-question'>Secret Question</label>
                                        <input type='text' className='form-control' id='secret-question' placeholder="ex. Who's #1 cowboy?" />

                                        <label htmlFor='secret-answer'>Secret Answer</label>
                                        <input type='text' className='form-control' id='secret-answer' placeholder='ex. John Wayne' />

                                        <label htmlFor='secret-answer'>Date of Expiration</label>
                                        <input type='datetime-local' className='form-control' id='expiration' />
                                    </div>
                                </div>
                            </div>
                            <div className='modal-footer pangolin-font'>
                                <button type='button' className='btn btn-default' data-dismiss='modal'>Close</button>
                                <button type='button' className='btn btn-primary' id='save-profile-photo' onClick={this.saveCode} data-dismiss='modal'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

            </div>
        );
    }
};   

export default Profile;
