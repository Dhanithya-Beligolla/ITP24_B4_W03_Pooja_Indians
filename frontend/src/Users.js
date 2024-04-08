import { useNavigate } from 'react-router-dom';
import { Box, Button, Grid } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";

const users = [
    {
        ID:1,
        NAME: 'John Doe',
        JOB_TITLE: 'Chef',
        EMAIL: 'johndoe@gmail.com',
        CONTACT_NUMBER: '1234567890',
        AGE: 25,
        EDUCATION_QUALIFICATION: 'B.Tech',
        WORK_EXPERIENCE: '2 years',
    },
    {
        ID:2,
        NAME: 'Marry Doe',
        JOB_TITLE: 'Delivery boy',
        EMAIL: 'marrydoe@gmail.com',
        CONTACT_NUMBER: '0987654321',
        AGE: 22,
        EDUCATION_QUALIFICATION: 'M.Tech',
        WORK_EXPERIENCE: '3 years',
    }
];

const Users = () => {
    const navigate = useNavigate();
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