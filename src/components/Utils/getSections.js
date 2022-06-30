import EducationInputs from '../CVForm/EducationInputs';
import ExperienceInputs from '../CVForm/ExperienceInputs';
import EducationSection from '../CVPreview/EducationSection';
import ExperienceSection from '../CVPreview/ExperienceSection';

const getFormEducations = (
    educationSections,
    deleteEducation,
    changeEducation,
    changeDate
) => {
    return educationSections.map((section) => (
        <EducationInputs
            key={section.id}
            education={section}
            deleteEducation={deleteEducation}
            changeEducation={changeEducation}
            changeDate={changeDate}
        />
    ));
};

const getFormExperiences = (
    experienceSections,
    deleteExperience,
    changeExperience,
    changeDate
) => {
    return experienceSections.map((section) => (
        <ExperienceInputs
            key={section.id}
            experience={section}
            changeExperience={changeExperience}
            deleteExperience={deleteExperience}
            changeDate={changeDate}
        />
    ));
};

const getPreviewEducations = (educationSections) => {
    return educationSections.map((section) => (
        <EducationSection key={section.id} education={section} />
    ));
};

const getPreviewExperiences = (experienceSections) => {
    return experienceSections.map((section) => (
        <ExperienceSection key={section.id} experience={section} />
    ));
};

export {
    getFormEducations,
    getFormExperiences,
    getPreviewEducations,
    getPreviewExperiences,
};
