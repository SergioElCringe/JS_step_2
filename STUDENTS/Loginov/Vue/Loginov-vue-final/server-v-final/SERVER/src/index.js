const fs = require('fs');
const express = require('express');

const server = express();
server.use(express.json());


const catalogURL = './src/db/catalog.json';
const cartURL = './src/db/cart.json';
const menuURL = './src/db/menu.json';

const read = require('../plugins/reader');
const write = require('../plugins/writer');
const cart = require('./components/cart');
const catalog = require('./components/catalog');

async function readJSON(path) {
  const options = { encoding: 'utf-8' };
  let dataFromJSON = null;
  try {
    dataFromJSON = await fs.readFileSync(path, options);
    return JSON.parse(dataFromJSON);
  } catch (err) {
    console.log('Read error');
  }
}

server.get('/catalog', async (req, res) => {
  try {
    let data = await read(catalogURL);
    let total = data.length;
    const query = Object.keys(req.query);
    console.log(req.query);
    if (query.length) {
      const params = req.query;
      if (params.filter) {
        data = catalog.filter(data, params.filter);
        total = data.length;
      }

      if (params.show) {
        let { page, show } = params;
        page--;
        const firstElNum = page * +show;
        const lastElNum = firstElNum + +show;

        data = data.slice(firstElNum, lastElNum);
      }
    }

    res.json({ data, pagination: { total } });
  } catch (err) {
    console.log('GET /catalog ERR');
  }
});

server.get('/cart', async (req, res) => {
  try {
    const data = await read(cartURL);
    res.json(data);
  } catch (err) {
    console.log('GET /cart ERR');
  }
});

server.get('/menu', async (req, res) => {
  try {
    const data = await read(menuURL);
    res.json(data);
  } catch (err) {
    console.log('GET /menu ERR');
  }
});

server.get('/catalog/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const data = await read(catalogURL);
    const item = catalog.findItem(data, id) || null;
    if (item) {
      res.json(item);
    }
    else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log('GET /catalog ERR');
  }
});

server.post('/cart', async (req, res) => {
  const newItem = req.body;
  try {
    const data = await read(cartURL);
    const newCart = cart.add(data, newItem);
    await write(cartURL, newCart);
    res.json({ error: false });
  }
  catch (err) {
    console.log('POST /cart ERR');
    res.json({ error: true });
  }
});

server.put('/cart/:id', async (req, res) => {
  const { amount } = req.body;
  const { id } = req.params;
  try {
    const data = await read(cartURL);
    const newCart = cart.change(data, id, amount);
    await write(cartURL, newCart);
    res.json({ error: false });
  }
  catch (err) {
    console.log('PUT /cart ERR');
    res.json({ error: true });
  }
});

server.delete('/cart', async (req, res) => {
  const { id } = req.params;

  try {
    const data = await read(cartURL);
    cart.deleteItem(data, id);
    await write(cartURL, data);
    res.json({ error: false });
  } catch (err) {
    res.json({ error: true });
    console.warn(err);
  };
});

server.listen(3000);
