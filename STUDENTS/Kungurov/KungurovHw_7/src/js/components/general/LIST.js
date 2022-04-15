import Item from "./LIST_ITEM";
export default class List {
    constructor(api , url, type) { 
        this.items = [];
        this.url = url;
        this.info = null;
        this.prices = [];
        this.container = [];
        this.cart = '';
        this.request = api;


        this._init();
    }
    async _init() {
        try {
          const data = await this.request.send(this.url , 'GET');
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
              }
            }
          }
    }

     _render() { 
        let result = '';
        if (this.items.lenght != 0){
        this.items.forEach(item => {
            const newItem = new Item(item, this.type)
            result += newItem.template;   
        });
      }

        this.container.innerHTML = result;
    }


};
