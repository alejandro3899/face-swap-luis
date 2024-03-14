
import React from 'react';
import { Typography } from '@mui/material';

import './Guide.css'
import Tutorial from '../Tutorial/Tutorial';
import Instagram from '../Instagram/Instagram';
import WorkStep from './WorkStep';

const Guide = () => {
    return (
        <div id='guide'>
            <Typography sx={{ mt: 15, fontWeight: 400, fontSize: '3.75rem' }}
                    variant='h4'
                >Full Guide
            </Typography>

            <Typography sx={{ mt: '1.5rem', mb: '1.5rem', fontWeight: 600, fontSize: '1.125rem' }}
                variant='h6'
            >Use the videos on Instagram reels , they have the best affect now. You can see succecful accounts down the page. On tiktok they sometimes detect it
            </Typography>
            <Tutorial />
            <WorkStep />
            <Instagram />
        </div>
    );
};

export default Guide;