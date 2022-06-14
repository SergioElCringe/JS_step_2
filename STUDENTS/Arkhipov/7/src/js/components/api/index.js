export default class RequestManager {
	constructor() {
		this.url = '';
		this.method = '';
		this.body = null;
		this.params = '';
		this.headers = { 'Content-Type': 'application/json' };

		this.error = false;
	}

	async send(url, method, body, params) {
		this.url = url;
		this.method = method;
		this.body = JSON.stringify(body || {});
		this.params = params || '';
		return await this._sendRequest();
	}

	_prepareRequest() {
		const { method, headers, body } = this;
		if (this.params) {
			this.url += `/${this.params}`;
		}
		return this.method !== 'GET' ? { method, headers, body } : { method, headers };
	}

	async _sendRequest() {
		const payload = this._prepareRequest();
		try {
			const data = await fetch(this.url, payload).then(d => d.json());
			this._prepareResponce(data);
			if (!data) {
				this.error = true;
			}
			return this.error ? false : data;
		}
		catch (err) {
			this.error = true;
			throw err;
		}
	}

	_prepareResponce(data) {
		return data.error ? false : data;
	}
}