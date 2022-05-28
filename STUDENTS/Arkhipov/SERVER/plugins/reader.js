const fs = require('fs');

module.exports = async (path) => {
	const options = { encoding: 'utf-8' };
	let dataFromJSON = null;
	try {
		dataFromJSON = await fs.readFileSync(path, options);
		return JSON.parse(dataFromJSON);
	} catch (err) {
		throw new Error('Read Error ' + url);
	};
};