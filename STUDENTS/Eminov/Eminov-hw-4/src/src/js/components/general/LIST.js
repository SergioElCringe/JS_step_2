import Item from "./LIST_ITEM";

export default class List {
    constructor(url, type) {
        this.url = url;
        this.container = null;
        this.items = [];
        this.prices = [];
        this.type = type;
        this.error = '';
        this._init();
    }

    async _init() {
        try {
            this.items = await this._fetchData();
        } catch {
            this.error = err;
        } finally {
            this._initContainers();

            if (this.items.length) {
                this._render();
            };
        };
    }

    _render() {
        if (this.container) {
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

                if (this.type === 'catalog') {
                    if (item.category) {
                        accum += newItem.template;
                    };
                } else {
                    accum += newItem.template;
                };

                if (this.type === 'cart') {
                    this.prices.push({
                        id: item.id,
                        price: item.price
                    });
                };
            });

            this.container.innerHTML = accum;
        };
    }

    async _fetchData() {
        const response = await fetch(this.url)
            .then(d => d.json())
            .catch(err => err);

        return response;
    }
};