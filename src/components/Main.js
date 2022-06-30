import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';
import { Button, Grid } from '@mui/material';
import { useReactToPrint } from 'react-to-print';
import CVExample from './Utils/CVExample';
import React from 'react';
import { isDate } from 'date-fns';

const Main = () => {
    const [generalInformation, setGeneralInformation] = useState({
        firstName: '',
        lastName: '',
        title: '',
        phoneNumber: '',
        email: '',
        description: '',
        image: '',
    });

    const [educations, setEducations] = useState([
        {
            qualification: '',
            id: uuidv4(),
            organization: '',
            fromDate: null,
            toDate: null,
            isCurrent: false,
        },
    ]);

    const [experiences, setExperiences] = useState([
        {
            id: uuidv4(),
            company: '',
            position: '',
            activities: '',
            fromDate: null,
            toDate: null,
            isCurrent: false,
        },
    ]);

    const [skills, setSkills] = useState([]);

    const findAndDeleteSectionById = (sections, id) => {
        const sectionToDelete = sections.find((section) => section.id === id);
        return sections.filter((section) => section !== sectionToDelete);
    };

    const handleGeneralInformationChange = (e) => {
        const { name, value, type } = e.target;
        setGeneralInformation((prevState) => {
            const generalInfo = { ...prevState };

            type === 'file'
                ? (generalInfo[name] = URL.createObjectURL(e.target.files[0]))
                : (generalInfo[name] = value);

            return generalInfo;
        });
    };

    const handleAddEducation = () => {
        setEducations((prevState) => {
            const educationSection = {
                id: uuidv4(),
                qualification: '',
                organization: '',
                fromDate: null,
                toDate: null,
                isCurrent: false,
            };

            return [...prevState, educationSection];
        });
    };

    const handleDeleteEducation = (id) => {
        setEducations((prevState) => {
            return findAndDeleteSectionById([...prevState], id);
        });
    };

    const handleEducationChange = (e, id, elName) => {
        setEducations((prevState) => {
            const educationSections = [...prevState];
            const sectionToChange = educationSections.find(
                (section) => section.id === id
            );

            if (isDate(e)) {
                sectionToChange[elName] = e;
            } else {
                const { name, value, type, checked } = e.target;
                type === 'checkbox'
                    ? (sectionToChange[name] = checked)
                    : (sectionToChange[name] = value);
            }

            return educationSections;
        });
    };

    const handleAddExperience = () => {
        setExperiences((prevState) => {
            const experienceSection = {
                id: uuidv4(),
                company: '',
                position: '',
                fromDate: null,
                toDate: null,
                activities: '',
            };

            return [...prevState, experienceSection];
        });
    };

    const handleDeleteExperience = (id) => {
        setExperiences((prevState) => {
            return findAndDeleteSectionById([...prevState], id);
        });
    };

    const handleExperienceChange = (e, id, elName) => {
        setExperiences((prevState) => {
            const experienceSections = [...prevState];
            const sectionToChange = experienceSections.find(
                (section) => section.id === id
            );

            if (isDate(e)) {
                sectionToChange[elName] = e;
            } else {
                const { name, value, type, checked } = e.target;
                type === 'checkbox'
                    ? (sectionToChange[name] = checked)
                    : (sectionToChange[name] = value);
            }

            return experienceSections;
        });
    };

    const handleAddSkill = (skillValue) => {
        if (skillValue === '') return;
        setSkills((prevState) => {
            const skillItem = {
                id: uuidv4(),
                skill: skillValue,
            };

            return [...prevState, skillItem];
        });
    };

    const handleDeleteSkill = (id) => {
        setSkills((prevState) => {
            return findAndDeleteSectionById([...prevState], id);
        });
    };

    const handleLoadExample = () => {
        setGeneralInformation(CVExample.generalInformation);
        setEducations(CVExample.education);
        setExperiences(CVExample.experience);
        setSkills(CVExample.skills);
    };

    const handleReset = () => {
        setGeneralInformation({
            firstName: '',
            lastName: '',
            title: '',
            phoneNumber: '',
            email: '',
            description: '',
            image: '',
        });
        setEducations([]);
        setExperiences([]);
        setSkills([]);
    };

    const previewRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => previewRef.current,
        documentTitle: `${generalInformation.firstName}_${generalInformation.lastName}_CV`,
    });

    return (
        <Grid container columnSpacing={4} rowSpacing={1}>
            <Grid item sm={12} lg={6} component="section">
                <CVForm
                    generalInformation={generalInformation}
                    changeGeneralInformation={handleGeneralInformationChange}
                    education={educations}
                    addEducation={handleAddEducation}
                    deleteEducation={handleDeleteEducation}
                    changeEducation={handleEducationChange}
                    experience={experiences}
                    addExperience={handleAddExperience}
                    deleteExperience={handleDeleteExperience}
                    changeExperience={handleExperienceChange}
                    changeDate={null}
                    skills={skills}
                    addSkill={handleAddSkill}
                    deleteSkill={handleDeleteSkill}
                />
            </Grid>
            <Grid
                item
                sm={12}
                lg={6}
                component="section"
                sx={{ width: '100%' }}
            >
                <CVPreview
                    generalInformation={generalInformation}
                    education={educations}
                    experience={experiences}
                    skills={skills}
                    className="cv-preview"
                    ref={previewRef}
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="contained"
                    fullWidth
                    color="success"
                    onClick={handlePrint}
                >
                    Download PDF
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="contained"
                    fullWidth
                    onClick={handleLoadExample}
                    color="info"
                >
                    Load Example
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="contained"
                    fullWidth
                    onClick={handleReset}
                    color="error"
                >
                    Reset
                </Button>
            </Grid>
        </Grid>
    );
};

export default Main;
