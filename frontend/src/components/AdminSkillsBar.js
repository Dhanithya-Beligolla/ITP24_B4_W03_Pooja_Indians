import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './style.css';

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
        const updatedApps = [...updatedApplications];
        updatedApps[index].percentage = value;
        setUpdatedApplications(updatedApps);
    };

    const handleSubmit = () => {
        Axios.post('http://localhost:3001/api/updateuser', updatedApplications) // Updated URL
            .then(() => {
                // Success message or other action
            })
            .catch(error => {
                console.error("Axios error:", error);
            });
    };

    return (
        <div className="container">
            <h1 className="title-text">Admin Skills Bar Management</h1>
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
                                    value={updatedApplications[index]?.percentage || ''}
                                    onChange={e => handlePercentageChange(index, e.target.value)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default AdminSkillsBar;
