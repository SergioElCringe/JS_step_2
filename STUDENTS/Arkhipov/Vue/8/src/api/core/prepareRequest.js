export default pl => {
	const { method = 'GET', url, parametres = {} } = pl;
	const base = { method, url };

	switch (method) {
		case 'POST': {
			const { data = {}, params = {} } = parametres;
			base.data = data;
			base.params = params;
			break;
		}
		default: {
			//GET
			base.params = parametres;
		}
	}

	return base;
}