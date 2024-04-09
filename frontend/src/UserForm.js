import React, { useState } from 'react';
import { Grid, Input, Typography, Button } from "@mui/material";

const UserForm = props => {

    const [ID, setID] = useState(0);
    const [NAME, setNAME] = useState('');
    const [JOB_TITLE, setJOB_TITLE] = useState('');
    const [EMAIL, setEMAIL] = useState('');
    const [CONTACT_NUMBER, setCONTACT_NUMBER] = useState(+11-1234567890);
    const [AGE, setAGE] = useState('');
    const [EDUCATION_QUALIFICATION, setEDUCATION_QUALIFICATION] = useState('');
    const [WORK_EXPERIENCE, setWORK_EXPERIENCE] = useState('');


    return(
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: '#ffffff',
                marginBottom: '20px',
                display: 'block',
            }}
        >
            <Grid item xs={12}>
                <Typography component={'h1'} sx= {{ color: '#000000'}} >Vacancy Application Form</Typography>
            </Grid>

            
            
            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography 
                    component={'label'} 
                    htmlFor="id" 
                    sx={{
                        color: '#000000',
                        display: 'block',
                        marginRight: '20px',
                        fontSize: '16px',
                        widows: '100px',
                    }}
                >
                    ID
                </Typography>
                <Input
                    type="number"
                    id='id'
                    name="id"
                    sx={{ widows: '400px' }}
                    value={ID}
                    onChange={e => setID(e.target.value)}
                />
            </Grid>




            
            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography 
                    component={'label'} 
                    htmlFor="name" 
                    sx={{
                        color: '#000000',
                        display: 'block',
                        marginRight: '20px',
                        fontSize: '16px',
                        widows: '100px',
                    }}
                >
                    NAME
                </Typography>
                <Input
                    type="text"
                    id='name'
                    name="name"
                    sx={{ widows: '400px' }}
                    value={NAME}
                    onChange={e => setNAME(e.target.value)}
                />
            </Grid>






            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography 
                    component={'label'} 
                    htmlFor="jobtitle" 
                    sx={{
                        color: '#000000',
                        display: 'block',
                        marginRight: '20px',
                        fontSize: '16px',
                        widows: '100px',
                    }}
                >
                    JOB TITLE
                </Typography>
                <Input
                    type="text"
                    id='jobtitle'
                    name="jobtitle"
                    sx={{ widows: '400px' }}
                    value={JOB_TITLE}
                    onChange={e => setJOB_TITLE(e.target.value)}
                />
            </Grid>





            
            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography 
                    component={'label'} 
                    htmlFor="email" 
                    sx={{
                        color: '#000000',
                        display: 'block',
                        marginRight: '20px',
                        fontSize: '16px',
                        widows: '100px',
                    }}
                >
                    EMAIL
                </Typography>
                <Input
                    type="text"
                    id='email'
                    name="email"
                    sx={{ widows: '400px' }}
                    value={EMAIL}
                    onChange={e => setEMAIL(e.target.value)}
                />
            </Grid>




            
            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography 
                    component={'label'} 
                    htmlFor="contacnumber" 
                    sx={{
                        color: '#000000',
                        display: 'block',
                        marginRight: '20px',
                        fontSize: '16px',
                        widows: '100px',
                    }}
                >
                    CONTACT NUMBER
                </Typography>
                <Input
                    type="number"
                    id='contacnumber'
                    name="contacnumber"
                    sx={{ widows: '400px' }}
                    value={CONTACT_NUMBER}
                    onChange={e => setCONTACT_NUMBER(e.target.value)}
                />
            </Grid>





            
            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography 
                    component={'label'} 
                    htmlFor="age" 
                    sx={{
                        color: '#000000',
                        display: 'block',
                        marginRight: '20px',
                        fontSize: '16px',
                        widows: '100px',
                    }}
                >
                    AGE
                </Typography>
                <Input
                    type="number"
                    id='age'
                    name="age"
                    sx={{ widows: '400px' }}
                    value={AGE}
                    onChange={e => setAGE(e.target.value)}
                />
            </Grid>





            
            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography 
                    component={'label'} 
                    htmlFor="eduqualification" 
                    sx={{
                        color: '#000000',
                        display: 'block',
                        marginRight: '20px',
                        fontSize: '16px',
                        widows: '100px',
                    }}
                >
                    EDUCATION QUALIFICATION
                </Typography>
                <Input
                    type="text"
                    id='eduqualification'
                    name="eduqualification"
                    sx={{ widows: '400px' }}
                    value={EDUCATION_QUALIFICATION}
                    onChange={e => setEDUCATION_QUALIFICATION(e.target.value)}
                />
            </Grid>




            
            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography 
                    component={'label'} 
                    htmlFor="experience" 
                    sx={{
                        color: '#000000',
                        display: 'block',
                        marginRight: '20px',
                        fontSize: '16px',
                        widows: '100px',
                    }}
                >
                    WORK EXPERIENCE
                </Typography>
                <Input
                    type="text"
                    id='experience'
                    name="experience"
                    sx={{ widows: '400px' }}
                    value={WORK_EXPERIENCE}
                    onChange={e => setWORK_EXPERIENCE(e.target.value)}
                />
            </Grid>

            <Grid item xs={12}>
                <Button
                    sx={{
                        margin: 'auto',
                        marginBottom: '20px',
                        backgroundColor: '#00c6e6',
                        color: '#ffffff',
                        marginLeft: '15px',
                        marginTop: '20px',
                        '&:hover': {
                            opacity: '0.7',
                            backgroundColor: '#00c6e6',
                        }
                    }}
                >
                    Submit
                </Button>
            </Grid>

        </Grid>
    );
}

export default UserForm;