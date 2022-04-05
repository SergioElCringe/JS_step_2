const fs = require('fs');

contact = {
    path: './src/db/contact.json',

    async addItem(data, form) {
        data.push(form);
        await fs.writeFileSync(this.path, JSON.stringify(data, null, ' '));
    },
};

module.exports = contact;