import React from 'react';

class Signin extends React.Component {
    constructor () {
        super();
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
                                    <input type='email' className='form-control input-sm input-header' id='email-login' placeholder='' />
                                </div>
                                <div className='col-sm-5 pangolin-font div-input-header'>
                                    <label htmlFor='email-login' className='label-header'>Password</label>
                                    <input type='password' className='form-control input-sm input-header' id='password-login' placeholder='' />
                                </div>
                                <div className='col-sm-2 pangolin-font'>
                                    <label htmlFor='sign-in'></label>
                                    <button type='submit' className='btn' id='sign-in'>Sign in</button>
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