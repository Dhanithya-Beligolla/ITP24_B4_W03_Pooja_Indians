import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './style.css';
import { Button, Grid } from '@mui/material';

function AdminSkillsBar() {
    const [applications, setApplications] = useState([]);
    const [updatedApplications, setUpdatedApplications] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/users') // Updated URL
            .then(response => {
                setApplications(response.data?.response || []);
                // Initialize updatedApplications with default percentage values
                setUpdatedApplications(response.data?.response.map(app => ({ ...app, percentage: 0 })) || []);
            })
            .catch(error => {
                console.error("Axios error:", error);
            });
    }, []);

    const handlePercentageChange = (index, value) => {
        value = parseInt(value);
        const updatedApps = [...updatedApplications];
        updatedApps[index].percentage = value;
        setUpdatedApplications(updatedApps);
    };

    const handleSubmit = () => {

        console.log(updatedApplications);
        Axios.post('http://localhost:3001/api/percentageUpdate', updatedApplications) // Updated URL
            .then(() => {
                
                alert('Updated successfully');
            })
            .catch(error => {
                console.error("Axios error:", error);
            });
    };

    return (
        <Grid
            sx={{
                backgroundImage: 'url("https://i.pinimg.com/564x/d6/00/1c/d6001c15cc152e88abcc61d05f2f2d4a.jpg")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
            }}
        >
        <div className="container">
            <Grid
                sx={{
                    padding: '10px',
                    textAlign: 'center',
                    fontFamily: 'Arial',
                    fontSize: '1.50rem',
                    fontWeight: 'bold',
                }}
            >
            <h1 className="title-text">Admin Progress Bar Management</h1>
            </Grid>
            <Grid
                sx={{
                    color: '#000000',
                    marginTop: '0px',
                    marginLeft: 'center',
                }}
            >
            <Grid
                sx={{
                    padding: '10px',
                    textAlign: 'center',
                    fontFamily: 'Arial',
                    fontSize: '1.50rem',
                    fontWeight: '1.25rem',
                }}
            >
                <table>
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Job Title</th>
                            <th>Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((application, index) => (
                            <tr key={index}>
                                <td>{application.name}</td>
                                <td>{application.job_title}</td>
                                <td>
                                    <input
                                        type="number"
                                        sx={{ width: '60px', textAlign: 'center' }} // Updated style
                                        value={updatedApplications[index]?.percentage || ''}
                                        onChange={e => handlePercentageChange(index, e.target.value)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Grid>
            </Grid>
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
             onClick={handleSubmit}>Submit</Button>
        </div>
        </Grid>
    );
}

export default AdminSkillsBar;
