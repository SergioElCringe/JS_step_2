const fs = require('fs');
const express = require('express');

const server = express();
server.use(express.json());


const catalogURL = './src/db/catalog.json';
const cartURL = './src/db/cart.json';

async function readJSON(path) {
  const options = { encoding: 'utf-8' };
  let dataFromJSON = null;
  try {
    dataFromJSON = await fs.readFileSync(path, options);
    return JSON.parse(dataFromJSON);
  } catch(err) {
    console.log('Read error');
  }
}

server.get('/catalog', async (req, res) => {
  // console.log(await readJSON(catalogURL));
  try {
    const data = await readJSON(catalogURL);
    res.json(data); 
  } catch(err) {
    console.log('GET /catalog ERR');
  }
});

server.get('/cart', async (req, res) => {
  try {
    const data = await readJSON(cartURL);
    res.json(data); 
  } catch(err) {
    console.log('GET /cart ERR');
  }
});

server.post('/cart', async (req, res) => {
  const newItem = req.body;
   try {
    const data = await readJSON(cartURL);
    data.items.push(newItem);

    await fs.writeFileSync(cartURL, JSON.stringify(data, null, ' '));

    res.json({ error: false });
   }
   catch(err) {
    console.log('POST /cart ERR');
    res.json({ error: true });
   }
});

server.put('/cart/:id', async (req, res) => {
  const { value } = req.body;
  const { id } = req.params;
   try {
    const data = await readJSON(cartURL);
    
    const find = data.items.find(el => el.id === id);
    find.amount += value;

    await fs.writeFileSync(cartURL, JSON.stringify(data, null, ' '));

    res.json({ error: false });
   }
   catch(err) {
    console.log('PUT /cart ERR');
    res.json({ error: true });
   }
});

// 1 - DELETE запрос на бэке
// 2 - полностью реализовать удаление (PUT / DELETE на фронте)
// 3 - придумать что делать с подсчетом общей стоимости и количества тов. в корзине (бэк и фронт)


server.listen(3000);
