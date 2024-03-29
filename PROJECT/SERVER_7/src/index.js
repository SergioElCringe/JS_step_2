const fs = require('fs');
const express = require('express');

const server = express();
server.use(express.json());


const catalogURL = './src/db/catalog.json';
const cartURL = './src/db/cart.json';
const menuURL = './src/db/menu.json';

const reader = require('../plugins/reader');
const writer = require('../plugins/writer');

const cart = require('./components/cart');
const catalog = require('./components/catalog');

server.get('/catalog', async (req, res) => {
  try {
    let data = await reader(catalogURL);
    let total = data.length;
    console.log(req.query);
    const query = Object.keys(req.query); // ['categories']
    if (query.length) {
      const params = req.query;
      if (params.filter) {
        data = catalog.filter(data, params.filter);
        total = data.length;
      }

      if (params.show) {
        let { page, show } = params;
        page--;
        const firstElNum = page * +show; // 0
        const lastElNum = firstElNum + +show; // 4

        data = data.slice(firstElNum, lastElNum);
      }
    }

    
    res.json({ data, pagination: { total } }); 
  } catch(err) {
    console.log('GET /catalog ERR');
  }
});

server.get('/catalog/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const data = await reader(catalogURL);
    const item = catalog.findItem(data, id) || null;
    if (item) {
      res.json(item);
    } else {
      res.sendStatus(404);
    }
  } catch(err) {
    console.log('GET /catalog ERR');
  }
});

server.get('/menu', async (req, res) => {
  try {
    const data = await reader(menuURL);
    res.json(data); 
  } catch(err) {
    console.log('GET /menu ERR');
  }
});

server.get('/cart', async (req, res) => {
  try {
    const data = await reader(cartURL);
    res.json(data); 
  } catch(err) {
    console.log('GET /cart ERR');
  }
});

server.post('/cart', async (req, res) => {
  const newItem = req.body;
   try {
    const data = await reader(cartURL);
    const newCart = cart.add(data, newItem);
    await writer(cartURL, newCart);
    res.json({ error: false });
   }
   catch(err) {
    console.log('POST /cart ERR');
    res.json({ error: true });
   }
});

server.put('/cart/:id', async (req, res) => {
  const { amount } = req.body;
  const { id } = req.params;
   try {
    const data = await reader(cartURL);
    const newCart = cart.change(data, id, amount);
    await fs.writeFileSync(cartURL, JSON.stringify(newCart, null, ' '));
    res.json({ error: false });
   }
   catch(err) {
    console.log('PUT /cart ERR');
    res.json({ error: true });
   }
});

server.delete('/cart/:id', async (req, res) => {
  const { id } = req.params;
   try {
    const data = await reader(cartURL);
    const newCart = cart.remove(data, id);
    await fs.writeFileSync(cartURL, JSON.stringify(newCart, null, ' '));
    res.json({ error: false });
   }
   catch(err) {
    console.log('DELETE /cart ERR');
    res.json({ error: true });
   }
});

// 1 - DELETE запрос на бэке
// 2 - полностью реализовать удаление (PUT / DELETE на фронте)
// 3 - придумать что делать с подсчетом общей стоимости и количества тов. в корзине (бэк и фронт)


server.listen(3000);
