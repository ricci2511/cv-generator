import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const PreviewSection = ({ title, children }) => {
    return (
        <Box component="section">
            <Typography variant="h5" component="h4" sx={{ fontWeight: 'bold' }}>
                {title}
            </Typography>
            <Divider />
            {children}
        </Box>
    );
};

export default PreviewSection;
