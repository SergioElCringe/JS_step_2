const fs = require('fs');
const path = require('path');

const dbURL = path.resolve(__dirname, '../', '../', 'src', 'db');

const readJSON = require('../../plugins/readJSON');
const writeJSON = require('../../plugins/writeJSON');

const catalogURL = './scripts/fileDB/db/catalog.json';
const cartURL = './scripts/fileDB/db/cart.json';
const menuURL = './scripts/fileDB/db/menu.json';

async function fileDB() {
    try {
        const data = await Promise.all([await readJSON(catalogURL), await readJSON(cartURL), await readJSON(menuURL)]);

        const [catalog, cart, menu] = data;

        await Promise.all([await writeJSON(dbURL + '/catalog.json', catalog), await writeJSON(dbURL + '/cart.json', cart), await writeJSON(dbURL + '/menu.json', menu)]);

        console.log(`File DB have been rescheduled!`);
    } catch (err) {
        console.warn(`File DB have not been rescheduled! ${err}`);
    };
};

fileDB();