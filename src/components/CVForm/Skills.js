import {
    Button,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CVSection from './CVSection';

const Skills = ({ skills, addSkill, deleteSkill }) => {
    const [skillValue, setSkillValue] = useState('');

    const handleSkillValueChange = (e) => setSkillValue(e.target.value);
    const resetSkillValue = () => setSkillValue('');

    const skillItems = skills.map((skill) => (
        <ListItem key={skill.id} disablePadding>
            <ListItemButton>
                <ListItemText primary={skill.skill} />
                <IconButton
                    aria-label="delete"
                    onClick={() => deleteSkill(skill.id)}
                >
                    <DeleteIcon />
                </IconButton>
            </ListItemButton>
        </ListItem>
    ));

    return (
        <CVSection title="Skills">
            <TextField
                fullWidth
                id="skills"
                name="skill"
                label="Skill"
                variant="standard"
                value={skillValue}
                onChange={(e) => handleSkillValueChange(e)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        addSkill(skillValue);
                        resetSkillValue();
                    }
                }}
                sx={{ mb: 2 }}
            />
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <List>{skillItems}</List>
                <Button
                    variant="contained"
                    fullWidth
                    startIcon={<AddIcon />}
                    onClick={() => {
                        addSkill(skillValue);
                        resetSkillValue();
                    }}
                >
                    Add
                </Button>
            </Box>
        </CVSection>
    );
};

export default Skills;
