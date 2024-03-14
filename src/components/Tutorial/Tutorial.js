import React from 'react';

import './Tutorial.css'
import ReactPlayer from 'react-player/lazy'

const Tutorial = () => {
    return (
        <div className='tutorial-section'>
            <ReactPlayer
                className="tutorial-control"
                url="tutorial.mp4"
                controls={true}
            />
        </div>
    );
};

export default Tutorial;