import { Box } from "@mui/material";
import { Component } from "react";
import Header from "./Header";
import MainContent from "./MainContent";

class CVPreview extends Component {
    render() {
        const {
            generalInformation,
            education,
            experience,
            skills,
        } = this.props;

        return(
            <Box 
                component="article" 
                sx={{
                    position: 'sticky',
                    top: 10,
                    mb: 2,
                    backgroundColor: 'white',
                    minHeight: '297mm'
                }}
            >
                <Header 
                    generalInformation={generalInformation}
                />
                <MainContent 
                    generalInformation={generalInformation}
                    education={education}
                    experience={experience}
                    skills={skills}
                />
            </Box>
        );
    }
}

export default CVPreview;
