import React from 'react';

class Nav extends React.Component {
    constructor (props) {
        super(props);    
    }

    render () {
        return (
            <nav className='navbar nav-bar'> 
                <div className='container-fluid'>
                    <div className='navbar-header flower-font'>
                        <a className='navbar-brand profile-text-header' href='#'><strong>Time Together</strong></a>
                    </div>
                    <div className='collapse navbar-collapse'>
                        <ul className='nav navbar-nav navbar-right pangolin-font'>
                            <li><a>Profile</a></li>
                            <li><a>Settings</a></li>
                            <li><a onClick={this.props.signOut} >Sign Out</a></li>
                        </ul> 
                    </div>
                </div>
            </nav>
        );
    }
};

export default Nav;