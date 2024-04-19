import { Button, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useRef } from "react";
import {useReactToPrint} from 'react-to-print';

const UsersTable = ({ rows, selectedUser, deleteUser }) => {

    const ComponentsRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => ComponentsRef.current,
        DocumentTitele:"User Application Report",
        onafterprint:()=>alert("User Application Report Download Successfully!"),
    })

    return (
        <TableContainer 
            component={Paper} 
            sx={{
                display: 'flex',
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '100vh',
                }}>
                    
            <Table>
                <Grid ref={ComponentsRef}>
                    <Container
                        sx={{
                            border: '1px solid #CBD5E0',
                            backgroundColor: '#f0f0f0',
                            width: 'auto',
                            padding: '1.25rem',
                            display: 'flex',
                            flexDirection: 'column', 
                            gap: '1.25rem',
                            borderRadius: '0.375rem',
                            boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)',
                            '@media (min-width: 1024px)': {
                              margin: 'auto', 
                            },
                        }}
                    >
                        <Grid item xs={12}>
                            <Typography 
                                variant="h1" sx={{
                                textAlign: 'center', 
                                fontSize: '1.25rem', 
                                fontWeight: '500', 
                            }} 
                            >Application Table
                </Typography>
            </Grid>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>NAME</TableCell>
                        <TableCell>JOB TITLE</TableCell>
                        <TableCell>EMAIL</TableCell>
                        <TableCell>CONTACT NUMBER</TableCell>
                        <TableCell>AGE</TableCell>
                        <TableCell>EDUCATION QUALIFICATION</TableCell>
                        <TableCell>WORK EXPERIENCE</TableCell>
                        <TableCell>ACTIONS</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.length > 0 ? rows.map(row => (
                            <TableRow key={row.ID} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component='th' scope="row">{row.id}</TableCell>
                                <TableCell component='th' scope="row">{row.name}</TableCell>
                                <TableCell component='th' scope="row">{row.job_title}</TableCell>
                                <TableCell component='th' scope="row">{row.email}</TableCell>
                                <TableCell component='th' scope="row">{row.contact_number}</TableCell>
                                <TableCell component='th' scope="row">{row.age}</TableCell>
                                <TableCell component='th' scope="row">{row.education_qualification}</TableCell>
                                <TableCell component='th' scope="row">{row.work_experience}</TableCell>
                                <TableCell>
                                    <Button
                                        sx={{ margin: '0px 10px' }}
                                        onClick={() => selectedUser({ id: row.id, name: row.name, job_title: row.job_title, email: row.email, contact_number: row.contact_number, age: row.age, education_qualification: row.education_qualification, work_experience: row.work_experience })}
                                    >
                                        UPDATE
                                    </Button>

                                    <Button
                                        sx={{ margin: '0px 10px' }}
                                        onClick={() => deleteUser({ id: row.id})}
                                    >
                                        DELETE
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )) : (
                            <TableRow sx={{ 
                                '&:last-child td, &:last-child th': { border: 0 } 
                                }}>
                                <TableCell component='th' scope="row">NO DATA</TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
                </Container>
                </Grid>
                <Grid>
                    <Button
                        onClick={handlePrint}
                    >
                        Download Report
                    </Button>
                </Grid>
            </Table>
        </TableContainer>
    );
}

export default UsersTable;
