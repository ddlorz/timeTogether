import React from 'react';

class AlbumModal extends React.Component {
    constructor (props) {
        super(props);
        this.previewVideo = this.previewVideo.bind(this);
    }

    previewVideo () {
        let video = document.getElementById('video-input').files;
        let source = document.getElementById('video-preview');
        source.src = URL.createObjectURL(video[0]);
        source.parentElement.poster = 'http://josephmarr.com/wp-content/uploads/2014/06/video_preview-image.jpg';
        source.parentElement.load();
    }

    render () {
        return (       
                <div>                                                               
                    <div className='modal-body'>    
                        <div className='row'>
                            <div className='col-md-12 pangolin-font'>                                
                                <video className='video center-block' id='xxx' width='500' height='300' controls poster='http://steveladdmusic.com/wp-content/themes/americanaura/assets/images/default-video-thumbnail.jpg'>
                                    <source src='' id='video-preview' type='video/mp4' />
                                </video>    
                                <div className='input-group video-div'>                                      
                                    <input type='file' className='form-control' id='video-input' onChange={this.previewVideo}/>
                                    <span className='input-group-addon' >Video File</span>
                                </div>       
                                <div className='row'>        
                                    <div className='col-md-6'>
                                        <h6 className='text-center'>Select Video Poster</h6>
                                        <input type='file' className='form-control' id='poster-input'/>    
                                        <input type='text' className='form-control' id='video-month-input' placeholder='Month ex. January'  />
                                        <input type='text' className='form-control' id='video-year-input' placeholder='Year ex. 2017'  />
                                    </div>

                                    <div className='col-md-6'>
                                        <input type='text' className='form-control' id='video-city-input' placeholder='City, State ex. Houston, TX'  />
                                        <textarea type='text' className='form-control' id='video-desc-input' rows='4' placeholder='Description'  />
                                    </div>
                                                
                                </div>         
                            </div>
                        </div>
                    </div>
                    <div className='modal-footer pangolin-font'>
                        <button type='button' className='btn btn-default' data-dismiss='modal'>Close</button>
                        <button type='button' className='btn btn-primary' id='save-profile-photo'  data-dismiss='modal' onClick={this.props.saveVideo}>Save</button>
                    </div>
                </div>
        );
    }
};

export default AlbumModal;