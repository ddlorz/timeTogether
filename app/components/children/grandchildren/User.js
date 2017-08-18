import React from 'react';

class User extends React.Component {
    render () {
        return (
            <div className='col-md-3 user-panel pangolin-font'>
                <img src={this.props.user.picture} alt='Profile Picture' className='img-responsive img-thumbnail center-block' id='display-photo' data-toggle='modal' data-target='#profile-picture-modal'/>
                <a><h3 className='text-center'><u>{this.props.user.displayName}</u></h3></a>
                <h4 className='text-center generate-code' data-toggle='modal' data-target='#generate-code-modal'>Generate Code for Share</h4>
            </div>   
        );
    }
};

export default User;