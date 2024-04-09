import { useNavigate } from 'react-router-dom';
import { Box, Button, Grid } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import Axios from "axios";
import { useEffect, useState } from 'react';

const Users = () => {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        Axios.get('http://localhost:3001/api/users')
            .then(response => {
                setUsers(response.data?.response || []);
            })
            .catch(error => {
                console.error("Axios error :", error);
            });
    }

    return(
        <Grid>
            <Grid>
            <Box
                sx={{
                    width: 'calc(100% - 100px)',
                    margin: 'auto',
                    marginTop: '100px',
                }}
        >
                    <UserForm />
                    <UsersTable rows={users} />
            </Box>

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
                    onClick={() => navigate('/SkillsBar')}
                >
                    States Bar
                </Button>
            </Grid>
        </Grid>
        
    );
}

export default Users;