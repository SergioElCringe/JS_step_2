const fs = require('fs');
const express = require('express');
const { json } = require('express/lib/response');

const port = 3000;
const server = express();

server.use(express.json());

// catalog and cart data is available in lists.json
// nav-menu data is available in menu.json


server.get('/:comp', async (req, res) => {
    const path = `./src/public/${req.params.comp}.json`;
    const options = { encoding: 'utf-8' };
    try {
        res.json(await readData(path, options));
    } catch (err) {
        throw err;
    }
});

server.delete('/cart/:id', async (req, res) => {
    const path = './src/public/lists.json';
    const options = { encoding: 'utf-8' };
    try {
        const lists = await readData(path, options);
        lists.cart.items = lists.cart.items.filter(el => el.id != req.params.id);
        const letter = JSON.stringify(lists);
        await writeData(path, letter).then(d => res.json(d));
    } catch (err) {
        throw err;
    }
});

server.put('/cart/:id', async (req, res) => {
    const path = './src/public/lists.json';
    const options = { encoding: 'utf-8' };
    const value = req.body.value;
    try {
        const lists = await readData(path, options);
        const item = lists.cart.items.find(el => el.id === +req.params.id);
        if (item) {
            item.amount += value;
            const letter = JSON.stringify(lists);
            await writeData(path, letter).then(d => res.json(d));
        }
    } catch (err) {
        throw err;
    }
});

server.post('/catalog/:id', async (req, res) => {
    const path = './src/public/lists.json';
    const options = { encoding: 'utf-8' };
    const id = +req.params.id;
    try {
        const lists = await readData(path, options);
        const item = lists.catalog.items.find(el => el.id === id);
        if(item) {
            item.amount = 1;
            if (!lists.cart.items.find(el => el.id === id)) {
                lists.cart.items.push(item);
                const letter = JSON.stringify(lists);
                await writeData(path, letter).then(d => res.json(d));
            } else {
                lists.cart.items.find(el => el.id === id).amount++;
                const letter = JSON.stringify(lists);
                await writeData(path, letter).then(d => res.json(d));
            }
        }
    } catch (err) {
        throw err;
    }
});


server.listen(port, () => {
    console.log(`App listening on localhost:${port}`)
});

async function readData(path, options) {
    let data = null;
    try {
        data = fs.readFileSync(path, options);
        return JSON.parse(data);
    } catch (err) {
        throw err;
    }
}

async function writeData(path, data) {
    try {
        fs.writeFileSync(path, data);
        return true;
    } catch (err) {
        throw err;
    }
}