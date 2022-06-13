const fs = require('fs');
const express = require('express');

const server = express();
server.use(express.json());

const catalogURL = './src/db/catalog.json';
const cartURL = './src/db/cart.json';



const reader = require('../plugins/reader');
const writer = require('../plugins/writer');


const cart = require('./components/cart');
const catalog = require('./components/catalog');

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
    let data = await reader(catalogURL);
    let total = data.length;
    const query = Object.keys(req.query) 
    if (query.length) {
      const params = req.query;
      if(params.filter) {
        data  = catalog.filter(data, params.filter);
        total = data.length;
      }
      
      if (params.show) {
        let { page, show } = params;
        page--;
        const firstElNum = page * +show; // 0
        const lastElNum = firstElNum + +show; // 4

        data = data.slice(firstElNum, lastElNum);
      }
    }
    res.json({data, pagination: { total } });
    console.warn(total ,isShown ) 
  } catch(err) {
    console.log('GET /catalog ERR');
  }
});

server.get('/cart', async (req, res) => {
  try {
    const data = await reader(cartURL);
    res.json(data); 
  } catch(err) {
    console.log('GET /cart ERR');
  }
});

server.get('/catalog/:id', async (req, res) => {
  const { id } = req.params
  try {
    const data = await reader(catalogURL);
    const item = catalog.findItem(data , id) || null;
    if(item) {
      res.json(item);
    }else{
      res.sendStatus(404);
    }

  } catch(err) {
    console.log('GET /catalog ERR');
  }
});

server.post('/cart', async (req, res) => {
  const newItem = req.body;
   try {
    const data = await reader(cartURL);
    const newCart = cart.add(data , newItem)
    await writer (cartURL , data)
    res.json({ error: false });
   }
   catch(err) {
    console.log('POST /cart ERR');
    res.json({ error: true });
   }
});

server.put('/cart/:id', async (req, res) => {
  const { value } = {value: 1};
  const { id } = req.body;
     try {
    const data = await reader(cartURL);
    const newCart = cart.change(data , id ,value)
    await writer (cartURL , data)
    res.json({ error: false });
   }
   catch(err) {
    console.log('PUT /cart ERR');
    res.json({ error: true });
   }
});
server.delete('/cart/:id', async (req, res) => {
  console.warn(req.body)
  const putItem = req.body
  try {
    const data = await reader(cartURL);
    const find = await data.items.find(item => item.id === putItem.id );
    const index = data.items.indexOf(find);
    data.items.splice(index , 1);
    await writer (cartURL , data)
    res.json({ error: false });
} catch (err) {
    res.json({ error: true });
};
  })


  

server.listen(3000);