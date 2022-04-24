import List from './list.js';
export default class Catalog extends List {
    constructor(url, type, cart) {
        super(url, type);
        this.cart = cart;
    }

    async addItem(id) {
        const options = {
            method: 'POST',
            body: JSON.stringify({ id: id }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const path = `/api/catalog/${id}`;
        const response = await fetch(path, options).then(d => d.json()).catch(err => { throw err });
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
