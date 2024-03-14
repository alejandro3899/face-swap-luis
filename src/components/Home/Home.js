import React from 'react';

import './Home.css'
import Intro from './Intro/Intro';
import Tutorial from '../Tutorial/Tutorial';
import Instagram from '../Instagram/Instagram';

const Home = () => {
    return (
        <div id='home'>
            <Intro />
            <Tutorial />
            <Instagram />
        </div>
    );
};

export default Home;