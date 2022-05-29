const path = require('path');

const cartURL = './scripts/fillDB/data/cart.json';
const catalogURL = './scripts/fillDB/data/catalog.json';

const dbURL = path.join(__dirname, '../', '../', 'src', 'db');

const reader = require('../../plugins/reader');
const writer = require('../../plugins/writer');

async function fillDB() {
  try {
    const data = await Promise.all([await reader(cartURL), await reader(catalogURL)]);
    const [cart, catalog] = data;

    await Promise.all([await writer(dbURL + '/cart.json', cart), await writer(dbURL + '/catalog.json', catalog)]);
    console.log('DB filled');
  }
  catch(err) {
    console.log(err)
    throw new Error('FILL DB err');
  }
};

fillDB();


