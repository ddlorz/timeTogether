import React from 'react';
import Nav from './grandchildren/Nav';
import ProfileModal from './grandchildren/ProfileModal';
import AlbumModal from './grandchildren/AlbumModal';
import CarouselModal from './grandchildren/CarouselModal';
import Filter from './grandchildren/Filter';
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
                    <div className='col-md-3 user-panel pangolin-font'>
                        <img src={this.props.user.picture} alt='Profile Picture' className='img-responsive img-thumbnail center-block' id='display-photo' data-toggle='modal' data-target='#profile-picture-modal'/>
                        <a><h3 className='text-center'><u>{this.props.user.displayName}</u></h3></a>
                        <h4 className='text-center'>Generate Link</h4>
                    </div>   

                    <div className='col-md-7 col-md-offset-0'>
                        <div className='row add-album-div'>
                            <button type='button' className='btn btn-default btn-sm center-block'  data-toggle='modal' data-target='#add-album-modal'>Add Album</button>
                        </div>
                        
                        {/* ALBUM POSTS */}                        
                        <Posts posts={this.props.posts} deletePost={this.deletePost} loadPosts={this.loadPosts} deletePost={this.deletePost} />
                        
                    </div>      

                    <Filter />

                </div>     

                {/* MODALS! */}

                <ProfileModal previewPicture={this.previewPicture} changePicture={this.changePicture} user={this.props.user} />                

                <AlbumModal previewAlbum={this.previewAlbum} saveAlbum={this.saveAlbum} />         

                <CarouselModal post={this.props.posts} />

                <hr />

            </div>
        );
    }
};   

export default Profile;
