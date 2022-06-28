import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Component } from "react";

class Footer extends Component {
    render() {
        return(
            <Box component="footer" sx={{ p: 2, mt: 3, backgroundColor: '#1976d2', color: 'white' }}>
                <Typography variant="h6" component="p" align="center">
                    Copyright @ 2022 ricci2511
                </Typography>
            </Box>
        );
    }
}

export default Footer;
