const fs = require('fs');
const express = require('express');
const server = express();
server.listen(3000);
server.use('/', express.json());

const pathFiles = [{
        name: '/catalog',
        path: './src/db/catalog.json'
    },
    {
        name: '/menu',
        path: './src/db/menu.json'
    },
    {
        name: '/cart',
        path: './src/db/cart.json'
    },
    {
        name: '/description',
        path: './src/db/descriptionCatalog.json'
    }
];

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

pathFiles.forEach(item => {
    server.get(item.name, async(req, res) => {
        try {
            const data = await readJSON(item.path);
            console.log(data)
            res.json(data);
        } catch (err) {
            console.log(`Error: + ${err}`);
        };
    });
});

server.post('/cart', async(req, res) => {
    const newItem = req.body;
    console.log(newItem)
    try {
        const data = await readJSON('./src/db/cart.json');
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

server.put('/cart', async(req, res) => {
    const putItem = req.body;
    const operator = putItem.operator;
    try {
        const data = await readJSON('./src/db/cart.json');
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

server.delete('/cart', async(req, res) => {
    const deleteItem = req.body;
    const operator = req.body.operator;

    try {
        const data = await readJSON('./src/db/cart.json');

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
    console.log(form)

    try {
        const data = await readJSON('./src/db/contact.json');
        console.log(data)
        data.push(form);

        await fs.writeFileSync('./src/db/contact.json', JSON.stringify(data, null, ' '));
        res.json({ error: false });
    } catch (err) {
        res.json({ error: true });
        console.warn(err);
    };
})