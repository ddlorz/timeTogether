import React from 'react';
import Scripts from '../../util/scripts'

class Signin extends React.Component {
    constructor () {
        super();
        this.signIn = this.signIn.bind(this);
    }

    signIn (event) {
        event.preventDefault();
        let user = {
            email: document.getElementById('email-login').value.trim(),  
            password: document.getElementById('password-login').value.trim()
        }
        Scripts.signInAccount(user, (state) => {
            console.log(state.msg);            

            if (state.user) {
                this.props.updateUser(state.user);    
                this.props.updateLog(); 
            }       
        });
    }

    render () {   
        return (
            <div className='row'>
                <div className='row center landing-header'>
                    <div className='col-md-6 flower-font'>
                        <a href='#'><h1 className='text-header'><strong>Time Together</strong></h1></a>
                    </div>
                    <div className='col-md-6'>
                        <form className='form-login'>
                            <div className='form-group row main-div-header'>
                                <div className='col-sm-5 pangolin-font div-input-header'>
                                    <label htmlFor='email-login' className='label-header'>Email</label>
                                    <input type='email' className='form-control input-sm input-header' id='email-login' placeholder='myEmail@somewhere.com' />
                                </div>
                                <div className='col-sm-5 pangolin-font div-input-header'>
                                    <label htmlFor='email-login' className='label-header'>Password</label>
                                    <input type='password' className='form-control input-sm input-header' id='password-login' placeholder='password1234' />
                                </div>
                                <div className='col-sm-2 pangolin-font'>
                                    <label htmlFor='sign-in'></label>
                                    <button type='submit' className='btn' id='sign-in' onClick={this.signIn}>Sign in</button>
                                </div>
                            </div>
                        </form>
                        <a href='#'><h6 className='forget-password'>Forget Password?</h6></a>
                    </div>
                </div>
            </div>
        );
    }
};

export default Signin;