import { Box, Typography } from "@mui/material";
import { Component } from "react";
import formatDate from "../Utils/formatDate";

class EducationSection extends Component {
    render() {
        const {
            qualification,
            organization,
            fromDate,
            toDate,
            isCurrent,
        } = this.props.education;

        return(
            <Box
                sx={{ display: 'flex', gap: 10, pt: 2 }}
            >
                <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: '800' }}>
                         {formatDate(fromDate)} - {isCurrent ? 'Current' : formatDate(toDate)}
                    </Typography>
                </Box>
                <Box sx={{ minWidth: 0, flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: '800' }} style={{ wordWrap: 'break-word' }}>
                        {qualification}
                    </Typography>
                    <Typography variant="body1" sx={{ fontStyle: 'italic' }}  style={{ wordWrap: 'break-word' }}>
                        {organization}
                    </Typography>
                </Box>
            </Box>
        );
    }
}

export default EducationSection;
