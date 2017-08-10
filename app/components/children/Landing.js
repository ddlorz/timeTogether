import React from 'react';

class Landing extends React.Component{
    constructor () {
        super();
        this.state = {
        }
    }

    render () {

        return (
            <div className='container'>
                <div className='row'>
                    <div className='row center landing-header'>
                        <div className='col-md-6 flower-font'>
                            <h1 className='text-header'><strong>Time Together</strong></h1>
                        </div>
                        <div className='col-md-6'>
                            <form className='form-login'>
                                <div className='form-group row main-div-header'>
                                    <div className='col-sm-5 pangolin-font div-input-header'>
                                        <label for='email-login' className='label-header'>Email</label>
                                        <input type='email' className='form-control input-sm input-header' id='email-login' placeholder='' />
                                    </div>
                                    <div className='col-sm-5 pangolin-font div-input-header'>
                                        <label for='email-login' className='label-header'>Password</label>
                                        <input type='password' className='form-control input-sm input-header' id='password-login' placeholder='' />
                                    </div>
                                    <div className='col-sm-2 pangolin-font'>
                                        <label for='sign-in'></label>
                                        <button type='submit' className='btn' id='sign-in'>Sign in</button>
                                    </div>
                                </div>
                            </form>
                            <a href='#'><h6 className='forget-password'>Forget Password?</h6></a>
                        </div>
                    </div>
                </div>

                <hr className='top-hr' />

                <div className='row main-body'>  
                    <div className='col-md-7'>
                        <div className='body-content'>
                            <h2></h2>
                        </div>                        
                    </div>
                    <div className='col-md-4 signup-body'>
                        <h1 className='flower-font signup-text-body'><strong>SIGN UP</strong></h1>
                        <h4 className='pangolin-font create-bucket-text'>Create your bucket free</h4>
                        <h4 className='pangolin-font'>Your Name and Email</h4>
                        <div className='pangolin-font'>
                                <input type='text' className='form-control input-sm' id='first-name' placeholder='First Name' />
                        </div>
                        <div className='pangolin-font'>
                                <input type='text' className='form-control input-sm' id='first-email' placeholder='Email' />
                        </div>
                        <h5 className='pangolin-font'>Your Special Someone's Name and Email (optional)</h5>
                        <div className='pangolin-font'>
                                <input type='text' className='form-control input-sm' id='second-name' placeholder='First Name' />
                        </div>
                        <div className='pangolin-font'>
                                <input type='text' className='form-control input-sm' id='second-email' placeholder='Email' />
                        </div>
                        <div className='pangolin-font'>
                            <button type='submit' className='btn right' id='signup-submit-body'>Submit</button>
                        </div>
                    </div>
                </div>

                <hr />

                <div className='row'>
                    <div className='form-group col-md-8 col-md-offset-2'>
                        <div className='pangolin-font'>
                            <div className='input-group'>
                                <span className='input-group-addon profile-link'>Profile Link</span>
                                <input type='text' className='form-control' placeholder='' />
                                <span className='input-group-btn'>
                                    <button className='btn btn-secondary' type='button'>Submit</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div className='row'>
                    <div className='col-md-4 col-md-offset-4'>
                        <h3 className='pangolin-font text-center'>Follow Us</h3>
                        <hr className='hr-footer' />
                        <div className='text-center'>
                            <img src='./img/facebook.png' className='social-icons' alt='facebook' />
                            <img src='./img/instagram.png' className='social-icons' alt='instagram' />
                            <img src='./img/twitter.png' className='social-icons' alt='twitter' />
                            <img src='./img/youtube.png' className='social-icons' alt='youtube' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Landing;
