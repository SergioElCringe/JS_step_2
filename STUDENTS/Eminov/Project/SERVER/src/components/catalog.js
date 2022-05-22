module.exports = {
    findItem(data, id) {
        return data.find(item => item.id === id);
    },
};