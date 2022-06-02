const fs = require('fs');
const express = require('express');
const server = express();

server.use(express.json());

const catalogURL = './src/db/catalog.json';
const cartURL = './src/db/cart.json';
const menuURL = './src/db/menu.json';

const reader = require('../plugins/reader');
const writer = require('../plugins/writer');

const cart = require('./components/cart');
const catalog = require('./components/catalog');

server.get('/menu', async (req, res) => {
	try {
		const data = await reader(menuURL);
		res.json(data);
	} catch (err) {
		console.log(`ERROR: + ${err}`);
	};
});

server.get('/catalog', async (req, res) => {
	try {
		let data = await reader(catalogURL);
		let total = data.length;
		const query = Object.keys(req.query);
		if (query.length) {
			const params = req.query;
			if (params.filter) {
				data = catalog.filter(data, params.filter);
				total = data.length;
			}
			if (params.show) {
				let { page, show } = params;
				page--;
				const firstElNum = page * +show;
				const lastElNum = firstElNum + +show;
				data = data.slice(firstElNum, lastElNum);
			}
		}
		res.json({
			data,
			pagination: { total }
		});
	} catch (err) {
		console.log('GET /catalog ERROR');
	}
});

server.get('/catalog/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const data = await reader(catalogURL);
		const item = catalog.findItem(data, id) || null;
		if (item) {
			res.json(item);
		} else {
			res.sendStatus(404);
		}

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
		const data = await reader(cartURL);
		data.items.push(newItem);
		const newCart = cart.add(data, newItem);
		await writer(cartURL, newCart);
		res.json({ error: false });
	}
	catch (err) {
		console.log('POST /Cart ERROR');
		res.json({ error: true });
	}
	updateTotal();
});

server.put('/cart/:id', async (req, res) => {
	const { amount } = req.body;
	const { id } = req.params;
	try {
		const data = await reader(cartURL);
		const newCart = cart.change(data, id, amount);
		await fs.writeFileSync(cartURL, JSON.stringify(newCart, null, ' '));
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
		const data = await reader(cartURL);
		const newCart = cart.remove(data, id);
		await fs.writeFileSync(cartURL, JSON.stringify(newCart, null, ' '));
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
