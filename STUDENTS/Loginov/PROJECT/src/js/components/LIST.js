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

