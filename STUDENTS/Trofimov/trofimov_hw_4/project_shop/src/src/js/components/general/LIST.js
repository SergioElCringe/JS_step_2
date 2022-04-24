// CONTAINER
import Item from "./LIST_ITEM";

export default class List {
    constructor(url, type) { 
        this.items = [];
        this.url = url;
        this.info = null;
        this.prices = [];
        this._init();
        this.container = [];
        this.cart = '';
    }

    async _init() {
        try {
            this.items = await this._fetchData();
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
        this.items.forEach(item => {
            const newItem = new Item(item, this.type)
            result += newItem.template;
        });

        this.container.innerHTML = result;
    }

    _fetchData() {
        return fetch(this.url)
            .then(d => d.json())
            .catch(e => { throw e })
    }
}

