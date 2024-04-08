import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UsersTable = ({ rows }) => {
    return(
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
                                <TableRow key={row.ID} sx={{ '&:last-child td, &:last-child th' : { border: 0} }}>
                                    <TableCell component='th' scope="row">{row.ID}</TableCell>
                                    <TableCell component='th' scope="row">{row.NAME}</TableCell>
                                    <TableCell component='th' scope="row">{row.JOB_TITLE}</TableCell>
                                    <TableCell component='th' scope="row">{row.EMAIL}</TableCell>
                                    <TableCell component='th' scope="row">{row.CONTACT_NUMBER}</TableCell>
                                    <TableCell component='th' scope="row">{row.AGE}</TableCell>
                                    <TableCell component='th' scope="row">{row.EDUCATION_QUALIFICATION}</TableCell>
                                    <TableCell component='th' scope="row">{row.WORK_EXPERIENCE}</TableCell>
                                    <TableCell >
                                        <Button
                                            sx={{ margin: '0px 10px'}}
                                            onClick={() => {}}
                                        >
                                            UPDATE
                                        </Button>

                                        <Button
                                            sx={{ margin: '0px 10px'}}
                                            onClick={() => {}}
                                        >
                                            DELETE
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )) : (
                                <TableRow sx={{ '&:last-child td, &:last-child th' : { border: 0} }}>
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