import { Box } from "@mui/material";
import { Component } from "react";
import { getPreviewEducations, getPreviewExperiences } from "../Utils/getSections";
import GeneralInfoSection from "./GeneralInfoSection";
import PreviewSection from "./PreviewSection";
import SkillsSection from "./SkillsSection";

class MainContent extends Component {
    render() {
        const {
            generalInformation,
            education,
            experience,
            skills,
        } = this.props;

        const educationSections = getPreviewEducations(education);
        const experienceSections = getPreviewExperiences(experience);
        const name = `${generalInformation.firstName} ${generalInformation.lastName}`;

        return(
            <Box component="main" sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>
                <GeneralInfoSection 
                    cvImage={generalInformation.image}
                    description={generalInformation.description}
                    name={name}
                />
                {educationSections.length > 0 &&
                    <PreviewSection title="Education">
                        {educationSections}
                    </PreviewSection>
                }
                {experienceSections.length > 0 &&
                    <PreviewSection title="Experience">
                        {experienceSections}
                    </PreviewSection>
                }
                {skills.length > 0 &&
                    <PreviewSection title="Skills">
                        <SkillsSection skills={skills} />
                    </PreviewSection>
                }
            </Box>
        );
    }
}

export default MainContent;
