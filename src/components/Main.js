import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import CVForm from "./CVForm/CVForm";
import CVPreview from "./CVPreview/CVPreview";
import { Button, Grid } from "@mui/material";
import CV from "./Utils/CV";
import ReactToPrint from "react-to-print";
import CVExample from "./Utils/CVExample";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            generalInformation: {
                firstName: '',
                lastName: '',
                title: '',
                phoneNumber: '',
                email: '',
                description: '',
                image: '',
            },
            education: [
                {
                    id: uuidv4(),
                    qualification: '',
                    organization: '',
                    fromDate: null,
                    toDate: null,
                    isCurrent: false,
                },
            ],
            experience: [
                {
                    id: uuidv4(),
                    company: '',
                    position: '',
                    activities: '',
                    fromDate: null,
                    toDate: null,
                    isCurrent: false,
                },
            ],
            skills: [],
        };
    }

    findAndDeleteSectionById = (sections, id) => {
        const sectionToDelete = sections.find((section) => section.id === id);
        return sections.filter((section) => section !== sectionToDelete);
    };

    handleChangeGeneralInformation = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => {
            const generalInfo = {...prevState.generalInformation};
            
            (name === 'image')
                ? generalInfo[name] = URL.createObjectURL(e.target.files[0])
                : generalInfo[name] = value;

            return { generalInformation: generalInfo }
        });
    };

    handleAddEducation = () => {
        this.setState((prevState) => {
            const educationSection = {
                id: uuidv4(),
                qualification: '',
                organization: '',
                fromDate: null,
                toDate: null,
                isCurrent: false,
            }

            return {
                education: [...prevState.education, educationSection]
            }
        });
    };

    handleDeleteEducation = (id) => {
        this.setState((prevState) => {
            return {
                education: this.findAndDeleteSectionById([...prevState.education], id)
            }
        });
    };

    handleChangeEducation = (e, id) => {
        const { name, value, checked } = e.target;
        this.setState((prevState) => {
            const educationSections = [...prevState.education];
            const sectionToChange = educationSections.find((section) => section.id === id);

            (name === 'isCurrent')
                ? sectionToChange[name] = checked
                : sectionToChange[name] = value;

            return { education: educationSections }
        });
    };

    handleAddExperience = () => {
        this.setState((prevState) => {
            const experienceSection = {
                id: uuidv4(),
                company: '',
                position: '',
                fromDate: null,
                toDate: null,
                activities: '',
            };

            return { experience: [...prevState.experience, experienceSection] }
        });
    };

    handleDeleteExperience = (id) => {
        this.setState((prevState) => {
            return {
                experience: this.findAndDeleteSectionById([...prevState.experience], id)
            }
        });
    };

    handleChangeExperience = (e, id) => {
        const { name, value, checked } = e.target;
        this.setState((prevState) => {
            const experienceSections = [...prevState.experience];
            const sectionToChange = experienceSections.find((section) => section.id === id); 

            (name === 'isCurrent')
                ? sectionToChange[name] = checked
                : sectionToChange[name] = value;

            return { experience: experienceSections }
        });
    };

    handleChangeDate = (e, sectionObj, name) => {
        this.setState((prevState) => {
            const educationSections = prevState.education;
            const education = educationSections.find((section) => section === sectionObj);

            if (education) {
                education[name] = e;
                return {
                    education: educationSections
                }
            } 

            const experienceSections = prevState.experience;
            const experience = experienceSections.find((section) => section === sectionObj);
            experience[name] = e;
            return {
                experience: experienceSections
            }
        });
    };

    handleAddSkill = (skillValue) => {
        this.setState((prevState) => {
            if (skillValue === '') return;
            const skillItem = {
                id: uuidv4(),
                skill: skillValue,
            };

            return { skills: [...prevState.skills, skillItem] }
        });
    };

    handleDeleteSkill = (id) => {
        this.setState((prevState) => {
            return {
                skills: this.findAndDeleteSectionById([...prevState.skills], id)
            }
        });
    };

    handleReset = () => {
        this.setState(CV);
    };

    handleLoadExample = () => {
        this.setState(CVExample);
    };

    render() {
        const { firstName, lastName } = this.state.generalInformation;

        return(
            <Grid container columnSpacing={4} rowSpacing={1}>
                <Grid item sm={12} lg={6} component="section">
                    <CVForm 
                        generalInformation={this.state.generalInformation} 
                        changeGeneralInformation={this.handleChangeGeneralInformation} 
                        education={this.state.education}
                        addEducation={this.handleAddEducation}
                        deleteEducation={this.handleDeleteEducation}
                        changeEducation={this.handleChangeEducation}
                        experience={this.state.experience}
                        addExperience={this.handleAddExperience}
                        deleteExperience={this.handleDeleteExperience}
                        changeExperience={this.handleChangeExperience}
                        changeDate={this.handleChangeDate}
                        skills={this.state.skills}
                        addSkill={this.handleAddSkill}
                        deleteSkill={this.handleDeleteSkill}
                    />
                </Grid>
                <Grid item sm={12} lg={6} component="section" sx={{ width: '100%' }}>
                    <CVPreview
                        generalInformation={this.state.generalInformation}
                        education={this.state.education}
                        experience={this.state.experience}
                        skills={this.state.skills}
                        ref={e => (this.printRef = e)}
                        className="cv-preview" 
                    />
                </Grid>
                <Grid item xs={12}>
                    <ReactToPrint 
                        copyStyles
                        trigger={() => {
                            return(
                                <Button 
                                    variant="contained"
                                    fullWidth 
                                    color="success"
                                >
                                    Download PDF
                                </Button>
                            );
                        }}
                        content={() => this.printRef}
                        documentTitle={`${firstName}_${lastName}_CV`}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        variant="contained"
                        fullWidth 
                        onClick={this.handleLoadExample}
                        color="info"
                    >
                        Load Example
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        variant="contained"
                        fullWidth 
                        onClick={this.handleReset}
                        color="error"
                    >
                        Reset
                    </Button>
                </Grid>
           </Grid>
        );
    }
}

export default Main;
