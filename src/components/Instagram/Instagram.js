import {  Box, Container, Typography } from '@mui/material';
import React from 'react';
import './Instagram.css'


const Instagram = () => {

    return (


        <Box sx={{ bgcolor: '#000', color: '#fff', px: '30', pt:'5rem', mb: 2, textAlign: "center" }}>
            <Container maxWidth="xl">
                <Typography sx={{ mt: 2, fontWeight: 500, fontSize: '1.125rem' }}
                    variant='h6'
                > Successful Instagram accounts for examples:
                </Typography>
                <div className="instagram-users">
                    <Typography sx={{ mt: '1.5rem', fontWeight: 400 }}
                        variant='subtitle'
                    > 
                        <a href="#" className='user-item'>baileyreal</a>
                        <a href="#" className='user-item'>natalia.jimenez.fit</a>
                        <a href="#" className='user-item'>valenvenusok</a>
                        <a href="#" className='user-item'>coelhoaria</a>
                    </Typography>
                    <Typography sx={{ mt: '1.5rem', fontWeight: 400 }}
                        variant='subtitle'
                    > 
                        <a href="#" className='user-item'>baileyreal</a>
                        <a href="#" className='user-item'>natalia.jimenez.fit</a>
                        <a href="#" className='user-item'>valenvenusok</a>
                        <a href="#" className='user-item'>coelhoaria</a>
                    </Typography>
                    <Typography sx={{ mt: '1.5rem', fontWeight: 400 }}
                        variant='subtitle'
                    > 
                        <a href="#" className='user-item'>baileyreal</a>
                        <a href="#" className='user-item'>natalia.jimenez.fit</a>
                        <a href="#" className='user-item'>valenvenusok</a>
                        <a href="#" className='user-item'>coelhoaria</a>
                    </Typography>
                    <Typography sx={{ mt: '1.5rem', fontWeight: 400 }}
                        variant='subtitle'
                    > 
                        <a href="#" className='user-item'>baileyreal</a>
                        <a href="#" className='user-item'>natalia.jimenez.fit</a>
                        <a href="#" className='user-item'>valenvenusok</a>
                        <a href="#" className='user-item'>coelhoaria</a>
                    </Typography>
                </div>

            </Container>
        </Box>


    );
};

export default Instagram;
