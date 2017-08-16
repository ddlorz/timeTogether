import React from 'react';
import ReactDOM from 'react-dom';
import appRoute from './router/appRoute';

import Main from './components/Main';
import Landing from './components/children/Landing';
import Profile from './components/children/Profile';
import Footer from './components/children/grandchildren/Footer';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Main />
    </Router>
,document.getElementById('app'));