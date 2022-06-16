const fs = require('fs');

module.exports = async (path, data) => {
    try {
        fs.writeFileSync(path, data);
        return true;
    } catch (err) {
        throw err;
    }
}
