import React from 'react';

class InvalidModal extends React.Component {
    render () {
        return (
            <div className='modal fade' tabIndex='-1' role='dialog' id='invalid-modal'>
                <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <button type='button' className='close' data-dismiss='modal'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                            <h4 className='modal-title pangolin-font'>Warning!</h4>
                        </div>
                        <div className='modal-body pangolin-font'>
                            <div className='row'>
                                <h1 className='text-center'>Code is Invalid. Please Try Again.</h1>
                            </div>
                        </div>
                        <div className='modal-footer pangolin-font'>
                            <button type='button' className='btn btn-default' data-dismiss='modal'>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default InvalidModal;