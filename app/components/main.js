import React from 'react';
import Profile from './children/Profile';
import Landing from './children/Landing';
import Footer from './children/grandchildren/Footer';
import Social from './children/grandchildren/Social';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

class Main extends React.Component{
    constructor () {
        super();
        this.state = {
            user: {},
            posts: [],
            loggedIn: false
        }
        this.updateUser = this.updateUser.bind(this);
        this.updateLog = this.updateLog.bind(this);
        this.getPosts = this.getPosts.bind(this);
    }

    getPosts (posts) {
        this.setState({
            posts: posts
        });
    }

    updateUser (user) {
        console.log('Update User');
        user.displayName = user.name.replace(/(\b[a-z](?!\s))/g, function(x){return x.toUpperCase();});
        this.setState({
            user: user
        });
        console.log(this.state.user);
    }

    updateLog () {
        console.log('Update Log');
        this.setState({
            loggedIn: !this.state.loggedIn
        })
    }

    render () {
        return (
            <div>    
                <Route exact path='/' render={ () => <Landing updateUser={this.updateUser} updateLog={this.updateLog} logged={this.state.loggedIn} />} />
                <Route path='/profile' render={ () => <Profile user={this.state.user} updateLog={this.updateLog} logged={this.state.loggedIn} posts={this.state.posts} getPosts={this.getPosts} photos={this.state.photos} getPhotos={this.getPhotos} />} />

                <Social />
                <Footer />
            </div>
        );
    }
};

export default Main;


