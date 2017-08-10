import React from 'react';
import Signin from './grandchildren/Signin'
import Signup from './grandchildren/Signup'

class Landing extends React.Component{
    constructor () {
        super();
        this.state = {
        }
    }

    render () {

        return (
            <div className='container'>
                
                <Signin />

                <hr className='top-hr' />

                <Signup />

                <hr className='mid-hr' />

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

                <hr className='bot-hr' />

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
