import React from 'react';

class Posts extends React.Component {
    constructor (props) {
        super(props);    
    }

    render () {
        return (
            <div>
                {this.props.posts.reverse().map((post) => {
                    return (
                        <div className='row album-post pangolin-font'>
                            <div className='col-md-5'>
                                <img src={post.thumb} className='album-pic thumbnail' alt='Album Pic' />                                
                            </div>                            
                            <div className='col-md-7'>
                                <button type='button' className='close' data-dismiss='modal'>
                                    <span aria-hidden='true'>&times;</span>
                                </button>
                                <button type='button' className='btn btn-default btn-xs'>Open Album</button>
                                <h6>{post.location}</h6>
                                <h6>{post.month}, {post.year}</h6>
                                <h4>{post.description}</h4>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
};

export default Posts;