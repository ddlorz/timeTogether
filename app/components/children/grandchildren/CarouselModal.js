import React from 'react';

class CarouselModal extends React.Component {
    render () {
        let postMatch = [];
        postMatch = this.props.posts.filter((post) => {return post._id === this.props.photos})
        if (!postMatch[0]) postMatch[0] = {album: ['placeholder']};

        return (
            <div className='modal fade' tabIndex='-1' role='dialog' id='album-carousel-modal'>
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
        );
    }
};

export default CarouselModal;