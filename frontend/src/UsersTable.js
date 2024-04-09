import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UsersTable = ({ rows, selectedUser, deleteUser }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
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
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component='th' scope="row">NO DATA</TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UsersTable;
