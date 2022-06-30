import {
    Button,
    FormControlLabel,
    Grid,
    Switch,
    TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const ExperienceInputs = ({
    experience,
    deleteExperience,
    changeExperience,
}) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="position"
                        name="position"
                        label="Position title"
                        variant="standard"
                        value={experience.position}
                        onChange={(e) => changeExperience(e, experience.id)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="company-name"
                        name="company"
                        label="Company name"
                        variant="standard"
                        value={experience.company}
                        onChange={(e) => changeExperience(e, experience.id)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="activities"
                        name="activities"
                        label="Activities and tasks"
                        variant="standard"
                        multiline
                        rows={3}
                        value={experience.activities}
                        onChange={(e) => changeExperience(e, experience.id)}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <DatePicker
                        disableFuture
                        label="From"
                        id="from"
                        name="fromDate"
                        inputFormat="dd/MM/yyyy"
                        value={experience.fromDate}
                        onChange={(e) =>
                            changeExperience(e, experience.id, 'fromDate')
                        }
                        renderInput={(params) => (
                            <TextField
                                fullWidth
                                variant="standard"
                                {...params}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <DatePicker
                        disabled={experience.isCurrent}
                        disableFuture
                        label="To"
                        id="to"
                        name="toDate"
                        inputFormat="dd/MM/yyyy"
                        value={experience.toDate}
                        onChange={(e) =>
                            changeExperience(e, experience.id, 'toDate')
                        }
                        renderInput={(params) => (
                            <TextField
                                fullWidth
                                variant="standard"
                                {...params}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <FormControlLabel
                        sx={{
                            transform: 'translateY(10px)',
                            mx: 'auto',
                        }}
                        control={<Switch />}
                        id="isCurrent"
                        name="isCurrent"
                        checked={experience.isCurrent}
                        onChange={(e) => changeExperience(e, experience.id)}
                        label="Current"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="error"
                        fullWidth
                        startIcon={<DeleteIcon />}
                        onClick={() => deleteExperience(experience.id)}
                    >
                        Delete
                    </Button>
                </Grid>
            </Grid>
        </LocalizationProvider>
    );
};

export default ExperienceInputs;
