import { Button, Grid } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Poster = ({ poster }) => {
    const { title, description, image } = poster;

    const navigate = useNavigate();

    return (
        <Grid
            sx={{
                width: '17rem',
                boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                borderRadius: '0.5rem',
            }}
        >
            <img
                src={image} alt="posterImg"
                style={{
                    width: '100%', 
                    height: '12rem', 
                    objectFit: 'cover',
                }}
            />

            
            <Grid
                sx={{
                    padding: '0.75rem',
                    fontSize: '0.875rem', 
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem',
                  }}
            >
                <p>Job Title: { title }</p>
                <p>Description: { description }</p>
            </Grid>
            <Grid
                sx={{
                    padding: '0.75rem', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end', 
                    gap: '0.5rem', 
                  }}
            >
                <Button
                    variant="contained"
                    sx={{
                        borderRadius: '5px',
                        backgroundColor: '#317864',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#75A99B',
                        },
                        height: '25px',
                        minWidth: '40px',
                        fontSize: '0.75rem',
                    }}
                    onClick={() => navigate('/users')}
                >Apply</Button>
            </Grid>
        </Grid>
    );
};

export default Poster;