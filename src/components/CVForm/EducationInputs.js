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
import React from 'react';

const EducationInputs = ({ education, deleteEducation, changeEducation }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="qualification-title"
                        name="qualification"
                        label="Qualification title"
                        variant="standard"
                        value={education.qualification}
                        onChange={(e) => changeEducation(e, education.id)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="organization"
                        name="organization"
                        label="Education organization"
                        variant="standard"
                        value={education.organization}
                        onChange={(e) => changeEducation(e, education.id)}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <DatePicker
                        disableFuture
                        label="From"
                        id="from"
                        name="fromDate"
                        inputFormat="dd/MM/yyyy"
                        value={education.fromDate}
                        onChange={(e) =>
                            changeEducation(e, education.id, 'fromDate')
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
                        disabled={education.isCurrent}
                        disableFuture
                        label="To"
                        id="to"
                        name="toDate"
                        inputFormat="dd/MM/yyyy"
                        value={education.toDate}
                        onChange={(e) =>
                            changeEducation(e, education.id, 'toDate')
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
                        checked={education.isCurrent}
                        onChange={(e) => changeEducation(e, education.id)}
                        label="Current"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        fullWidth
                        variant="contained"
                        color="error"
                        startIcon={
                            <DeleteIcon
                                sx={{ transform: 'translateY(-2px)' }}
                            />
                        }
                        onClick={() => deleteEducation(education.id)}
                    >
                        Delete
                    </Button>
                </Grid>
            </Grid>
        </LocalizationProvider>
    );
};

export default EducationInputs;
