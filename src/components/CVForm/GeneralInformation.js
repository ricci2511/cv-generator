import { Grid, TextField } from '@mui/material';
import React from 'react';
import ImageUploader from '../Utils/ImageUploader';
import CVSection from './CVSection';

const GeneralInformation = ({
    generalInformation,
    changeGeneralInformation,
}) => {
    return (
        <CVSection title="General Information">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="first-name"
                        name="firstName"
                        label="First name"
                        variant="standard"
                        value={generalInformation.firstName}
                        onChange={changeGeneralInformation}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="last-name"
                        name="lastName"
                        label="Last name"
                        variant="standard"
                        value={generalInformation.lastName}
                        onChange={changeGeneralInformation}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="title"
                        name="title"
                        label="Title"
                        variant="standard"
                        value={generalInformation.title}
                        onChange={changeGeneralInformation}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        fullWidth
                        id="phone-number"
                        name="phoneNumber"
                        label="Phone Number"
                        variant="standard"
                        value={generalInformation.phoneNumber}
                        onChange={changeGeneralInformation}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        variant="standard"
                        value={generalInformation.email}
                        onChange={changeGeneralInformation}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="description"
                        name="description"
                        label="Description"
                        variant="standard"
                        multiline
                        rows={3}
                        value={generalInformation.description}
                        onChange={changeGeneralInformation}
                    />
                </Grid>
                <Grid item xs={12}>
                    <ImageUploader changeImage={changeGeneralInformation} />
                </Grid>
            </Grid>
        </CVSection>
    );
};

export default GeneralInformation;
