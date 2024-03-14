import { Box, Button, Container, LinearProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useData from '../../../Hooks/useData';
import './Intro.css'


const Intro = () => {
    const [ourServices, setOurServices] = useState([])
    const mainData = useData();
    let services = mainData[0];

    // handle undifined problem in mapping data
    useEffect(() => {
        if (services.length > 0) {
            const serv = services?.slice(0, 3);
            setOurServices(serv);
        }
        else {
            <LinearProgress color="secondary" />
        }
    }, [services]);

    return (


        <Box sx={{ bgcolor: '#000', color: '#fff', pt:'5rem', mb: 2, textAlign: "center" }}>
            <Container maxWidth="xl">
                <Typography sx={{ mt: 2, fontWeight: 700, fontSize: '3.75rem' }}
                    variant='h4'
                >Create Content with FaceSwap AI
                </Typography>

                <Typography sx={{ mt: '1.5rem', fontWeight: 600, fontSize: '1.125rem' }}
                    variant='h6'
                >Generate millions of videos to your social accounts with faceswaps from your favorite social platforms
                </Typography>

                <Typography sx={{ mx: 2, p: 2, textAlign: "center" }} >
                    <Button sx={{ mt: 2 }} variant="contained" color="success">
                        Start Generate For Free
                    </Button>
                    <Button sx={{ mt: 2 }} variant="contained">
                        login <span aria-hidden="true">&nbsp; →</span>
                    </Button>
                </Typography>


            </Container>
        </Box>


    );
};

export default Intro;
