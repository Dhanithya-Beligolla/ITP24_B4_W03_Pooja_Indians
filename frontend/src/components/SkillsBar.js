import React, { useEffect, useState } from "react";
import Axios from "axios";
import './style.css';

function SkillsBar() {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        getApplications();
    }, []);

    const getApplications = () => {
        Axios.get('http://localhost:3001/api/users') // Updated URL
            .then(response => {
                setApplications(response.data.response || []);
            })
            .catch(error => {
                console.error("Axios error:", error);
            });
    }

    return (
        <div className="container">
            <h1 className="title-text">Job Status Bar</h1>
            {applications.map(application => (
                <div className="application" key={application.id}>
                    <span className="name">{application.name}</span>
                    <span className="name">{application.job_title}</span>
                    <div className="status-bar">
                        <div className="status" style={{ width: `${application.percentage}%` }}></div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SkillsBar;
