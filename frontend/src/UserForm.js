import React, { useEffect, useState } from 'react';
import { Grid, Input, Typography, Button } from "@mui/material";

const UserForm = ({ addUser, updateUser, submitted, data, isEdit }) => {

    const [id, setID] = useState(0);
    const [name, setNAME] = useState('');
    const [job_title, setJOB_TITLE] = useState('');
    const [email, setEMAIL] = useState('');
    const [contact_number, setCONTACT_NUMBER] = useState('');
    const [age, setAGE] = useState('');
    const [education_qualification, setEDUCATION_QUALIFICATION] = useState('');
    const [work_experience, setWORK_EXPERIENCE] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if(!submitted){
            resetForm();
        }
    }, [submitted]);

    useEffect(() => {
        if(data?.id && data.id !== 0){
            setID(data.id);
            setNAME(data.name);
            setJOB_TITLE(data.job_title);
            setEMAIL(data.email);
            setCONTACT_NUMBER(data.contact_number);
            setAGE(data.age);
            setEDUCATION_QUALIFICATION(data.education_qualification);
            setWORK_EXPERIENCE(data.work_experience);
        }
    }, [data])

    const resetForm = () => {
        setID(0);
        setNAME('');
        setJOB_TITLE('');
        setEMAIL('');
        setCONTACT_NUMBER('');
        setAGE('');
        setEDUCATION_QUALIFICATION('');
        setWORK_EXPERIENCE('');
        setErrors({});
    }

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!name) {
            errors.name = 'Name is required';
            isValid = false;
        }

        if (!job_title) {
            errors.job_title = 'Job title is required';
            isValid = false;
        }

        if (!email) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!email.endsWith('@gmail.com')) {
            errors.email = 'Invalide email address';
            isValid = false;
        }        

        if (!contact_number) {
            errors.contact_number = 'Contact number is required';
            isValid = false;
        }

        if (!age) {
            errors.age = 'Age is required';
            isValid = false;
        }

        if (!education_qualification) {
            errors.education_qualification = 'Education qualification is required';
            isValid = false;
        }

        if (!work_experience) {
            errors.work_experience = 'Work experience is required';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            if (isEdit) {
                updateUser({ id, name, job_title, email, contact_number, age, education_qualification, work_experience });
            } else {
                addUser({ id, name, job_title, email, contact_number, age, education_qualification, work_experience });
            }
            resetForm();
        }
    };

    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: '#f0f0f0',
                marginBottom: '20px',
                display: 'block',
            }}
        >
            <Grid item xs={12}>
                <Typography component={'h1'} sx={{ color: '#000000' }} >Vacancy Application Form</Typography>
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
                    value={id}
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
                    value={name}
                    onChange={e => setNAME(e.target.value)}
                />
                {errors.name && <Typography sx={{ color: 'red' }}>{errors.name}</Typography>}
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography 
                    component={'label'} 
                    htmlFor="job_title" 
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
                    id='job_title'
                    name="job_title"
                    sx={{ widows: '400px' }}
                    value={job_title}
                    onChange={e => setJOB_TITLE(e.target.value)}
                />
                {errors.job_title && <Typography sx={{ color: 'red' }}>{errors.job_title}</Typography>}
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
                    type="email"
                    id='email'
                    name="email"
                    sx={{ widows: '400px' }}
                    value={email}
                    onChange={e => setEMAIL(e.target.value)}
                />
                {errors.email && <Typography sx={{ color: 'red' }}>{errors.email}</Typography>}
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography 
                    component={'label'} 
                    htmlFor="contact_number" 
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
                    type="text"
                    id='contact_number'
                    name="contact_number"
                    sx={{ widows: '400px' }}
                    value={contact_number}
                    onChange={e => setCONTACT_NUMBER(e.target.value)}
                />
                {errors.contact_number && <Typography sx={{ color: 'red' }}>{errors.contact_number}</Typography>}
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
                    value={age}
                    onChange={e => setAGE(e.target.value)}
                />
                {errors.age && <Typography sx={{ color: 'red' }}>{errors.age}</Typography>}
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography 
                    component={'label'} 
                    htmlFor="education_qualification" 
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
                    id='education_qualification'
                    name="education_qualification"
                    sx={{ widows: '400px' }}
                    value={education_qualification}
                    onChange={e => setEDUCATION_QUALIFICATION(e.target.value)}
                />
                {errors.education_qualification && <Typography sx={{ color: 'red' }}>{errors.education_qualification}</Typography>}
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography 
                    component={'label'} 
                    htmlFor="work_experience" 
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
                    id='work_experience'
                    name="work_experience"
                    sx={{ widows: '400px' }}
                    value={work_experience}
                    onChange={e => setWORK_EXPERIENCE(e.target.value)}
                />
                {errors.work_experience && <Typography sx={{ color: 'red' }}>{errors.work_experience}</Typography>}
            </Grid>

            <Grid item xs={12}>
                <Button
                    sx={{
                        margin: 'auto',
                        marginBottom: '20px',
                        backgroundColor: '#3a7e5c',
                        color: '#ffffff',
                        marginLeft: '15px',
                        marginTop: '20px',
                        '&:hover': {
                            opacity: '0.7',
                            backgroundColor: '#34654d',
                        }
                    }}
                    onClick={handleSubmit}
                >
                    {isEdit ? 'UPDATE' : 'ADD'}
                </Button>
            </Grid>

        </Grid>
    );
}

export default UserForm;