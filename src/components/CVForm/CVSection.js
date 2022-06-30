import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';

const CVSection = ({ title, children }) => {
    return (
        <Box component="section" sx={{ mb: 2 }}>
            <Typography variant="h4" component="h4" sx={{ color: '#263238' }}>
                {title}
            </Typography>
            <Paper component="article" sx={{ mt: 2, p: 2 }} elevation={3}>
                {children}
            </Paper>
        </Box>
    );
};

export default CVSection;
