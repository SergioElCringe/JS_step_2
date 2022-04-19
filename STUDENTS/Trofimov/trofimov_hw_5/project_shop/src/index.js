const fs = require('fs');
const express = require('express');
const server = express();


server.listen(3000);
server.use('/', express.static('./public'));


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

server.get('/catalog', async(req, res) => {
    try {
        const data = await readJSON(catalogURL);
        res.json(data);
    } catch (err) {
        console.log(`У вас - ошибка в каталоге!`);
    };
});

server.get('/cart', async(req, res) => {
    try {
        const data = await readJSON(cartURL);
        res.json(data);
    } catch (err) {
        console.log(`У вас - ошибка в корзине!`);
    };
});

server.get('/menu', async(req, res) => {
    try {
        const data = await readJSON(menuURL);
        res.json(data);
    } catch (err) {
        console.log('У вас - ошбика в меню!');
    };
});