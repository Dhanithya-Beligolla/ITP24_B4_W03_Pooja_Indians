import React, { useEffect, useState } from 'react';
import { Grid, Input, Typography, Button, Container } from "@mui/material";

const UserForm = ({ addUser, updateUser, submitted, data, isEdit }) => {

    const [id, setID] = useState(0);
    const [name, setNAME] = useState('');
    const [idnumber, setIDNUMBER] = useState(''); // Add this line
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
            setIDNUMBER(data.idnumber); // Add this line
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
        setIDNUMBER(''); // Add this line
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

        const namePattern = /^[a-zA-Z\s]+$/;
        const numberPattern = /^[0-9]+$/;

        if (!name) {
            errors.name = 'Name is required';
            isValid = false;
        }
        else if (!namePattern.test(name)) {
            errors.name = 'Invalid name format';
            isValid = false;
        }

        if (!job_title) {
            errors.job_title = 'Job title is required';
            isValid = false;
        }
        else if (!namePattern.test(job_title)) {
            errors.job_title = 'invalid job title format';
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
        else if (!numberPattern.test(contact_number)) {
            errors.contact_number = 'Invalid contact number format';
            isValid = false;
        }

        if (!age) {
            errors.age = 'Age is required';
            isValid = false;
        }
        else if (!numberPattern.test(age)) {
            errors.age = 'Age should contain only numbers';
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

        if (!idnumber) {
            errors.idnumber = 'ID number is required';
            isValid = false;
        }
        else if (idnumber.length !== 5 || !numberPattern.test(idnumber)) {
            errors.idnumber = 'ID number should be exactly 5 digits';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            if (isEdit) {
                updateUser({ id, name, idnumber, job_title, email, contact_number, age, education_qualification, work_experience });
                alert('Application updated successfully');
            } else {
                addUser({ id, name, idnumber, job_title, email, contact_number, age, education_qualification, work_experience });
                alert('Application submitted successfully');
            }
            resetForm();
        }
    };    

    return (
        <Grid
        sx={{
            display: 'flex',
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100vh', 
          }}
        >
            <form>
                <Container
                    sx={{
                        border: '1px solid #CBD5E0',
                        backgroundColor: '#ADB3C4',
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
                    }}
                >
            <Grid item xs={12}>
                <Typography 
                        variant="h1" sx={{
                        textAlign: 'center', 
                        fontSize: '1.85rem', 
                        fontWeight: 'bold',
                        color: '#000000', 
                      }} 
                >
                <span style={{ fontFamily: 'Arial', fontStyle: 'Times New Roman' }}>
                    Vacancy Application Form
                </span>
                </Typography>
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
                    htmlFor="idnumber" 
                    sx={{
                        color: '#000000',
                        display: 'block',
                        marginRight: '20px',
                        fontSize: '16px',
                        widows: '100px',
                    }}
                >
                    IDnumber
                </Typography>
                <Input
                    type="number"
                    id='idnumber'
                    name="idnumber"
                    sx={{ widows: '400px' }}
                    value={idnumber}
                    onChange={e => setIDNUMBER(e.target.value)}
                />
                {errors.idnumber && <Typography sx={{ color: 'red' }}>{errors.idnumber}</Typography>}
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
            </Container>
            </form>
        </Grid>
    );
}

export default UserForm;