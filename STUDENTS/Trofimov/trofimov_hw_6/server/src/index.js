const fs = require('fs');
const express = require('express');
const server = express();


server.listen(3000);
server.use('/', express.static('./public'));


const catalogURL = './src/db/catalog.json';
const cartURL = './src/db/cart.json';

async function readJSON(path) {
    const options = { encoding: 'utf-8' };
    let dataFromJSON = null;

    try {
        dataFromJSON = await fs.readFileSync(path, options);
        return JSON.parse(dataFromJSON);
    } catch (err) {
        console.log('Ищем ошибку');
    }
};

server.get('/catalog', async(req, res) => {
    try {
        const data = await readJSON(catalogURL);
        res.json(data);
    } catch (err) {
        console.log('GET /catalog ERR');
    }
});

server.get('/cart', async(req, res) => {
    try {
        const data = await readJSON(cartURL);
        res.json(data);
    } catch (err) {
        console.log('GET /cart ERR');
    }
});

server.post('/cart', async (req, res) => {
    const newItem = req.body;
    try {
        const data = await readJSON(cartURL);
        data.items.push(newItem);
  
        await fs.writeFileSync(cartURL, JSON.stringify(data, null, ' '));
  
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
    console.warn (req.body);
    try {
        const data = await readJSON(cartURL);
        const find = data.items.find(el => el.id === id);
        find.amount += value;
        await fs.writeFileSync(cartURL, JSON.stringify(data, null, ' '));
        res.json({ error: false });
    }
    catch(err) {
        console.log('PUT /cart ERR');
        res.json({ error: true });
    }
});

    server.delete('/cart/:id', async (req, res) => {
        const putItem = req.params
        try {
            const data = await readJSON(cartURL);
            const find = await data.items.find(item => item.id === ` ${putItem.id} `);
            const index = data.items.indexOf(find);
            data.items.splice(index, 1);
            await fs.writeFileSync(cartURL, JSON.stringify(data, null, ' '));
            res.json({ error: false });
        } catch (err) {
            res.json({ error: true });
        }
    });
  
server.listen(3000);