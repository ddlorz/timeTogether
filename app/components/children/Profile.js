import React from 'react';
import Footer from './grandchildren/Footer';

class Profile extends React.Component {
    constructor () {
        super();
    }

    render () {
        return (
            <div className='container'>
                <div className='row flower-font'>
                    <h1><strong>Time Together</strong></h1>
                </div>

                <Footer />
            </div>
        );
    }
};   

export default Profile;
