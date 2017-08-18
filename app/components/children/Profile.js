import React from 'react';
import Nav from './grandchildren/Nav';
import ProfileModal from './grandchildren/ProfileModal';
import AlbumModal from './grandchildren/AlbumModal';
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
        this.loadPosts = this.loadPosts.bind(this);
        this.changePicture = this.changePicture.bind(this);
        this.previewPicture = this.previewPicture.bind(this);
        this.previewAlbum = this.previewAlbum.bind(this);
        this.signOut = this.signOut.bind(this);
        this.saveAlbum = this.saveAlbum.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.loadPhotos = this.loadPhotos.bind(this);
    }

    test () {
        console.log(document.getElementById('expiration').value)
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

    render () {
        if (!this.props.logged) return <Redirect push to='/' />;

        return (
            <div className='container'> 

                <Nav signOut={this.signOut} />               

                <hr className='top-hr' />

                <div className='row'>
                    
                    <User user={this.props.user} />
                                            
                    <Posts posts={this.props.posts} deletePost={this.deletePost} loadPhotos={this.loadPhotos} deletePost={this.deletePost} />                           

                    <Filter />

                </div>     

                {/* MODALS! */}

                <ProfileModal previewPicture={this.previewPicture} changePicture={this.changePicture} user={this.props.user} />                

                <AlbumModal previewAlbum={this.previewAlbum} saveAlbum={this.saveAlbum} />         

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
                            <div className='modal-body'>
                                <div className='row'>
                                    <div className='col-md-8 col-md-offset-2'>
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
                                <button type='button' className='btn btn-primary' id='save-profile-photo' onClick={this.test} data-dismiss='modal'>Submit</button>
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
