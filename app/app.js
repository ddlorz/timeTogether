import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import appRoute from './router/appRoute';


//ReactDOM.render(<appRoute />, document.getElementById('app'));

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Landing from './components/children/Landing';
import Profile from './components/children/Profile';

ReactDOM.render(
    <Router>
        <div>    
            <h4><Link to='/profile'>text</Link></h4>        
            <Route path='/' component={Landing} />
            <Route path='/profile' component={Profile} />
        </div>
    </Router>,     
    
    document.getElementById('app'));