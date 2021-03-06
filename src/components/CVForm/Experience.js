import { Box, Button } from '@mui/material';
import CVSection from './CVSection';
import AddIcon from '@mui/icons-material/Add';
import { getFormExperiences } from '../Utils/getSections';

const Experience = ({
    experience,
    addExperience,
    deleteExperience,
    changeExperience,
    changeDate,
}) => {
    const experienceSections = getFormExperiences(
        experience,
        deleteExperience,
        changeExperience,
        changeDate
    );

    return (
        <CVSection title="Experience">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}
            >
                {experienceSections}
                <Button
                    variant="contained"
                    fullWidth
                    startIcon={<AddIcon />}
                    onClick={addExperience}
                >
                    Add
                </Button>
            </Box>
        </CVSection>
    );
};

export default Experience;
