const fs = require('fs');
const express = require('express');
const server = express();

server.use(express.json());

const catalogURL = './src/db/catalog.json';
const cartURL = './src/db/cart.json';

const reader = require('../plugins/reader');
const writer = require('../plugins/writer');

const cart = require('./components/cart');

async function readJSON(path) {
    const options = {encoding: 'utf-8'};
    let dataFromJSON = null;
    try {
        dataFromJSON = await fs.readFileSync(path, options);
        return JSON.parse(dataFromJSON);
    } catch (err) {
        console.log('Ищем ошибку');
    }
}

server.get('/catalog', async (req, res) => {
    try {
        console.log('hello');
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
        const newCart = cart.add(data , newItem);
        await writer (cartURL , data);
        res.json({ error: false });
    } catch(err) {
        console.log('POST /cart ERR');
        res.json({ error: true });
    }
});
  
server.put('/cart/:id', async (req, res) => {
    const { value } = req.body;
    const { id } = req.params;
    try {
        const data = await reader(cartURL);
        const newCart = cart.change(data , id ,value)
        await writer (cartURL , data)
        res.json({ error: false });
    } catch(err) {
        console.log('PUT /cart ERR');
        res.json({ error: true });
    }
});

server.delete('/cart/:id', async (req, res) => {
    const putItem = req.params
    console.log(req.params)
    try {
        const data = await reader(cartURL);
        const find = await data.items.find(item => item.id === putItem.id );
        const index = data.items.indexOf(find);
        data.items.splice(index , 1);
        console.log(data.items)
        await writer (cartURL , data)
        res.json({ error: false });
    } catch (err) {
        res.json({ error: true });
    }
});

server.listen(3000);