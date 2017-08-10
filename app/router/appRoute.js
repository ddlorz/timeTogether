import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react';
import Landing from '../components/children/Landing';

class appRoute extends React.Component {
    render () {
        return (
            <Router>
                <div>
                    text
                    <Route exact path='/' component={Landing} />
                </div>
            </Router>
        );
    }
};

export default appRoute;
