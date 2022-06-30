import { List, ListItem, Typography } from '@mui/material';
import React from 'react';

const SkillsSection = ({ skills }) => {
    const skillItems = skills.map((skill) => (
        <ListItem key={skill.id} disablePadding sx={{ display: 'list-item' }}>
            <Typography variant="body1">{skill.skill}</Typography>
        </ListItem>
    ));

    return (
        <List
            sx={{
                listStyleType: 'disc',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                pt: 2,
                pl: 4,
            }}
        >
            {skillItems}
        </List>
    );
};

export default SkillsSection;
