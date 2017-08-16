import React from 'react';
import Nav from './grandchildren/Nav';
import ProfileModal from './grandchildren/ProfileModal';
import AlbumModal from './grandchildren/AlbumModal';
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
        let canvas = document.getElementById('picture-canvas');
        let files = document.getElementById('album-photo-input').files;
        canvas.toBlob(function(blob) { AWS(blob, 'thumb', 
            (url) => {
                thumbURL = url;
                for (var i = 0; i < files.length; i++) {
                    AWS(files[i], 'photo', 
                        (url) => {
                            photoArray.push(url);
                            if (photoArray.length === files.length) {
                                console.log(photoArray);
                                Scripts.saveAlbum(thumbURL, photoArray, updatePosts);
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

                <button type='button' className='btn btn-default btn-sm center-block'  data-toggle='modal' data-target='#album-carousel-modal'>Carousel</button>            

                <div className='modal fade' tabIndex='-1' role='dialog' id='album-carousel-modal'>
                    <div className='modal-dialog' role='document'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <button type='button' className='close' data-dismiss='modal'>
                                    <span aria-hidden='true'>&times;</span>
                                </button>
                                <h4 className='modal-title pangolin-font'>Album Photos</h4>
                            </div>
                            <div className='modal-body'>

                                {/*CAROUSEL*/}                                
                                <div id='album-carousel' className='carousel slide' data-ride='carousel'>
                                    <ol className='carousel-indicators'>
                                     <li data-target='#album-carousel' data-slide-to='0' className='active'></li>
                                        {this.props.photos.map((photo) => {
                                            this.props.counter();
                                            return (
                                                <li data-target='#album-carousel' data-slide-to={this.props.count}></li>                                                
                                            );
                                        })}
                                        
                                    </ol>
                
                                    <div className='carousel-inner' role='listbox'>
                                        <div className='item active'>
                                            <img src='http://www.piz18.com/wp-content/uploads/2011/11/Cute-Cat6.jpg' alt='...' />
                                        </div>
                                        
                                        <div className='item'>
                                            <img src='http://www.piz18.com/wp-content/uploads/2011/11/Cute-Cat6.jpg' alt='...' />
                                        </div>
                
                                        <div className='item'>
                                            <img src='http://www.piz18.com/wp-content/uploads/2011/11/Cute-Cat6.jpg' alt='...' />
                                        </div>
                                    </div>
                
                                    <a className='left carousel-control' href='#album-carousel' role='button' data-slide='prev'>
                                        <span className='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>
                                        <span className='sr-only'>Previous</span>
                                    </a>
                                    <a className='right carousel-control' href='#album-carousel' role='button' data-slide='next'>
                                        <span className='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>
                                        <span className='sr-only'>Next</span>
                                    </a>
                                </div>

                            </div>
                            <div className='modal-footer pangolin-font'>
                                <button type='button' className='btn btn-default' data-dismiss='modal'>Close</button>
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
