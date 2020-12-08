const pending = (type: string) => {
    return `${type}_PENDING`;
};

const rejected = (type: string) => {
    return `${type}_REJECTED`;
};

const fulfilled = (type: string) => {
    return `${type}_FULFILLED`;
};

export default {
    pending, rejected, fulfilled,
};
