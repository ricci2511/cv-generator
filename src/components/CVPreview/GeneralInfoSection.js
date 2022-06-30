import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const GeneralInfoSection = ({ cvImage, description, name }) => {
    return (
        <Box component="section" sx={{ display: 'flex', gap: 2 }}>
            {cvImage !== '' && (
                <Avatar
                    alt={name}
                    src={cvImage}
                    variant="square"
                    sx={{ width: 150, height: 150 }}
                />
            )}
            <Typography variant="body1" component="p">
                {description}
            </Typography>
        </Box>
    );
};

export default GeneralInfoSection;
