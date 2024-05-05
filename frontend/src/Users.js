import { useNavigate } from 'react-router-dom';
import { Box, Button, Grid, Tab, Tabs } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import Axios from "axios";
import { useEffect, useState } from 'react';

const Users = () => {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    useEffect(() => {
        getUsers();
    }, []);

    const handleChangeTab = (event, newValue) => {
        setActiveTab(newValue);
    };

    const getUsers = () => {
        Axios.get('http://localhost:3001/api/users')
            .then(response => {
                setUsers(response.data?.response || []);
            })
            .catch(error => {
                console.error("Axios error :", error);
            });
    }

    const addUser = (data) =>{
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name,
            job_title: data.job_title,
            email: data.email,
            contact_number: data.contact_number,
            age: data.age,
            education_qualification: data.education_qualification,
            work_experience: data.work_experience,
        }
        Axios.post('http://localhost:3001/api/createuser', payload)
            .then(() => {
                getUsers();
                setSubmitted(false);
                isEdit(false);
            })
            .catch(error => {
                console.error("Axios error :", error);
            });
    }

    const updateUser = (data) => {
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name,
            job_title: data.job_title,
            email: data.email,
            contact_number: data.contact_number,
            age: data.age,
            education_qualification: data.education_qualification,
            work_experience: data.work_experience,
        }
        Axios.post('http://localhost:3001/api/updateuser', payload)
            .then(() => {
                getUsers();
                setSubmitted(false);
                setIsEdit(false); // This line sets isEdit to false after updating
            })
            .catch(error => {
                console.error("Axios error :", error);
            });
    }

    const deleteUser = (data) => {
        Axios.post('http://localhost:3001/api/deleteuser', data)
            .then(() => {
                getUsers();
            })
            .catch(error => {
                console.error("Axios error :", error);
            });
    }

    const handleUpdate = (data) => {
        setSelectedUser(data);
        setIsEdit(true);
        setActiveTab(0); // Navigate to the "Form" tab
    };

    return (
        <Grid
        sx={{
            //https://www.t-systems.com/resource/image/608558/ratio3x2/1440/960/d871eba91b7383568cee4c1ac72228cd/4630D1CE0AE81DC8FDA980245DA58EE5/im-application-management-services.jpg
            backgroundImage: 'url("https://www.jadeglobal.com/sites/default/files/2019-07/application-management-assessment_1.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
        }}
        >
            <Tabs value={activeTab} onChange={handleChangeTab}>
                <Tab label="Form"
                    sx={{ 
                        color: '#FFFFFF',
                        fontWeight: 'bold',
                        marginTop: '7px',
                        fontSize: '1.35rem',
                        fontFamily: 'Arial',
                    }}
                />
                <Tab label="Application Table"
                    sx={{ 
                        color: '#FFFFFF', 
                        fontWeight: 'bold',
                        marginTop: '7px',
                        fontSize: '1.35rem',
                        fontFamily: 'Arial',
                    }}
                />
            </Tabs>
            <Box
                sx={{
                    width: 'calc(100% - 100px)',
                    margin: 'auto',
                    marginTop: '0px',
                }}
            >
                {activeTab === 0 && (
                    <UserForm
                        addUser={addUser}
                        updateUser={updateUser}
                        submitted={submitted}
                        data={selectedUser}
                        isEdit={isEdit}
                    />
                )}
                {activeTab === 1 && (
                    <>
                        <UsersTable
                            rows={users}
                            selectedUser={handleUpdate} // Pass the function handleUpdate as props
                            deleteUser={deleteUser}
                        />
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
                                onClick={() => navigate('/SkillsBar')}
                            >
                                States Bar
                            </Button>
                        </Grid>
                    </>
                )}
            </Box>
        </Grid>
    );
}

export default Users;