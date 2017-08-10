import React from 'react';
import Signin from './grandchildren/Signin';
import Signup from './grandchildren/Signup';
import Invitation from './grandchildren/Invitation';
import Social from './grandchildren/Social';
import Footer from './grandchildren/Footer';

let Landing = (props) => (
            <div className='container'>
                
                <Signin />

                <hr className='top-hr' />

                <Signup />

                <hr className='mid-hr' />

                <Invitation />

                <hr className='bot-hr' />

                <Social />

                <Footer />

            </div>
)

export default Landing;
