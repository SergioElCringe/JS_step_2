const fs = require('fs');
const path = require('path');

const dbURL = path.resolve(__dirname, '../', '../', 'src', 'db');

const readJSON = require('../../plugins/readJSON');
const writeJSON = require('../../plugins/writeJSON');

const catalogURL = './scripts/fileDB/db/catalog.json';
const cartURL = './scripts/fileDB/db/cart.json';
const menuURL = './scripts/fileDB/db/menu.json';
const descriptionURL = './scripts/fileDB/db/descriptionCatalog.json';
const contactURL = './scripts/fileDB/db/contact.json';
const shippingMethods = './scripts/fileDB/db/shippingMethods.json';

async function fileDB() {
    try {
        const data = await Promise.all([await readJSON(catalogURL), await readJSON(cartURL), await readJSON(menuURL), await readJSON(descriptionURL), await readJSON(contactURL), await readJSON(shippingMethods)]);

        const [catalog, cart, menu, description, contact, shippingMethods] = data;

        await Promise.all([await writeJSON(dbURL + '/catalog.json', catalog), await writeJSON(dbURL + '/cart.json', cart), await writeJSON(dbURL + '/menu.json', menu), await writeJSON(dbURL + '/description.json', description), await writeJSON(dbURL + '/contact.json', contact), await writeJSON(dbURL + '/shippingMethods.json', shippingMethods)]);

        console.log(`File DB have been rescheduled!`);
    } catch (err) {
        console.warn(`File DB have not been rescheduled! ${err}`);
    };
};

fileDB();