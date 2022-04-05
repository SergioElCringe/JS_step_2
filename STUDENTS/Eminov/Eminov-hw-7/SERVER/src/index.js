const ReadJSON = require('./components/ReadJSON');
const fs = require('fs');
const express = require('express');
const pathFiles = require('./components/additionaly/path');
const cart = require('./components/сart');
const contact = require('./components/contact');

const readJSON = new ReadJSON();
const server = express();

server.use(express.json());

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
    const changeableItem = req.body;
    try {
        const data = await readJSON.read(cart.path);
        cart.changeItem(data, changeableItem)
        res.json({ error: false });
    } catch (err) {
        res.json({ error: true });
        console.warn(err);
    };
});

server.post('/cart', async(req, res) => {
    const changeableItem = req.body;
    try {
        const data = await readJSON.read(cart.path);
        cart.addItem(data, changeableItem);
        res.json({ error: false });
    } catch (err) {
        res.json({ error: true });
        console.log(err)
    }
});

server.delete('/cart', async(req, res) => {
    const changeableItem = req.body;
    try {
        const data = await readJSON.read(cart.path);
        cart.deleteItem(data, changeableItem);
        res.json({ error: false });
    } catch (err) {
        res.json({ error: true });
        console.warn(err);
    };
});

server.post('/contact', async(req, res) => {
    const form = req.body;
    try {
        const data = await readJSON.read(contact.path);
        contact.addItem(data, form);
        res.json({ error: false });
    } catch (err) {
        res.json({ error: true });
        console.warn(err);
    };
});

server.listen(3000);