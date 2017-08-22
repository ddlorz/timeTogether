import React from 'react';
import Signin from './grandchildren/Signin';
import Signup from './grandchildren/Signup';
import InvalidModal from './grandchildren/InvalidModal';
import ValidModal from './grandchildren/ValidModal';
import Invitation from './grandchildren/Invitation';
import {Redirect} from 'react-router-dom';

class Landing extends React.Component {
    constructor (props) {
        super(props);
        this.codeValidated = this.codeValidated.bind(this);
    }

    codeValidated (bool, data) {
        console.log(bool);
        if (bool) {
            console.log(data);
            $('#valid-modal').modal('show');
            this.props.setGuestData(data);
        } 
        else $('#invalid-modal').modal('show');
    }

    render () {
        if (this.props.logged) return <Redirect push to='/profile' />;
        if (this.props.visitor) return <Redirect push to='/visit' />;

        let valid;

        return (
            <div className='container'>
            
                <Signin updateUser={this.props.updateUser} updateLog={this.props.updateLog} />

                <hr className='top-hr' />

                <Signup updateUser={this.props.updateUser} updateLog={this.props.updateLog} />

                <hr className='mid-hr' />

                <Invitation  codeValidated={this.codeValidated} />                

                <hr className='bot-hr' /> 

                <InvalidModal />  
                
                <ValidModal guestData={this.props.guestData} updateVisitor={this.props.updateVisitor}/>            
                
            </div>
        );
    }
};

export default Landing;
