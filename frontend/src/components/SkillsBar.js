import React, { useEffect, useState } from "react";
import Axios from "axios";
import './style.css';
import { Grid } from "@mui/material";

function SkillsBar() {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        getApplications();
    }, []);

    useEffect(() => {
        // This useEffect will trigger whenever 'applications' state changes
        // You can add code here to handle any side effects of 'applications' state change
        // For now, let's just log the 'applications' whenever it changes
        console.log("Applications updated:", applications);
    }, [applications]); // Dependency array containing 'applications'

    const getApplications = () => {
        Axios.get('http://localhost:3001/api/users')
            .then(response => {
                setApplications(response.data.response || []);
            })
            .catch(error => {
                console.error("Axios error:", error);
            });
    }

    return (
        <Grid
            sx={{
                backgroundImage: 'url("https://www.jadeglobal.com/sites/default/files/2019-07/application-management-assessment_1.jpg")',
                //backgroundColor: '#5E9A9B',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
            }}
        >
        <div className="container">
            <Grid
                sx={{
                    color: '#ffffff',
                    marginTop: '0px',
                }}
            >
            <Grid
                sx={{
                    padding: '10px',
                    textAlign: 'center',
                    fontFamily: 'Arial',
                    fontSize: '1.85rem',
                    fontWeight: 'bold',
                }}
            >
                <h1 className="title-text">Job Status Bar</h1>
            </Grid>
            <Grid
                sx={{
                    color: '#ffffff', //name job color
                }}
            >
            {applications.map(application => (
                <div className="application" key={application.id}>
                    <span className="name">{application.name}</span>
                    <span className="name">{application.job_title}</span>
                    <div className="status-bar">
                        <div className="status" style={{ width: `${application.percentage}%`, backgroundColor: '#CFB821' }}>
                            {application.percentage}% {/* Display the percentage */}
                        </div>
                    </div>
                </div>
            ))}
            </Grid>
            </Grid>
        </div>
        </Grid>
    );
}

export default SkillsBar;
