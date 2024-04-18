import { Grid } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Poster = ({ poster }) => {
    const { title, description, image } = poster;

    const navigate = useNavigate();

    return (
        <Grid
            sx={{
                width: '17rem', // w-[17rem]
                boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)', // shadow-md shadow-gray-400
                overflow: 'hidden', // overflow-hidden
                borderRadius: '0.5rem', // rounded-lg
            }}
        >
            <img
                src={image} alt="posterImg"
                style={{
                    width: '100%', // w-full
                    height: '12rem', // h-[12rem]
                    objectFit: 'cover', // object-cover
                }}
            />

            
            <Grid
                sx={{
                    padding: '0.75rem', // p-3
                    fontSize: '0.875rem', // text-sm
                    display: 'flex', // flex
                    flexDirection: 'column', // flex-col
                    gap: '0.25rem', // gap-1
                  }}
            >
                <p>Job Title: { title }</p>
                <p>Description: { description }</p>
            </Grid>
            <Grid
                sx={{
                    padding: '0.75rem', // p-3
                    display: 'flex', // flex
                    alignItems: 'center', // items-center
                    justifyContent: 'flex-end', // justify-end
                    gap: '0.5rem', // gap-2
                  }}
            >
                <button
                    onClick={() => navigate('/users')}
                >Apply</button>
            </Grid>
        </Grid>
    );
};

export default Poster;