import React from 'react';

class ProfileModal extends React.Component {
    constructor () {
        super();    
    }

    render () {
        return (
            <div className='modal fade' tabIndex='-1' role='dialog' id='profile-picture-modal'>
                <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <button type='button' className='close' data-dismiss='modal'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                            <h4 className='modal-title pangolin-font'>Update Profile Picture</h4>
                        </div>
                        <div className='modal-body'>
                            <div id='photo-canvas'>
                                <img src={this.props.user.picture} alt='Profile Picture' className='center-block thumbnail' id='profile-photo' />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='profile-photo'>Upload Photo</label>
                                <input type='file' className='form-control' id='profile-photo-input' onChange={this.props.previewPicture}/>
                            </div>
                        </div>
                        <div className='modal-footer pangolin-font'>
                            <button type='button' className='btn btn-default' data-dismiss='modal'>Close</button>
                            <button type='button' className='btn btn-primary' id='save-profile-photo'  data-dismiss='modal' onClick={this.props.changePicture}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default ProfileModal;