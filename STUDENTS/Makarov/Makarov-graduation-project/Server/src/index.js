const express = require('express');

const reader = require('../plugins/reader');
const writer = require('../plugins/writer');
const cart = require ('./components/shopping');

const port = 3000;
const server = express();
const options = { encoding: 'utf-8' };


server.use(express.json());

server.get('/:comp', async (req, res) => {
    switch (req.params.comp) {
        case 'suggestion': 
            try {
                const catalog = await reader('./src/public/catalog.json', options);
                const result = {
                    items: catalog.items.filter(el => el.sticker).slice(0, 8),
                    stickerTypes: catalog.stickerTypes
                }
                res.json(result);
            } catch (err) {
                throw err;
            }
            break;
        default:
            const path = `./src/public/${req.params.comp}.json`;
            try {
                res.json(await reader(path, options));
            } catch (err) {
                throw err;
            }
    }
});

server.get('/catalog/:id', async (req, res) => {
    const path = './src/public/catalog.json';
    const id = req.params.id;
    try {
        const catalog = await reader(path, options);
        const item = catalog.items.find(el => el.id === +id);
        const stickerTypes = catalog.stickerTypes;
        res.json({ item, stickerTypes });
    } catch (err) {
        throw err;
    }
});

server.get('/page/:num/:size/(:category)?', async (req, res) => {
    const path = './src/public/catalog.json';
    const num = +req.params.num;
    const size = +req.params.size;
    const category = +req.params.category;
    try {
        let catalog = await reader(path, options);
        if (category) {
            catalog.items = catalog.items.filter(el => +el.sticker === category);
        }
        const result = {
            numOfPages: Math.ceil(catalog.items.length / size),
            pageData: catalog.items.slice(num * size, num * size + size),
            stickerTypes: catalog.stickerTypes,
            total: catalog.items.length,
        }
        res.json(result);
    } catch (err) {
        throw err;
    }
});

server.delete('/cart/:id', async (req, res) => {
    const path = './src/public/cart.json';
    try {
        const data = await reader(path, options);
        cart.removeItem(data, +req.params.id)
            .then(async d => await writer(path, d))
            .then(d => res.json(d));
    } catch (err) {
        throw err;
    }
});

server.put('/cart/:id', async (req, res) => {
    const path = './src/public/cart.json';
    try {
        const data = await reader(path, options);
        cart.changeItemDiscrete(data, +req.params.id, req.body.value)
            .then(async d => await writer(path, d))
            .then(d => res.json(d));
    } catch (err) {
        throw err;
    }
});

server.put('/product/:id', async (req, res) => {

    const cartPath = './src/public/cart.json';
    const catalogPath = './src/public/catalog.json';
    try {
        const cartData = await reader(cartPath, options);
        const catalogData = await reader(catalogPath, options);
        cart.changeAmount(cartData, catalogData, +req.params.id, req.body.value)
        .then(async d => await writer(cartPath, d))
        .then(d => res.json(d));
    } catch (err) {
        throw err;
    }
});

server.post('/catalog/:id', async (req, res) => {
    const path = './src/public/';
    try {
        const cartData = await reader(path + 'cart.json', options);
        const catalogData = await reader(path + 'catalog.json', options);
        cart.addNewItem(cartData, catalogData, +req.params.id)
            .then(async d => await writer(path + 'cart.json', d))
            .then(d => res.json(d));
    } catch (err) {
        throw err;
    }
});


server.listen(port, () => {
    console.log(`App listening on localhost:${port}`)
});