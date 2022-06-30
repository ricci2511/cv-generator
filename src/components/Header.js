import { AppBar, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
    return (
        <AppBar position="static" sx={{ p: 1, mb: 4 }}>
            <Typography
                variant="h2"
                component="h1"
                align="center"
                style={{ fontWeight: 600 }}
            >
                CV Generator
            </Typography>
        </AppBar>
    );
};

export default Header;
