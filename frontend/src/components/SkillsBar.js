import React, { useEffect, useState } from "react";
import Axios from "axios";
import './style.css';

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
        <div className="container">
            <h1 className="title-text">Job Status Bar</h1>
            {applications.map(application => (
                <div className="application" key={application.id}>
                    <span className="name">{application.name}</span>
                    <span className="name">{application.job_title}</span>
                    <div className="status-bar">
                        <div className="status" style={{ width: `${application.percentage}%` }}>
                            {application.percentage}% {/* Display the percentage */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SkillsBar;
