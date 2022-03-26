import Item from "./general/LIST_ITEM";

export default class Description {
    constructor(cart, type = 'description') {
        this.container = null;
        this.items = [];
        this.type = type;
        this.cart = cart;
        this._init();
    }

    _init() {
        this.container = document.querySelector('#des-prod');

        if (this.container) {
            this.items.push(JSON.parse(localStorage.product));
        };

        this._render();
    }

    _render() {
        if (this.container) {
            let accum = '';

            this.items.forEach(item => {
                const newItem = new Item(item, this.type);
                accum += newItem.template;
            })
    
            this.container.innerHTML = accum;
        };
    }
}