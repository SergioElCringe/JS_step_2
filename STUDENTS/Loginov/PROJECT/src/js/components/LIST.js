<<<<<<< HEAD
import Item from "./LIST_ITEM";

export default class List {

  constructor(url, type = 'catalog') {
    this.items = [];
    this.url = url;
    this.type = type;
    this._init();
  }

  async _init() {
    try {
      this.items = await this._fetchData();
    } 
    catch {
      this.error = err;
    }
    finally {
      this._initContainers();
      
      if(!this.error) {
        this._render();
        if (this.items.length) {
          this._handleEvents();
        }
      }
    }
  }

  _render() {
    let result = '';

    this.items.forEach(item => {
      const newItem = new Item(item, this.type);
      result += newItem.template;
    });

    this.container.innerHTML = result;
  }

  async _fetchData() {
    return await fetch(this.url)
            .then(d => d.json())
            .catch(e => {throw e})
  }
}
||||||| bfcf728
=======
import Item from "./LIST_ITEM";

export default class List {

  constructor(url, type = 'catalog') {
    this.items = [];
    this.url = url;
    this.type = type;
    this._init();
  }

  _init() {
    this.items = this._fetchData(function(data) {
      this._initContainers();
      this.items = data;
      this._render();
      this._handleEvents();
    }.bind(this));

  }

  _render() {
    let result = '';

    this.items.forEach(item => {
      const newItem = new Item(item, this.type);
      result += newItem.template;
    });

    this.container.innerHTML = result;
  }

  _fetchData(callback) {
    let data = [];

    if (this.url) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', this.url, true);
      xhr.send();

      xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) {
          return;
        };

        data = JSON.parse(xhr.responseText);
        callback(data);
      };
    };
  }
}

>>>>>>> dc1550f6f6c9e829ee8bd2fc600b2e8a3a7e9097
