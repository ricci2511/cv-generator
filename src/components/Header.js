import { AppBar, Typography } from "@mui/material";
import { Component } from "react";

class Header extends Component {
    render() {
        return(
            <AppBar position="static" sx={{ p: 1, mb: 4 }}>
                <Typography variant="h2" component="h1" align="center" style={{ fontWeight: 600 }}>
                    CV Generator
                </Typography>
            </AppBar>
        );
    }
}

export default Header;
