import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Component } from "react";

class Header extends Component {
    render() {
    const {
        firstName,
        lastName,
        title,
        phoneNumber,
        email,
    } = this.props.generalInformation;

        return(
            <Box 
                component="header" 
                sx={{ px: 3, py: 2, backgroundColor: '#1976d2', color: 'white', minHeight: '9rem' }}
            >
                <Grid container >
                    <Grid item xs={12}>
                        <Typography 
                            variant="h3" 
                            component="h1"
                            sx={{ fontWeight: 'bold' }}
                        >
                            {firstName} {lastName}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            variant="h5"
                            component="h2"
                        >
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', pt: 1 }}>
                            <Typography
                                variant="subtitle2"
                            >
                                {phoneNumber !== '' ? 'Phone' : ''}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                            >
                                {phoneNumber}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                            <Typography
                                variant="subtitle2"
                            >
                                {email !== '' ? 'E-Mail' : ''}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                            >
                                {email}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

export default Header;
