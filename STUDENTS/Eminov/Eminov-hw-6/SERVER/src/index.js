const fs = require('fs');
const express = require('express');
const server = express();
server.listen(3000);
server.use('/', express.json());
require('./db/cart.json')

const catalogURL = './src/db/catalog.json';
const cartURL = './src/db/cart.json';
const menuURL = './src/db/menu.json';

async function readJSON(path) {
    const options = { encoding: 'utf-8' };
    let data = null;

    try {
        data = await fs.readFileSync(path, options);
        return JSON.parse(data);
    } catch (err) {
        console.log(err);
    };
};

server.get('/catalog', async (req, res) => {
    try {
        const data = await readJSON(catalogURL);
        res.json(data);
    } catch (err) {
        console.log(`Error: + ${err}`);
    };
});

server.get('/cart', async (req, res) => {
    try {
        const data = await readJSON(cartURL);
        res.json(data);
    } catch (err) {
        console.log(`Error: + ${err}`);
    };
});

server.get('/menu', async (req, res) => {
    try {
        const data = await readJSON(menuURL);
        res.json(data);
    } catch (err) {
        console.log(`Error: + ${err}`);
    };
});

server.post('/cart', async (req, res) => {
    const newItem = req.body;

    try {
        const data = await readJSON(cartURL);

        data.items.push(newItem);
        data.totalPrice += (+newItem.price);
        data.totalCounts += newItem.amount;

        await fs.writeFileSync(cartURL, JSON.stringify(data, null, ' '));
        res.json({ error: false });
    } catch (err) {
        res.json({ error: true });
        console.log(err)
    }
});

server.put('/cart/:id', async (req, res) => {
    const putItem = req.params;
    const { value, price } = req.body;

    try {
        const data = await readJSON(cartURL);
        const find = await data.items.find(item => item.id === putItem.id);

        if (value == -1 && find.amount == 1) {
            const index = data.items.indexOf(find);
            data.items.splice(index, 1);
            data.totalCounts += value;
            data.totalPrice += price;
        } else {
            find.amount += value;
            find.totalPrice += price;
            data.totalCounts += value;
            data.totalPrice += price;
        }

        await fs.writeFileSync(cartURL, JSON.stringify(data, null, ' '));
        res.json({ error: false });
    } catch (err) {
        res.json({ error: true });
        console.warn(err);
    };
})

server.delete('/cart/:id', async (req, res) => {
    const putItem = req.params;
    const { removeAll } = req.body;

    try {
        const data = await readJSON(cartURL);

        if (!removeAll) {
            const find = await data.items.find(item => item.id === putItem.id);

            const index = data.items.indexOf(find);
            data.items.splice(index, 1);

            data.totalPrice = data.totalPrice - find.totalPrice;
            data.totalCounts = data.totalCounts - find.amount;
        } else {
            data.items = [];
            data.totalPrice = 0;
            data.totalCounts = 0;
        };

        await fs.writeFileSync(cartURL, JSON.stringify(data, null, ' '));
        res.json({ error: false });
    } catch (err) {
        res.json({ error: true });
        console.warn(err);
    };
})