import React from 'react';
import {Redirect} from 'react-router-dom';
import Scripts from '../../util/scripts';

class Signup extends React.Component {
    constructor () {
        super();
        this.signUp = this.signUp.bind(this);
    }

    signUp (event) {
        event.preventDefault();
        let user = {
            name: document.getElementById('name').value.trim().toLowerCase(),
            email: document.getElementById('email').value.trim(),
            password: document.getElementById('password').value.trim(),
            confirm_password: document.getElementById('confirm-password').value.trim()
        }
        Scripts.signUpAccount(user, (state) => {
            console.log(state.msg);
            
            if (state.user) {
                this.props.updateUser(state.user);  
                this.props.updateLog();
            }  
        });
    }

    render () {
        return (
            <div className='row main-body'>  
                <div className='col-md-7'>
                    <div className='body-content'>
                        <h2></h2>
                    </div>                        
                </div>
                <div className='col-md-4 signup-body'>
                    <h1 className='flower-font signup-text-body'><strong>SIGN UP</strong></h1>
                    <h4 className='pangolin-font create-bucket-text'>Create your timeline free</h4>
                    <h4 className='pangolin-font'>Your Name and Email</h4>
                    <form>
                        <div className='form-group pangolin-font'>
                                <input type='text' className='form-control input-sm' id='name' placeholder='First Name' />
                        </div>
                        <div className='form-group pangolin-font'>
                                <input type='text' className='form-control input-sm' id='email' placeholder='Email' />
                        </div>
                        <div className='form-group pangolin-font'>
                                <input type='password' className='form-control input-sm' id='password' placeholder='Password' />
                        </div>
                        <div className='form-group pangolin-font'>
                                <input type='password' className='form-control input-sm' id='confirm-password' placeholder='Confirm Password' />
                        </div>
                        <button type='submit' className='btn btn-default right' id='signup-submit-body' onClick={this.signUp}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
};

export default Signup;