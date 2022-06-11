export default class RequestManager {
  constructor() {
    this.url = '';
    this.method = '';
    this.body = null;
    this.params = '';
    this.headers = { "Content-Type": "application/json" };
    this.error = false;
  };

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
      this.error = false;
      const response = await fetch(this.url, payload);
      if (!response.ok) {
        throw new Error('1')
      }
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error)
      }
      return data;
    }
    catch (err) {
      this.error = true;
      return null;
    };
  };

  // _prepareResponce(data) {
  //   return data.error ? false : data;
  // };
};

