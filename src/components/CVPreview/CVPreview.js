import { Box } from '@mui/material';
import Header from './Header';
import MainContent from './MainContent';
import React from 'react';

const CVPreview = ({ generalInformation, education, experience, skills }) => {
    return (
        <Box
            component="article"
            sx={{
                position: 'sticky',
                top: 10,
                mb: 2,
                backgroundColor: 'white',
                minHeight: '297mm',
            }}
        >
            <Header generalInformation={generalInformation} />
            <MainContent
                generalInformation={generalInformation}
                education={education}
                experience={experience}
                skills={skills}
            />
        </Box>
    );
};

export default CVPreview;
