import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import React from 'react';
import Landing from '../components/children/Landing';
import Profile from '../components/children/Profile';

class appRoute extends React.Component {
    render () {
        return (
            <Router>
                <div>    
                    <h4><Link to='/profile'>text</Link></h4>        
                    <Route exact path='/' render={ () => <Landing />} />
                    <Route path='/profile' render={ () => <Profile />} />
                </div>
            </Router>
        );
    }
};

export default appRoute;
