import React from 'react';

class Visitor extends React.Component {
    constructor (props) {
        super(props);

    }

    componentWillMount () {
        setTimeout(function() {
            document.querySelector('video').setAttribute('controlsList', 'nodownload nofullscreen');
        },1);        
    }

    render () {          
        return (
            <div>
                <video className='video' controls controlsList="nodownload nofullscreen noremoteplayback" poster='http://www.piz18.com/wp-content/uploads/2015/05/So-beautiful-melancholic-cat-550x371.jpg'>
                    <source src={this.props.video} type="video/mp4" />
                </video>
            </div>
        );
    }
};

export default Visitor;