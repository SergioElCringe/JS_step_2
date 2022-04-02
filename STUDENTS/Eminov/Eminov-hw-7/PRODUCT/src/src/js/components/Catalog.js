import Categories from "./Categories";
import Item from "./general/LIST_ITEM";

export default class Catalog extends Categories {
    constructor(cart, api) {
        super(cart, api);
    }

    _initContainers() {
        this.container = document.querySelector('#catalog');

        if (this.container) {
            this.container.addEventListener('click', this._handleEventsAdd.bind(this));
        };
    }

    _render() {
        if (this.container) {
            let accum = '';

            this.items.forEach(item => {
                const newItem = new Item(item, this.type = 'catalog');

                if (item.category) {
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
};