const fs = require('fs');
const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');

const server = express(); // Не забудь скобочки

server.use(express.json()); // Не забудь скобочки

server.use('/', express.static('./public')); // Точку не забудь 


const catalogURl = './src/db/catalog.json';
const cartUrl = './src/db/cart.json';
const menuUrl = './src/db/menu.json';

// Json Reading

async function readJson(path) {
    const options = { encoding: 'utf-8' };
    let dataFromJSON = null;
    try {
        dataFromJSON = await fs.readFileSync(path, options);
        return JSON.parse(dataFromJSON);
    } catch (err) {
        console.log('Read error');
    }
}

// Get requests

server.get('/catalog', async (req, res) => {
    try {
        const data = await readJson(catalogURl);
        res.json(data);
    } catch (err) {
        console.log('GET /catalog ERR')
    }
});

server.get('/cart', async (req, res) => {
    try {
        const data = await readJson(cartUrl);
        res.json(data);
    } catch (err) {
        console.log('GET /cart ERR')
    }
});

server.get('/menu', async (req, res) => {
    try {
        const data = await readJson(menuUrl);
        res.json(data);
    } catch (err) {
        console.log('GET /menu ERR')
    }
});

// Post request for Cart

server.post('/cart', async (req, res) => {
    const newItem = req.body;
    try {
        const data = await readJson(cartUrl);
        data.items.push(newItem);
        data.total = countTotal(data);
        fs.writeFileSync(cartUrl, JSON.stringify(data, null, ' '));
        res.json({ error: false });
    }
    catch (err) {
        console.log('POST /cart ERR');
        res.json({ error: true });
    }
});

// Put request for Cart

server.put('/cart/:id', async (req, res) => {
    const { value } = req.body;
    const { id } = req.params;
    try {
        const data = await readJson(cartUrl);
        const find = data.items.find(el => el.id === id);
        find.amount += value;
        data.total = countTotal(data);
        fs.writeFileSync(cartUrl, JSON.stringify(data, null, ' '));
        res.json({ error: false })
    }
    catch (err) {
        console.log('PUT /cart ERR');
        res.json({ error: true });
    }
});

// Delete reqest for Cart

server.delete('/cart/:id', async (req, res) => {
    const { id } = req.params;
    try {
        let data = await readJson(cartUrl);
        const newList = data.items.filter(el => el.id !== id);
        data.items = newList;
        data.total = countTotal(data);
        fs.writeFileSync(cartUrl, JSON.stringify(data, null, ' '));
        res.json({ error: false })
    }
    catch (err) {
        console.log('DELETE /cart ERR');
        res.json({ error: true });
    }
});

// All items price count
function countTotal(data) {
    let totalPrice = 0;
    data.items.forEach(element => {
        const PriceOfItem = element.amount * Number(element.price);
        totalPrice += PriceOfItem;
    });
    return totalPrice;
};


console.log('Server has started seccessfully');

// 3 - придумать что делать с подсчетом общей стоимости и количкства товаров в карзине (бэк и фронт)

server.listen(3000);
