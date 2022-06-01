const fs = require('fs');

module.exports = async (url, data) => {
	try {
		await fs.writeFileSync(url, JSON.stringify(data, null, ' '));
		return true
	}
	catch {
		throw new Error('Write Error ' + url);
	}
};