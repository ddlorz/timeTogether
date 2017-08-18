import React from 'react';

class AlbumModal extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (       
                <div>                                                               
                    <div className='modal-body'>    
                        <div className='row'>
                            <div className='col-md-12 pangolin-font'>
                                <div className='input-group video-div'>                                        
                                    <input type='file' className='form-control' id='video-input'/>
                                    <span className='input-group-addon' >Video File</span>
                                </div>   
                                <video className='video center-block'  width='500' height='300' controls poster='http://steveladdmusic.com/wp-content/themes/americanaura/assets/images/default-video-thumbnail.jpg'>
                                    <source src='' type='video/mp4' />
                                </video>        
                                <div className='row'>        
                                    <div className='col-md-6'>
                                        <h6 className='text-center'>Select Poster File</h6>
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