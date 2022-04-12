const fs = require('fs');
const express = require('express');

const port = 3000;
const server = express();

server.use(express.json());

// catalog and cart data is available in lists.json
// nav-menu data is available in menu.json

server.get('/:comp', (req, res) => {
    const path = `./src/public/${req.params.comp}.json`;
    const options = { encoding: 'utf-8' };
    try {
        res.json(readData(path, options));
    } catch (err) {
        throw err;
    }
});

server.listen(port, () => {
    console.log(`App listening on localhost:${port}`)
});

function readData(path, options) {
    let data = null;
    try {
        data = fs.readFileSync(path, options);
        return JSON.parse(data);
    } catch (err) {
        throw err;
    }
}