const express = require('express');

const reader = require('../plugins/reader');
const writer = require('../plugins/writer');
const cart = require ('./components/shopping');

const port = 3000;
const server = express();
const options = { encoding: 'utf-8' };


server.use(express.json());

// catalog and cart data is available in lists.json
// nav-menu data is available in menu.json

server.get('/:comp', async (req, res) => {
    const path = `./src/public/${req.params.comp}.json`;
    try {
        res.json(await reader(path, options));
    } catch (err) {
        throw err;
    }
});

server.delete('/cart/:id', async (req, res) => {
    const path = './src/public/lists.json';
    try {
        const lists = await reader(path, options);
        cart.removeItem(lists, +req.params.id)
            .then(async d => await writer(path, d))
            .then(d => res.json(d));
    } catch (err) {
        throw err;
    }
});

server.put('/cart/:id', async (req, res) => {
    const path = './src/public/lists.json';
    try {
        const lists = await reader(path, options);
        cart.changeItemAmount(lists, +req.params.id, req.body.value)
            .then(async d => await writer(path, d))
            .then(d => res.json(d));
    } catch (err) {
        throw err;
    }
});

server.post('/catalog/:id', async (req, res) => {
    const path = './src/public/lists.json';
    try {
        const lists = await reader(path, options);
        cart.addNewItem(lists, +req.params.id)
            .then(async d => await writer(path, d))
            .then(d => res.json(d));
    } catch (err) {
        throw err;
    }
});


server.listen(port, () => {
    console.log(`App listening on localhost:${port}`)
});