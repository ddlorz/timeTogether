import React from 'react';
import {Redirect} from 'react-router-dom';

class Visitor extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            photos: ''
        }
        this.guestOut = this.guestOut.bind(this);
    }

    guestOut () {
        this.props.updateVisitor();
    }

    saveAlbumID (id) {
        console.log(id);
        this.setState({
            photos: id
        }, () => {
            console.log(this.state);
            console.log(this.props.guestData);
        });
    }

    render () {     
        if (!this.props.visitor) return <Redirect push to='/' />;

        let postMatch = [];
        postMatch = this.props.guestData.posts.filter((post) => {return post._id === this.state.photos})
        if (!postMatch[0]) postMatch[0] = {album: ['placeholder']};
        
        return (
            <div className='container'> 

                <nav className='navbar nav-bar'> 
                    <div className='container-fluid'>
                        <div className='navbar-header flower-font'>
                            <a className='navbar-brand profile-text-header' href='#'><strong>Time Together</strong></a>
                        </div>
                        <div className='collapse navbar-collapse'>
                            <ul className='nav navbar-nav navbar-right pangolin-font'>
                                <li><a onClick={this.guestOut}>Sign Out</a></li>
                            </ul> 
                        </div>
                    </div>
                </nav>               

                <hr className='top-hr' />

                <div className='row'>
                    
                    <div className='col-md-3 user-panel pangolin-font'>
                        <img src={this.props.guestData.picture} alt='Profile Picture' className='img-responsive img-thumbnail center-block' id='display-photo' />
                        <a href='#'><h3 className='text-center'><u>{this.props.guestData.name}</u></h3></a>
                    </div> 
                                            
                    <div className='col-md-7'>                        

                        {this.props.guestData.posts.map((post) => {
                            let postBody;
                            if (post.video) {
                                postBody =  <div className='row album-post pangolin-font' key={post._id+'dv1'}>
                                                <div className='col-md-9 video-div' key={post._id+'dv2'}>
                                                    <video className='video videoPost' width='380' key={post._id+'vid'} controls poster={post.thumb}>
                                                        <source src={post.video} type='video/mp4' />
                                                    </video>                                            
                                                </div>
                                                <div className='col-md-3 info-div'>
                                                    <h6 key={post._id+'h61'}>{post.location}</h6>
                                                    <h6 key={post._id+'h62'}>{post.month}, {post.year}</h6>
                                                    <h5 key={post._id+'h5'}>{post.description}</h5>
                                                </div>
                                            </div>
                            }

                            else {
                                postBody =  <div className='row album-post pangolin-font' key={post._id+'dv1'}>
                                                <div className='col-md-5' key={post._id+'dv2'}>
                                                    <img src={post.thumb} className='album-pic thumbnail' alt='Album Pic' key={post._id+'img'} />                                
                                                </div>                            
                                                <div className='col-md-7' key={post._id+'dv3'}>                                                    
                                                    <button type='button' className='btn btn-default btn-xs' key={post._id+'btn'} data-toggle='modal' data-target='#visitor-carousel-modal' onClick={this.saveAlbumID.bind(this, post._id)}>Open Album</button>
                                                    <h6 key={post._id+'h61'}>{post.location}</h6>
                                                    <h6 key={post._id+'h62'}>{post.month}, {post.year}</h6>
                                                    <h4 key={post._id+'h4'}>{post.description}</h4>
                                                </div>
                                            </div>
                            }
                            return postBody;

                            return (
                                {postBody}
                            );
                        })}
                    </div>                          

                    <div className='col-md-2 pangolin-font'>
                        <div className='row filter-div'>
                            <h4 className='text-center'>Filters</h4>
                            <h5 className='text-center'>Date</h5>

                            <div data-toggle='buttons'>
                                <label className='btn btn-default chk-month'>
                                    <input type='checkbox' autoComplete='off' className='' /> Jan
                                </label>
                                <label className='btn btn-default chk-month'>
                                    <input type='checkbox' autoComplete='off' className='' /> Feb
                                </label>
                                <label className='btn btn-default chk-month'>
                                    <input type='checkbox' autoComplete='off' className='' /> Mar
                                </label>
                                <label className='btn btn-default chk-month'>
                                    <input type='checkbox' autoComplete='off' className='' /> Apr
                                </label>
                                <label className='btn btn-default chk-month'>
                                    <input type='checkbox' autoComplete='off' className='' /> May
                                </label>
                                <label className='btn btn-default chk-month'>
                                    <input type='checkbox' autoComplete='off' className='' /> Jun
                                </label>
                                <label className='btn btn-default chk-month'>
                                    <input type='checkbox' autoComplete='off' className='' /> Jul
                                </label>
                                <label className='btn btn-default chk-month'>
                                    <input type='checkbox' autoComplete='off' className='' /> Aug
                                </label>
                                <label className='btn btn-default chk-month'>
                                    <input type='checkbox' autoComplete='off' className='' /> Sep
                                </label>
                                <label className='btn btn-default chk-month'>
                                    <input type='checkbox' autoComplete='off' className='' /> Oct
                                </label>
                                <label className='btn btn-default chk-month'>
                                    <input type='checkbox' autoComplete='off' className='' /> Nov
                                </label>
                                <label className='btn btn-default chk-month'>
                                    <input type='checkbox' autoComplete='off' className='' /> Dec
                                </label>
                            </div>

                            <div className='form-group input-group-sm'>
                                <h5 className='text-center'>City</h5>
                                <input type='text' className='form-control' id='location-filter' />  
                                <button type='button' className='btn btn-default btn-sm center-block' id='submit-filter'>Submit</button>                               
                            </div>
                        </div>
                    </div>  

                </div>     

                {/* MODALS! */}
                <div className='modal fade' tabIndex='-1' role='dialog' id='visitor-carousel-modal'>
                    <div className='modal-dialog' role='document'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <button type='button' className='close' data-dismiss='modal'>
                                    <span aria-hidden='true'>&times;</span>
                                </button>
                                <h4 className='modal-title pangolin-font'>Album Photos</h4>
                            </div>
                            <div className='modal-body'>

                            {/*CAROUSEL*/}                            
                                <div id="album-carousel" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        {postMatch[0].album.map((photo, index) => {
                                            let active = '';
                                            if (index === 0) active = 'active';
                                            return ( 
                                                <li data-target='#album-carousel' data-slide-to={index} className={active} key={index+'li'}></li>                                                                                           
                                            );
                                        })}     
                                    </ol>

                                    <div className="carousel-inner" role="listbox">
                                        {postMatch[0].album.map((photo, index) => {
                                            let active = 'item';
                                            if (index === 0) active = 'item active';
                                            return (
                                                <div className={active} key={index+'div'}>
                                                    <img className='d-block img-fluid' src={photo} alt='Album Photo' key={index+'img'} />
                                                </div>
                                            );
                                        })}     
                                    </div>

                                    <a className="left carousel-control" href="#album-carousel" role="button" data-slide="prev">
                                        <span className="icon-prev"></span>
                                    </a>
                                    <a className="right carousel-control" href="#album-carousel" role="button" data-slide="next">
                                        <span className="icon-next"></span>
                                    </a>
                                </div>

                            </div>
                            <div className='modal-footer pangolin-font'>
                                <button type='button' className='btn btn-default' data-dismiss='modal'>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <hr />

            </div>
        );
    }
};

export default Visitor;