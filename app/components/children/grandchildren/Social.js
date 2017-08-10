import React from 'react';

class Social extends React.Component {
    constructor () {
        super();
    }

    render () {
        return (
            <div className='row'>
                <div className='col-md-4 col-md-offset-4'>
                    <h3 className='pangolin-font text-center'>Follow Us</h3>
                    <hr className='hr-footer' />
                    <div className='text-center'>
                        <a href='#'><img src='./img/facebook.png' className='social-icons' alt='facebook' /></a>
                        <a href='#'><img src='./img/instagram.png' className='social-icons' alt='instagram' /></a>
                        <a href='#'><img src='./img/twitter.png' className='social-icons' alt='twitter' /></a>
                        <a href='#'><img src='./img/youtube.png' className='social-icons' alt='youtube' /></a>
                    </div>
                </div>
            </div>
        );
    }
};

export default Social;