import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Component } from "react";

class GeneralInfoSection extends Component {
    render() {
        const {
            cvImage,
            description,
            name,
        } = this.props;

        return(
            <Box component="section" sx={{ display: 'flex', gap: 2 }}>
                {cvImage !== '' &&
                    <Avatar 
                        alt={name} 
                        src={cvImage}
                        variant="square"
                        sx={{ width: 150, height: 150 }}
                    />
                }
                <Typography variant="body1" component="p">
                    {description}
                </Typography>
            </Box>
        );
    }
}

export default GeneralInfoSection;
