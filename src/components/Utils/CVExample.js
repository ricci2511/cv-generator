import { v4 as uuidv4 } from 'uuid';
import tux from './images/tux.png';

const CVExample = {
    generalInformation : {
        firstName: 'The Penguin',
        lastName: 'Tux',
        title: 'Kernel Developer',
        phoneNumber: '+34-687-908-147',
        email: 'mrtux@email.com',
        description: 'Do i really need to introduce myself? Everyone knows the almighty tux maintaining the most widely used kernel in the planet ;)',
        image: `${tux}`,
    },
    education : [
        {
            id: uuidv4(),
            qualification: 'Computer Science',
            organization: 'University of Helsinki',
            fromDate: '1988-09',
            toDate: '1996-06',
            isCurrent: false,
        }
    ],
    experience : [
        {
            id: uuidv4(),
            company: 'Linux Foundation',
            position: 'Head of the company',
            activities: 'Maintaining the great open source project Linux',
            fromDate: '2003-06',
            toDate: null,
            isCurrent: true,
        }
    ],
    skills: [
        {
            id: uuidv4(),
            skill: 'C'
        },
        {
            id: uuidv4(),
            skill: 'Git'
        },
        {
            id: uuidv4(),
            skill: 'Standard-compliant coding'
        },
        {
            id: uuidv4(),
            skill: 'UNIX'
        },
        {
            id: uuidv4(),
            skill: 'I have more skills but im lazy to write them all'
        },
    ],
};

export default CVExample;