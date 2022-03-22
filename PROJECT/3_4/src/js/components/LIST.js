// CONTAINER
import Item from "./LIST_ITEM";

export default class List {
  constructor(url, type = 'catalog') {
    this.items = [];
    this.url = url;
    this.type = type;
    this.error = '';
  
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
      this.items = await this._fetchData();

      // console.log(await Promise.all([await this._fetchData(), await this._fetchData()]))
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

  _fetchData() {
    return fetch(this.url)
            .then(d => d.json()) // return [{}, {}, {}...]
            .catch(e => { throw e })
    // return new Promise((res, rej) => {
    //   const xhr = new XMLHttpRequest();
    //   xhr.open('GET', this.url, true);
    //   xhr.send();

    //   xhr.onreadystatechange = function() {
    //     let data = null;
    //     if (xhr.readyState != 4) { // 4 - все хорошо
    //       if (xhr.status !== 200) {
    //         rej('ERROR');
    //       } else {
    //         data = JSON.parse(xhr.responseText);
    //         res(data);
    //       } 
    //     }
    //   }
    // });
  }
}

