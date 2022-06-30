import { Box, Typography } from '@mui/material';
import formatDate from '../Utils/formatDate';
import React from 'react';

const ExperienceSection = ({ experience }) => {
    const { company, position, activities, fromDate, toDate, isCurrent } =
        experience;

    return (
        <Box
            sx={{
                display: 'grid',
                gap: 6,
                pt: 2,
                gridTemplateColumns: '1fr 2fr',
            }}
        >
            <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: '800' }}>
                    {formatDate(fromDate)} -{' '}
                    {isCurrent ? 'Current' : formatDate(toDate)}
                </Typography>
            </Box>
            <Box>
                <Typography variant="h6" sx={{ fontWeight: '800' }}>
                    {position}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ fontWeight: 'bold', fontStyle: 'italic' }}
                >
                    {company}
                </Typography>
                <Typography variant="body2">{activities}</Typography>
            </Box>
        </Box>
    );
};

export default ExperienceSection;
