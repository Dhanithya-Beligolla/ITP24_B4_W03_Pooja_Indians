import React, { useRef, useState } from 'react';
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import SearchBar from './components/searchbar/SearchBar';
import { useReactToPrint } from 'react-to-print';
import { LuDownload } from "react-icons/lu";

const UsersTable = ({ rows, selectedUser, deleteUser }) => {
    const [filteredRows, setFilteredRows] = useState(rows);

    const handleSearch = (searchValue) => {
        const filtered = rows.filter(row => row.job_title.toLowerCase().includes(searchValue.toLowerCase()));
        setFilteredRows(filtered);
    };

    const handleDelete = (row) => {
        const isConfirmed = window.confirm('Do you want to delete this application?');
        if (isConfirmed) {
            deleteUser(row);
            setFilteredRows(prevRows => prevRows.filter(filteredRow => filteredRow.id !== row.id));
        }
    };
    

    const componentsRef = useRef();
    const handlePrint = useReactToPrint({
        content : () => componentsRef.current,
        documentTitle: "Users Report",
        onAfterPrint: ()=>alert("Users Report Download Successfully!"),
    })

    return (
        <TableContainer component={Paper}>
            <Grid ref={componentsRef}
                sx={{
                    backgroundColor: '#ADB3C4',
                }}
            >
            <Grid container justifyContent="center">
            <Typography 
                        variant="h1" sx={{
                        textAlign: 'center', 
                        fontSize: '1.85rem', 
                        fontWeight: 'bold',
                        color: '#000000', 
                      }} 
                >
                <span style={{ fontFamily: 'Arial', fontStyle: 'Times New Roman' }}>
                    Application Table
                </span>
                </Typography>
            </Grid>
            <SearchBar onSearch={handleSearch} />
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>NAME</TableCell>
                        <TableCell>IDnumber</TableCell>
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
                                <TableCell>{row.idnumber}</TableCell>
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
                    <LuDownload />
                    Download Report
                </Button>
            </Table>
            </Grid>
        </TableContainer>
    );
}

export default UsersTable;
