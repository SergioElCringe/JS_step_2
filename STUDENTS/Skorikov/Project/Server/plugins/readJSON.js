const fs = require('fs');

module.exports = async (path) => {
    const options = { encoding: 'utf-8' };

    try {
        const data = await fs.readFileSync(path, options);
        return JSON.parse(data);
    } catch (err) {
        console.log(err);
    };    
};