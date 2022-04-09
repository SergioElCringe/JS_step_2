const fs = require('fs');

module.exports = async (path, data) => {
    const body = JSON.stringify(data, null, ' ');

    try {
        return await fs.writeFileSync(path, body);
    } catch (err) {
        console.warn(err);
    };
};