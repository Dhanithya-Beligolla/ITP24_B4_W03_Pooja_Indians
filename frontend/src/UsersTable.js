import React, { useRef, useState } from 'react';
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import SearchBar from './components/searchbar/SearchBar';
import { useReactToPrint } from 'react-to-print';

const UsersTable = ({ rows, selectedUser, deleteUser }) => {
    const [filteredRows, setFilteredRows] = useState(rows);

    const handleSearch = (searchValue) => {
        const filtered = rows.filter(row => row.job_title.toLowerCase().includes(searchValue.toLowerCase()));
        setFilteredRows(filtered);
    };

    const handleDelete = (row) => {
        deleteUser(row);
        setFilteredRows(prevRows => prevRows.filter(filteredRow => filteredRow.id !== row.id));
    };

    const componentsRef = useRef();
    const handlePrint = useReactToPrint({
        content : () => componentsRef.current,
        DocumentTitle: "Users Report",
        onafterPrint: ()=>alert("Users Report Download Successfully!"),
    })

    return (
        <TableContainer component={Paper}>
            <Grid ref={componentsRef}>
            <Grid container justifyContent="center">
                <Typography variant="h1" sx={{ textAlign: 'center', fontSize: '1.25rem', fontWeight: '500' }}>
                    Application Table
                </Typography>
            </Grid>
            <SearchBar onSearch={handleSearch} />
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
                        filteredRows.length > 0 ? filteredRows.map(row => (
                            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component='th' scope="row">{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.job_title}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.contact_number}</TableCell>
                                <TableCell>{row.age}</TableCell>
                                <TableCell>{row.education_qualification}</TableCell>
                                <TableCell>{row.work_experience}</TableCell>
                                <TableCell>
                                    <Button sx={{ margin: '0px 10px' }} onClick={() => selectedUser(row)}>
                                        UPDATE
                                    </Button>
                                    <Button sx={{ margin: '0px 10px' }} onClick={() => handleDelete(row)}>
                                        DELETE
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )) : (
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell colSpan={9} align="center">No data found</TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
                <Button
                    onClick={handlePrint}
                >
                    Download Report
                </Button>
            </Table>
            </Grid>
        </TableContainer>
    );
}

export default UsersTable;
