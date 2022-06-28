import { Button, IconButton, List, ListItem, ListItemButton, ListItemText, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Component } from "react";
import CVSection from "./CVSection";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = { skillText: '' };
    }

    handleChangeSkillText = (e) => {
        this.setState({ skillText: e.target.value });
    };

    resetSkillText = () => {
        this.setState({ skillText: '' });
    }
    
    render() {
        const {
            skills,
            addSkill,
            deleteSkill,
        } = this.props;

        const skillItems = skills.map((skill) => (
            <ListItem key={skill.id} disablePadding>
                <ListItemButton>
                    <ListItemText primary={skill.skill} />
                    <IconButton aria-label="delete" onClick={() => deleteSkill(skill.id)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemButton>
            </ListItem>
        ));

        return(
            <CVSection title="Skills">
                <TextField
                    fullWidth
                    id="skills"
                    name="skill"
                    label="Skill"
                    variant="standard"
                    value={this.state.skillText}
                    onChange={(e) => this.handleChangeSkillText(e)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            addSkill(this.state.skillText);
                            this.resetSkillText();
                        }
                    }}
                    sx={{ mb: 2 }}
                />
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <List>
                        {skillItems}
                    </List>
                    <Button
                        variant="contained" 
                        fullWidth 
                        startIcon={<AddIcon />}
                        onClick={() => {
                            addSkill(this.state.skillText);
                            this.resetSkillText();
                        }}
                    >
                        Add
                    </Button>
                </Box>
            </CVSection>
        );
    }
}

export default Skills;
