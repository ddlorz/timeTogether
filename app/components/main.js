import React from 'react';
import Profile from './children/Profile';
import Landing from './children/Landing';

class Main extends React.Component{
    constructor () {
        super();
        this.state = {
            logged: false
        }
    }

    render () {
        let Display;
        if (this.state.logged) Display = <Profile />
        else Display = <Landing />

        return (
            <div>
                <div>   
                    {Display}
                </div>
            </div>
        );
    }
};

export default Main;
