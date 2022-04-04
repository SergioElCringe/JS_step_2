const ReadJSON = require('./components/ReadJSON');
const fs = require('fs');
const express = require('express');
const pathFiles = require('./components/additionaly/path');

const readJSON = new ReadJSON();
const server = express();

server.listen(3000);
server.use('/', express.json());

pathFiles.forEach(item => {
    server.get(item.name, async(req, res) => {
        try {
            const data = await readJSON.read(item.path);
            res.json(data);
        } catch (err) {
            console.log(`Error: + ${err}`);
        };
    });
});

server.put('/cart', async(req, res) => {
    const putItem = req.body;
    const operator = putItem.operator;
    try {
        const data = await readJSON.read('./src/db/cart.json');
        const find = await data.items.find(cartItem => cartItem.id === putItem.id);

        if (operator === 'plus') {
            find.amount++;
            data.totalCounts++;
            find.totalPrice += putItem.price;
            data.totalPrice += (+putItem.price);

        } else {
            if (find.amount > 1) {
                find.amount--;
                data.totalCounts--;
                find.totalPrice = find.totalPrice - putItem.price;
                data.totalPrice = data.totalPrice - putItem.price;
            };
        };

        await fs.writeFileSync('./src/db/cart.json', JSON.stringify(data, null, ' '));
        res.json({ error: false });
    } catch (err) {
        res.json({ error: true });
        console.warn(err);
    };
});

server.post('/cart', async(req, res) => {
    const newItem = req.body;
    try {
        const data = await readJSON.read('./src/db/cart.json');
        data.items.push(newItem);
        data.totalPrice += (+newItem.price);
        data.totalCounts += newItem.amount;
        await fs.writeFileSync('./src/db/cart.json', JSON.stringify(data, null, ' '));
        res.json({ error: false });
    } catch (err) {
        res.json({ error: true });
        console.log(err)
    }
});

server.delete('/cart', async(req, res) => {
    const deleteItem = req.body;
    const operator = req.body.operator;

    try {
        const data = await readJSON.read('./src/db/cart.json');

        if (operator === 'deleteItem') {
            const find = await data.items.find(cartItem => cartItem.id === deleteItem.id);

            let index = data.items.indexOf(find);
            data.items.splice(index, 1);
            data.totalPrice = data.totalPrice - find.totalPrice;
            data.totalCounts = data.totalCounts - find.amount;
        } else {
            data.items = [];
            data.totalPrice = 0;
            data.totalCounts = 0;
        };

        await fs.writeFileSync('./src/db/cart.json', JSON.stringify(data, null, ' '));
        res.json({ error: false });
    } catch (err) {
        res.json({ error: true });
        console.warn(err);
    };
});

server.post('/contact', async(req, res) => {
    const form = req.body;

    try {
        const data = await readJSON.read('./src/db/contact.json');
        data.push(form);

        await fs.writeFileSync('./src/db/contact.json', JSON.stringify(data, null, ' '));
        res.json({ error: false });
    } catch (err) {
        res.json({ error: true });
        console.warn(err);
    };
})