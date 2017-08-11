import React from 'react';
import ReactDOM from 'react-dom';
import appRoute from './router/appRoute';

import Landing from './components/children/Landing';
import Profile from './components/children/Profile';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <div>    
            <h4><Link to='/profile'>text</Link></h4>        
            <Route exact path='/' render={ () => <Landing />} />
            <Route path='/profile' render={ () => <Profile />} />
        </div>
    </Router>
,document.getElementById('app'));