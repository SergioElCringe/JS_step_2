import Item from "./LIST_ITEM";

export default class List {
    constructor(url, type = 'catalog') {
        this.container = null;
        this.url = url;
        this.items = [];
        this.prices = [];
        this.type = type;
        this.error = '';
        this._init();
    }

    async _init() {
        try {
            this.items = await this._fetchData();
            this.prices = await this._fetchPrice();   
        }
        catch {
            this.error = err;
        }
        finally {
            this._initContainers();
            
            if (this.items.length) {
                this._render();
            };
        };
    }

    _render() {
        let accum = '';

        if (this.type === 'cart') {
            this.countPrice();
            this.countAmount();

            if (!(this.items.length > 0)) {
                accum = `<hr><p class="no-bascket"><b>There are no products. Select products to purchase from catalog.</b></p>`;
            };
        };

        this.items.forEach(item => {
            const newItem = new Item(item, this.type);
            accum += newItem.template;
        });

        this.container.innerHTML = accum;
    }

    async _fetchData() {
        const response = await fetch(this.url)
        .then(d => d.json())
        .catch(err => err);

        return response;
    }

    async _fetchPrice() {
        const response = await fetch('https://raw.githubusercontent.com/schultznoan/FTP/main/fetchData/prices.json')
        .then(d => d.json())
        .catch(e => { throw e });

        return response;
    }
}; 