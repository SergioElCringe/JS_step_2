const fs = require('fs');
const express = require('express');

const server = express();
server.use(express.json());


const catalogURL = './src/db/catalog.json';
const cartURL = './src/db/cart.json';
const menuURL = './src/db/menu.json';

async function readJSON(path) {
  const options = { encoding: 'utf-8' };
  let dataFromJSON = null;
  try {
    dataFromJSON = await fs.readFileSync(path, options);
    return JSON.parse(dataFromJSON);
  } catch(err) {
    console.log('Read error');
  }
}

server.get('/catalog', async (req, res) => {
  try {
    const data = await readJSON(catalogURL);
    res.json(data); 
  } catch(err) {
    console.log('GET /catalog ERR');
  }
});

server.get('/cart', async (req, res) => {
  try {
    const data = await readJSON(cartURL);
    res.json(data); 
  } catch(err) {
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

server.delete('/cart', async (req, res) => {
  const { id } = req.params;
   try {
    const data = await readJSON(cartURL);
    const find = await data.items.find(el => el.id === id);

    const index = data.items.indexOf(find);
    data.items.splice(index, 1);

    await fs.writeFileSync(cartURL, JSON.stringify(data, null, ' '));

    res.json({ error: false });
   }
   catch(err) {
    console.log('DELETE /cart ERR');
    res.json({ error: true });
   }
});


// server.post('/cart', async (req, res) => {
//   console.log(req.body);
//   // const newItem = req.body;
//   // try {
//   //   const data = await readJSON(cartURL);
//   //   data.items.push(newItem);

//   //   await fs.wtireFileSync(cartURL, JSON.stringify(data, null, ' '));
//   //   res.json({ error: false});
//   // }
//   // catch (err) {
//   //   console.log('POST /cart ERR');
//   //   res.json({ error: true});
//   // }
// });

// server.get('/menu', async (req, res) => {
//   try {
//     const data = await readJSON(menuURL);
//     res.json(data); 
//   } catch(err) {
//     console.log('GET /menu ERR');
//   }
// });

server.listen(3000);
