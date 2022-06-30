import { Box } from '@mui/material';
import Education from './Education';
import Experience from './Experience';
import GeneralInformation from './GeneralInformation';
import Skills from './Skills';

import React from 'react';

const CVForm = ({
    generalInformation,
    changeGeneralInformation,
    education,
    addEducation,
    deleteEducation,
    changeEducation,
    experience,
    addExperience,
    deleteExperience,
    changeExperience,
    changeDate,
    skills,
    addSkill,
    deleteSkill,
}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
            }}
        >
            <GeneralInformation
                generalInformation={generalInformation}
                changeGeneralInformation={changeGeneralInformation}
            />
            <Education
                education={education}
                addEducation={addEducation}
                deleteEducation={deleteEducation}
                changeEducation={changeEducation}
                changeDate={changeDate}
            />
            <Experience
                experience={experience}
                addExperience={addExperience}
                deleteExperience={deleteExperience}
                changeExperience={changeExperience}
                changeDate={changeDate}
            />
            <Skills
                skills={skills}
                addSkill={addSkill}
                deleteSkill={deleteSkill}
            />
        </Box>
    );
};

export default CVForm;
