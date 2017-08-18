import React from 'react';

class Posts extends React.Component {
    render () {
        return (
            <div className='col-md-7 col-md-offset-0'>
                <div className='row add-album-div'>
                    <button type='button' className='btn btn-default btn-sm center-block'  data-toggle='modal' data-target='#add-post-modal'>Post an Album or Video</button>
                </div>

                {this.props.posts.map((post) => {
                    let postBody;
                    if (post.video) {
                        postBody =  <div className='row album-post pangolin-font' key={post._id+'dv1'}>
                                        <div className='col-md-9 video-div' key={post._id+'dv2'}>
                                            <video className='video videoPost' width='380' key={post._id+'vid'} controls poster={post.thumb}>
                                                <source src={post.video} type='video/mp4' />
                                            </video>                                            
                                        </div>
                                        <div className='col-md-3 info-div'>
                                            <button className='close' key={post._id} id={post._id} onClick={this.props.deletePost.bind(this, post._id)}>
                                                <span aria-hidden='true' key={post._id+'spn'}>&times;</span>
                                            </button>
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
                                            <button className='close' key={post._id} id={post._id} onClick={this.props.deletePost.bind(this, post._id)}>
                                                <span aria-hidden='true' key={post._id+'spn'}>&times;</span>
                                            </button>
                                            <button type='button' className='btn btn-default btn-xs' key={post._id+'btn'} data-toggle='modal' data-target='#album-carousel-modal' onClick={this.props.loadPhotos.bind(this, post._id)}>Open Album</button>
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
        );
    }
};

export default Posts;