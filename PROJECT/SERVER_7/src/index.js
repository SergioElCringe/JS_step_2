const fs = require('fs');
const express = require('express');

const server = express();
server.use(express.json());


const catalogURL = './src/db/catalog.json';
const cartURL = './src/db/cart.json';

const reader = require('../plugins/reader');
const writer = require('../plugins/writer');

const cart = require('./components/cart');

server.get('/catalog', async (req, res) => {
  try {
    const data = await reader(catalogURL);
    res.json(data); 
  } catch(err) {
    console.log('GET /catalog ERR');
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
  const { value } = req.body;
  const { id } = req.params;
   try {
    const data = await reader(cartURL);
    const newCart = cart.change(data, id, value);
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
