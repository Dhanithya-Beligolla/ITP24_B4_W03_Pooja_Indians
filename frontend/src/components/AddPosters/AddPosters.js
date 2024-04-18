import { Grid, Typography } from '@mui/material'
import React from 'react'
import { TextField, Button, Container } from '@mui/material';

const AddPosters = () => {
  return (
    <Grid
    sx={{
      display: 'flex', // flex
      alignItems: 'center', // items-center
      justifyContent: 'center', // justify-center
      height: '100vh', // h-screen
    }}
    >
      <Grid>
        <form>
            <Container sx={{
                      border: '1px solid #CBD5E0', // border border-gray-400
                      width: '30rem', // w-[30rem]
                      padding: '1.25rem', // p-5
                      display: 'flex', // flex
                      flexDirection: 'column', // flex-col
                      gap: '1.25rem', // gap-5
                      borderRadius: '0.375rem', // rounded-md
                      boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)', // shadow-md shadow-gray-400
                      margin: '1.25rem', // m-5
                      '@media (min-width: 1024px)': {
                        margin: '0', // lg:m-0
                      },
                  }}>
                      <Typography variant="h1" sx={{
                        textAlign: 'center', // text-center
                        fontSize: '1.25rem', // text-xl
                        fontWeight: '500', // font-medium
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