import { Box, Typography } from '@mui/material';
import formatDate from '../Utils/formatDate';
import React from 'react';

const EducationSection = ({ education }) => {
    const { qualification, organization, fromDate, toDate, isCurrent } =
        education;

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
                <Typography
                    variant="h6"
                    sx={{ fontWeight: '800' }}
                    style={{ wordWrap: 'break-word' }}
                >
                    {qualification}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ fontStyle: 'italic' }}
                    style={{ wordWrap: 'break-word' }}
                >
                    {organization}
                </Typography>
            </Box>
        </Box>
    );
};

export default EducationSection;
