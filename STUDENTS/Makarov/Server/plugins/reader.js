const fs = require('fs');

module.exports = async (path, options) => {
    let data = null;
    try {
        data = fs.readFileSync(path, options);
        return JSON.parse(data);
    } catch (err) {
        throw err;
    }
}