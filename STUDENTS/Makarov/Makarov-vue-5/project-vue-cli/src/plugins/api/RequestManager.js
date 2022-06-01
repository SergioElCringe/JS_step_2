// require("babel-polyfill");
export default class RequestManager {
    constructor() {
        this.method = '';
        this.path = '';
        this.headers = { 'Content-Type': 'application/json' };
        this.options = null;
        this.error = false;
    }

    async send(path, method, body) {
        this.path = path;
        this.method = method;
        this._prepareOptions(body);
        return await fetch(this.path, this.options).then(d => d.json()).catch(err => { throw err });
    }    

    _prepareOptions(body) {
        switch (this.method) {
            case 'GET':
                this.options = {
                    method: 'GET',
                    headers: this.headers
                };
                break;
            case 'DELETE':
                this.options = { method: 'DELETE' };
                break;
            case 'PUT':
                this.options = {
                    method: 'PUT',
                    body: body,
                    headers: this.headers
                };
                break;
            case 'POST':
                this.options = {
                    method: 'POST',
                    body: body,
                    headers: this.headers
                }
                break;
        }
    }
}
