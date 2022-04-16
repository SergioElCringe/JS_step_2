// CONTAINER
import Item from "./LIST_ITEM";
// ДЗ - 1 повторить всё
//2 - доделать корзину, кроме отправки данных о добавлении/удалении товара
//3 - просмотреть проект на наличие элементов, которые можно сделать классом и связать с АПИ
export default class List {
  constructor(api, url, type = 'catalog') {
    this.items = [];
    this.url = url;
    this.type = type;
    this.error = '';
    this.request = api;
  
    this._init();
  }

  // _init() {
  //   this._fetchData()
  //     .then(d => {
  //       this.items = d;
  //     })
  //     .catch(err => { this.error = err })
  //     .finally(() => {
  //       this._initContainers();
  //       if (!this.error) {
  //         this._render();
  //         if (this.items.length) {
  //           this._handleEvents();
  //         }
  //       }
  //     })
  // }

  async _init() {
    try {
      const data = await this.request.send(this.url, 'GET');
      this.items = data;
    }
    catch(err) {
      this.error = err;
    }
    finally {
      this._initContainers();
      if (!this.error) {
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
}

