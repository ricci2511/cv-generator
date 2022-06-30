import { Box } from '@mui/system';
import CVSection from './CVSection';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { getFormEducations } from '../Utils/getSections';
import React from 'react';

const Education = ({
    education,
    addEducation,
    deleteEducation,
    changeEducation,
    changeDate,
}) => {
    const educationSections = getFormEducations(
        education,
        deleteEducation,
        changeEducation,
        changeDate
    );

    return (
        <CVSection title="Education">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}
            >
                {educationSections}
                <Button
                    variant="contained"
                    fullWidth
                    startIcon={<AddIcon />}
                    onClick={addEducation}
                >
                    Add
                </Button>
            </Box>
        </CVSection>
    );
};

export default Education;
