import React from 'react';

class CarouselModal extends React.Component {
    render () {
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
                                    {this.props.post.map((photo, index) => {
                                        let active = '';
                                        if (index === 0) active = 'active';
                                        return ( 
                                            <li data-target='#album-carousel' data-slide-to={index} className={active} key={index+'li'}></li>                                                                                           
                                        );
                                    })}     
                                </ol>

                                <div className="carousel-inner" role="listbox">
                                    {this.props.photos.map((photo, index) => {
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