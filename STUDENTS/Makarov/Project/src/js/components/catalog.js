require("babel-polyfill");
import List from './list.js';
export default class Catalog extends List {
    constructor(url, type, cart, requestManager) {
        super(url, type, requestManager);
        this.cart = cart;
        this.requestManager = requestManager;
    }

    async addItem(id) {
        const response = await this.requestManager.send(`/api/catalog/${id}`, 'POST', JSON.stringify({ id: id }));
        if (response) {
            const item = this.cart.items.find(el => el.id === id);
            if (item) {
                item.amount++;
                this.cart._render();
            } else {
                const newItem = this.items.find(el => el.id === id);
                newItem.amount = 1;
                this.cart.items.push(newItem);
                this.cart._render();
            }
        }
    }

    _handleEvents() {
        this.container.addEventListener('click', e => {
            if (e.target.classList.contains('button_add')) {
                const id = +e.target.dataset.id;
                this.addItem(id);
            }
        });
    }

    _initContainer() {
        this.container = document.querySelector('#catalog');
    }
}
