import Item from "./LIST_ITEM";

export default class List {
    constructor(url, type = 'catalog') {
        this.container = null;
        this.url = url;
        this.items = [];
        this.type = type;
        this._init();
    }

    _init() {
        this._fetchData(function(data) {
            this._initContainers();
            this.items = data;
            this._render();
        }.bind(this));
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

    _fetchData(callback) {
        let data = [];

        if (this.url) {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', this.url, true);
            xhr.send();

            xhr.onreadystatechange = function() {
                if (xhr.readyState != 4) {
                    return;
                }
                data = JSON.parse(xhr.responseText);
                callback(data)
            };
        };
    }
};