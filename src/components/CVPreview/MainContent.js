import { Box } from '@mui/material';
import {
    getPreviewEducations,
    getPreviewExperiences,
} from '../Utils/getSections';
import GeneralInfoSection from './GeneralInfoSection';
import PreviewSection from './PreviewSection';
import SkillsSection from './SkillsSection';
import React from 'react';

const MainContent = ({ generalInformation, education, experience, skills }) => {
    const educationSections = getPreviewEducations(education);
    const experienceSections = getPreviewExperiences(experience);
    const name = `${generalInformation.firstName} ${generalInformation.lastName}`;

    return (
        <Box
            component="main"
            sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 3 }}
        >
            <GeneralInfoSection
                cvImage={generalInformation.image}
                description={generalInformation.description}
                name={name}
            />
            {educationSections.length > 0 && (
                <PreviewSection title="Education">
                    {educationSections}
                </PreviewSection>
            )}
            {experienceSections.length > 0 && (
                <PreviewSection title="Experience">
                    {experienceSections}
                </PreviewSection>
            )}
            {skills.length > 0 && (
                <PreviewSection title="Skills">
                    <SkillsSection skills={skills} />
                </PreviewSection>
            )}
        </Box>
    );
};

export default MainContent;
