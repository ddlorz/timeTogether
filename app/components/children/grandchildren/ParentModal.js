import React from 'react';
import AlbumModal from './AlbumModal';
import VideoModal from './VideoModal';

class ParentModal extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            tab: 'album'
        }
        this.changeToAlbum = this.changeToAlbum.bind(this);
        this.changeToVideo = this.changeToVideo.bind(this);
    }

    changeToAlbum () {
        this.setState({
            tab: 'album'
        }, () => {
            document.getElementById('album-li').classList.add('active');
            document.getElementById('video-li').classList.remove('active');
        });
    }

    changeToVideo () {
        this.setState({
            tab: 'video'
        }, () => {
            document.getElementById('album-li').classList.remove('active');
            document.getElementById('video-li').classList.add('active');
        });
    }

    render () {
        let tab;
        if (this.state.tab === 'album' ) {
            tab = <AlbumModal previewAlbum={this.props.previewAlbum} saveAlbum={this.props.saveAlbum} />
        }
        else if (this.state.tab === 'video' ) {
            tab = <VideoModal saveVideo={this.props.saveVideo}/>
        }

        return (
            <div className='modal fade' tabIndex='-1' role='dialog' id='add-post-modal'>
                <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header no-border'>
                            <button type='button' className='close' data-dismiss='modal'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                            <h4 className='modal-title pangolin-font'>Post an Album or Video</h4>
                            <ul className='nav nav-tabs pangolin-font'>
                                <li role='presentation' id='album-li' className='active'><a href='#' data-toggle='modal' data-target='#add-album-modal' onClick={this.changeToAlbum}>Album</a></li>
                                <li role='presentation' id='video-li' ><a href='#' onClick={this.changeToVideo}>Video</a></li>
                            </ul>                        
                        </div>  

                            {tab}                            
                                              
                    </div>
                </div>
            </div>
        );
    }
};

export default ParentModal;