import React, { useState } from 'react';
import { Grid, InputBase, Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchValue);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <Grid container justifyContent="flex-end" alignItems="center" spacing={1}>
            <Grid item>
                <Paper variant="outlined" sx={{ display: 'flex', alignItems: 'center' }}>
                    <InputBase
                        placeholder="Search by job title"
                        value={searchValue}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                    />
                    <IconButton onClick={handleSearch}>
                        <Search />
                    </IconButton>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default SearchBar;
