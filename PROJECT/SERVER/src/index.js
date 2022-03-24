const fs = require('fs');
const express = require('express');

const server = express();
server.use(express.json());


const catalogURL = './src/db/catalog.json';

async function readJSON(path) {
  const options = { encoding: 'utf-8' };
  let dataFromJSON = null;
  try {
    dataFromJSON = await fs.readFileSync(path, options);
    return JSON.parse(dataFromJSON);
  } catch(err) {
    console.log('Read error');
  }
  // fs.readFile(path, format, (err, data) => {
  //   if (!err) {
  //     dataFromJSON = data;
  //   }
  // });
  // return dataFromJSON;
}

server.get('/catalog', async (req, res) => {
  // console.log(await readJSON(catalogURL));
  try {
    const data = await readJSON(catalogURL);
    res.json(data); 
  } catch(err) {
    console.log('GET /catalog ERR');
  }
});
//ДЗ
// СДЕЛАТЬ get-запросы корзины, меню и что там еще захотите по образцу

// Отдаем собранный фронт как статику
// server.use('/', express.static('./public'));

// server.get('/', (req, res) => {
//   res.send('<h1>Hello front</h1>');
// });

// server.get('/:name', (req, res) => {
//   const name = req.params.name.toUpperCase();
//   res.send(`<h1>Hello ${ name }</h1>`);
// });

server.listen(3000);

// READ FROM FILE
// fs.readFile('./src/db/catalog.json', 'utf-8', (err, data) => {
//   if (!err) {
//     console.log(data);
//   } else {
//     console.log('Error');
//   }
// });


// WRITE TO FILE
// const newData = {
//   a: 2,
//   lol: false
// };

// function addData(val) {
//   const fileUrl = './src/db/catalog.json';
//   const format = 'utf-8';

//   let dataFromFile = null;

//   fs.readFile(fileUrl, format, (err, data) => {
//     if (!err) {
//       dataFromFile = JSON.parse(data);
//       dataFromFile.push(val);
//       fs.writeFile(fileUrl, JSON.stringify(dataFromFile, null, ' '), err => {
//         if (!err) {
//           console.log('Data written');
//         } else {
//           console.log('Data write error');
//         }
//       });
//     } else {
//       console.log('Data read error');
//     }
//   });
// }

// addData(newData);