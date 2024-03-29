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
                        <div className='col-md-6 pangolin-font'>
                            <div id='album-canvas'>                                            
                                <img src='http://www.gallegosauto.com/images/placeholder.gif' alt='Video Picture' className='thumbnail' id='modal-album-picture' />
                            </div>
                            <div>
                                <h5 className='text-center'>Album Thumbnail</h5>
                                <input type='file' className='form-control' id='album-thumbnail-input' onChange={this.props.previewAlbum} />
                            </div>                                        
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group pangolin-font'>                                            
                                <input type='text' className='form-control' id='album-city-input' placeholder='City, State ex. Houston, TX'  />
                                <input type='text' className='form-control' id='album-month-input' placeholder='Month ex. January'  />
                                <input type='text' className='form-control' id='album-year-input' placeholder='Year ex. 2017'  />
                                <textarea type='text' className='form-control' id='album-desc-input' rows='4' placeholder='Description'  />
                                <h6 className='text-center'>Select Multiples Files</h6>
                                <input type='file' className='form-control' id='album-photo-input' multiple/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='modal-footer pangolin-font'>
                    <button type='button' className='btn btn-default' data-dismiss='modal' id='close-album' >Close</button>
                    <button type='button' className='btn btn-primary' id='save-album'  data-dismiss='modal' onClick={this.props.saveAlbum}>Save</button>
                </div>
            </div>
        );
    }
};

export default AlbumModal;