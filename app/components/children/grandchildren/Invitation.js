import React from 'react';
import Scripts from '../../util/scripts';

class Invitation extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            codeInvalid: false
        };
        this.confirmCode = this.confirmCode.bind(this);
    }

    confirmCode () {
        let code = document.getElementById('invitation-link').value;
        Scripts.confirmCode(code, this.props.codeValidated);
    }

    render () {
        return (
            <div className='row'>
                <div className='form-group col-md-8 col-md-offset-2'>
                    <div className='pangolin-font'>
                        <h4 className='text-center'><strong>Did a family or friend give you a code? Enter it here.</strong></h4>
                        <div className='input-group'>                            
                            <span className='input-group-addon profile-link'>Link</span>
                            <input type='text' className='form-control' id='invitation-link' />
                            <span className='input-group-btn'>
                                <button className='btn btn-secondary' type='button' onClick={this.confirmCode} >Submit</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Invitation;