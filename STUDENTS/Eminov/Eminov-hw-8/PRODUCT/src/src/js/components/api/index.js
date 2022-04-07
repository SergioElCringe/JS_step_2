export default class RequestManager {
    constructor() {
        this.url = '';
        this.method = null;
        this.headers = { 'Content-Type': 'application/json' };
        this.body = null;
        this.error = false;
    }

    async send(url, method, body) {
        this.url = url;
        this.method = method;
        this.body = JSON.stringify(body);
        return await this._sendRequest();
    }

    _prepareRequest() {
        const { method, headers, body } = this;
        return method === 'GET' ? { method, headers } : { method, headers, body };
    }

    async _sendRequest() {
        const optionsRequest = this._prepareRequest();
        try {
            const data = await fetch(this.url, optionsRequest)
                .then(d => d.json());
            const responce = this._prepareResponce(data);
            if (!responce) {
                return this.error = true;
            }
            return responce;
        } catch (err) {
            this.error = true;
            throw err;
        }
    }

    _prepareResponce(data) {
        return data.error ? false : data;
    }
}