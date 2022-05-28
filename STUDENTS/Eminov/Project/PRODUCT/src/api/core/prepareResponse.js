export default value => {
    const { data } = value;
    if (data) {
        return data;
    } else {
        throw new Error();
    };
};