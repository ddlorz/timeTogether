import React from 'react';

class CodeModal extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
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
                                    <h2 className='text-center'>{this.props.code}</h2>
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
                            <button type='button' className='btn btn-primary' id='save-profile-photo' onClick={this.props.saveCode} data-dismiss='modal'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default CodeModal;