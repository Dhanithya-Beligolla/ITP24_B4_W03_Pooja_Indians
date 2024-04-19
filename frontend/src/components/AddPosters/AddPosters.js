import { Grid, Typography } from '@mui/material'
import React from 'react'
import { TextField, Button, Container } from '@mui/material';

const AddPosters = () => {
  return (
    <Grid
    sx={{
      display: 'flex',
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
    }}
    >
      <Grid>
        <form>
            <Container sx={{
                      border: '1px solid #CBD5E0',
                      width: '30rem',
                      padding: '1.25rem',
                      display: 'flex',
                      flexDirection: 'column', 
                      gap: '1.25rem',
                      borderRadius: '0.375rem',
                      boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)',
                      margin: '1.25rem', 
                      '@media (min-width: 1024px)': {
                        margin: '0', 
                      },
                  }}>
                      <Typography variant="h1" sx={{
                        textAlign: 'center', 
                        fontSize: '1.25rem', 
                        fontWeight: '500', 
                      }}>
                          Post Vacancies
                      </Typography>
                      <TextField label="Job Title" variant="outlined" />
                      <TextField label="Description" variant="outlined" />
                      <input type="file" />
                      <Button variant="contained">Submit Poster</Button>
          </Container>
        </form>
      </Grid>
    </Grid>
  )
}

export default AddPosters