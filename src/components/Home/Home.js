import React from 'react';

import './Home.css'
import Intro from './Intro/Intro';
import Tutorial from '../Tutorial/Tutorial';

const Home = () => {
    return (
        <div id='home'>
            <Intro />
            <Tutorial />
        </div>
    );
};

export default Home;