const fs = require('fs');
module.exports = class ReadJSON {
    constructor() {
        this.data = '';
        this.options = { encoding: 'utf-8' };
    }

    async read(path) {
        try {
            this.data = await fs.readFileSync(path, this.options);
            return JSON.parse(this.data);
        } catch (err) {
            console.log(err);
        };
    }
}