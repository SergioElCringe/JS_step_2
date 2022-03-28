const fs = require('fs');
const express = require('express');
const server = express();
server.listen(3000);
server.use('/', express.static('./public'));

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
            res.json(data);
        } catch (err) {
            console.log(`Error: + ${err}`);
        };
    });
});