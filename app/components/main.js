import React from 'react';
import Profile from './children/Profile';
import Landing from './children/Landing';
import Visitor from './children/Visitor';
import Footer from './children/grandchildren/Footer';
import Social from './children/grandchildren/Social';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

class Main extends React.Component{
    constructor () {
        super();
        this.state = {
            user: {},
            posts: [],
            photos: '',
            video: null,
            loggedIn: false,
            visitor: false
        }
        this.updateUser = this.updateUser.bind(this);
        this.updateLog = this.updateLog.bind(this);
        this.getPosts = this.getPosts.bind(this);
        this.saveAlbumID = this.saveAlbumID.bind(this);
        this.updateVisitor = this.updateVisitor.bind(this);
    }

    saveAlbumID (id) {
        this.setState({
            photos: id
        });
    }

    getPosts (posts) {
        this.setState({
            posts: posts.reverse()
        }, () => {
            document.getElementById('close-modal').click();
            document.getElementById('save-album').innerHTML = 'Save';
            document.getElementById('save-video').innerHTML = 'Save';
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

    updateVisitor () {
        console.log('Update Visitor');
        this.setState({
            visitor: !this.state.loggedIn
        })
    }

    render () {
        return (
            <div>    
                <Route exact path='/' render={ () => <Landing updateUser={this.updateUser} updateLog={this.updateLog} logged={this.state.loggedIn} visitor={this.state.visitor} updateVisitor={this.updateVisitor} />} />
                <Route path='/profile' render={ () => <Profile user={this.state.user} updateLog={this.updateLog} logged={this.state.loggedIn} posts={this.state.posts} getPosts={this.getPosts} photos={this.state.photos} saveAlbumID={this.saveAlbumID} />} />
                <Route path='/visit' render={ () => <Visitor />} />

                <Social />
                <Footer />
            </div>
        );
    }
};

export default Main;


