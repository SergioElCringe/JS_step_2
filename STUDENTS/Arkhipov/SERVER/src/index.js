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
  } 
  catch (err) {
		console.log(`ERROR: + ${err}`);
	};
});

server.get('/menu', async (req, res) => {
	try {
		const data = await readJSON(menuURL);
		res.json(data);
	} catch (err) {
		console.log(`ERROR: + ${err}`);
	};
});

server.get('/catalog', async (req, res) => {
	try {
		const data = await reader(catalogURL);
		res.json(data);
	} catch (err) {
		console.log('GET /catalog ERROR');
	}
});

server.get('/cart', async (req, res) => {
	try {
		const data = await reader(cartURL);
		res.json(data);
	} catch (err) {
		console.log(`ERROR: + ${err}`);
	};
});

server.post('/cart', async (req, res) => {
	const newItem = req.body;
	try {
		const data = await readJSON(cartURL);
		data.items.push(newItem);
		data.total = 2;
		await fs.writeFileSync(cartURL, JSON.stringify(data, null, ' '));
		res.json({ error: false });
	}
	catch (err) {
		console.log('POST /Cart ERROR');
		res.json({ error: true });
	}
	updateTotal();
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
	catch (err) {
		console.log('PUT /Cart ERROR');
		res.json({ error: true });
	}
	updateTotal();
});

server.delete('/cart/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const data = await readJSON(cartURL);
		const newList = data.items.filter(el => el.id !== id);
		data.items = newList;
		await fs.writeFileSync(cartURL, JSON.stringify(data, null, ' '));
});
		res.json({ error: false });
	}
	catch (err) {
		console.log('DELETE /cart ERR');
		res.json({ error: true });
	}
	updateTotal();
});

function updateTotal() {
	const fileUrl = './src/db/cart.json';
	const format = 'utf-8';
	let dataFromFile = null;
	fs.readFile(fileUrl, format, (err, data) => {
		if (!err) {
			dataFromFile = JSON.parse(data);
			let summ = null;
			dataFromFile.total = null;
			dataFromFile.items.forEach(el => {
				summ += el.amount * +el.price;
			})
			dataFromFile.total = summ;
			fs.writeFile(fileUrl, JSON.stringify(dataFromFile, null, ' '), err => {
				if (err) {
					console.log('ERROR Total summ');
				}
			})
		}
	}
	)
}

server.listen(3000);
