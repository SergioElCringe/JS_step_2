
const path = require('path');
const URL = './scripts/fillDB/data/lists.json';
const dbURL = path.join(__dirname, '../', '../', 'src', 'public');

const reader = require('../../plugins/reader');
const writer = require('../../plugins/writer');

async function fillDB() {
  try {
    const data = await reader(URL, { encoding: 'utf-8' });
    await writer(dbURL + '/lists.json', JSON.stringify(data));
    console.log('DB filled');
  }
  catch(err) {
    console.log(err)
    throw new Error('FILL DB err');
  }
};

fillDB();