import { v4 as uuidv4 } from 'uuid';

const CV = {
    generalInformation : {
        firstName: '',
        lastName: '',
        title: '',
        phoneNumber: '',
        email: '',
        description: '',
        image: '',
    },
    education : [
        {
            id: uuidv4(),
            qualification: '',
            organization: '',
            fromDate: null,
            toDate: null,
            isCurrent: false,
        }
    ],
    experience : [
        {
            id: uuidv4(),
            company: '',
            position: '',
            activities: '',
            fromDate: null,
            toDate: null,
            isCurrent: false,
        }
    ],
    skills: [],
};

export default CV;
