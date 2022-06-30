import { format } from 'date-fns';

const formatDate = (value) => {
    return format(new Date(value), 'yyyy-MM');
};

export default formatDate;
