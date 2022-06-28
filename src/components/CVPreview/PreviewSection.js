import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Component } from "react";

class PreviewSection extends Component {
    render() {
        const { title, children } = this.props;

        return(
            <Box component="section">
                <Typography variant="h5" component="h4" sx={{ fontWeight: 'bold' }}>
                    {title}
                </Typography>
                <Divider />
                {children}
            </Box>
        );
    }
}

export default PreviewSection;
