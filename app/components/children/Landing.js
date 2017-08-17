import React from 'react';
import Signin from './grandchildren/Signin';
import Signup from './grandchildren/Signup';
import Invitation from './grandchildren/Invitation';
import {Redirect} from 'react-router-dom';

class Landing extends React.Component {
    constructor () {
        super();
    }

    render () {
        if (this.props.logged) return <Redirect push to='/profile' />;
        if (this.props.visitor) return <Redirect push to='/visit' />;

        return (
            <div className='container'>
            
                <Signin updateUser={this.props.updateUser} updateLog={this.props.updateLog} />

                <hr className='top-hr' />

                <Signup updateUser={this.props.updateUser} updateLog={this.props.updateLog} />

                <hr className='mid-hr' />

                <Invitation updateVisitor={this.props.updateVisitor} />

                <hr className='bot-hr' />                
                
            </div>
        );
    }
};

export default Landing;
