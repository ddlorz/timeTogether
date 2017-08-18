import React from 'react';

class Visitor extends React.Component {
    constructor () {
        super();

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
                    <source src="http://d281fcpe4558jz.cloudfront.net/test.mp4" type="video/mp4" />
                </video>
            </div>
        );
    }
};

export default Visitor;