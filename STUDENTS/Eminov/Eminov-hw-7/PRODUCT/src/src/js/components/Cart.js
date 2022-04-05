import List from "./general/LIST";
const url = '/api/cart';

export default class Cart extends List {
    constructor(api, type = 'cart') {
        super(url, api, type)
        this.action = null;
        this.toggleCart = null;
        this.open = false;
    }

    async _init() {
        try {
            const data = await this.request.send(this.url, 'GET');
            this.items = data.items;
        } catch {
            this.error = err;
        } finally {
            this._initContainers();

            if (this.items.length) {
                this._render();
            };
        };
    }

    _initContainers() {
        this.container = document.querySelector('#cart-items');

        if (this.container) {
            this.container.addEventListener('click', this._handleEvents.bind(this));
            this.action = document.querySelector('.action');
            this.action.addEventListener('click', this._action.bind(this));
            this.toggleCart = document.querySelector('#cart').addEventListener('click', this._toggleEvents.bind(this));
        };
    }

    _toggleEvents(evt) {
        this.open = !this.open;
        const cart = document.querySelector('.cart__content');

        if (evt.target.parentNode.id === 'cart' || evt.target.parentNode.parentNode.id === 'cart') {
            if (!this.open) {
                cart.classList.add('d-block');
            } else {
                cart.classList.remove('d-block');
            };
        };
    }

    async _handleEvents(evt) {
        const action = evt.target.classList;
        const find = this.items.find(cartItem => cartItem.id === evt.path[1].dataset.id);

        try {
            if (action.contains('item-delete')) {
                await this.deleteItem(find.id);
            } else if (action.contains('right')) {
                await this.putItem(find.id, 'plus');
            } else if (action.contains('left')) {
                await this.putItem(find.id, 'minus');
            };

            this._render();
        } catch (err) {
            console.warn(err);
        };
    }

    async addItem(item) {
        const { id, imgUrl, name, price, totalPrice, amount } = item;
        const find = this.items.find(cartItem => cartItem.id === id);

        if (!find) {
            const newItem = { id, imgUrl, name, price, totalPrice, amount };
            try {
                const data = await this.request.send(this.url, 'POST', newItem);
                if (!data.error) {
                    this.items.push(newItem);
                    this._render();
                };
            } catch (err) {
                console.warn(err);
            };
        };
    }

    async putItem(id, operator) {
        const find = this.items.find(cartItem => cartItem.id === id);
        const changeableItem = { id: id, amount: find.amount, price: find.price, operator };

        try {
            const data = await this.request.send(this.url, 'PUT', changeableItem);

            if (!data.error) {
                if (operator === 'plus') {
                    find.amount++;
                    find.totalPrice += (+find.price);
                } else {
                    if (find.amount > 1) {
                        find.amount--;
                        find.totalPrice = find.totalPrice - find.price;
                    };
                };
            };
        } catch (err) {
            console.warn(err);
        };
    }

    async deleteItem(id) {
        const find = this.items.find(cartItem => cartItem.id === id);
        const changeableItem = { id: id, amount: find.amount, price: find.price, operator: 'deleteItem' };

        try {
            const data = await this.request.send(this.url, 'DELETE', changeableItem);

            if (!data.error) {
                let index = this.items.indexOf(find);
                this.items.splice(index, 1);
            };
        } catch (err) {
            console.warn(err);
        };
    }

    async _action(evt) {
        if (evt.path[1].id === 'remove' || evt.target.id === 'remove') {
            try {
                const data = this.request.send(this.url, 'DELETE');

                if (!data.error) {
                    this.items = [];
                };

                this._render();
            } catch (err) {
                console.warn(err);
            };
        }
    }

    countPrice() {
        let totalPrice;

        totalPrice = this.items.reduce((acc, item) => {
            acc += (+item.totalPrice);
            return acc;
        }, 0);

        document.querySelectorAll('.cart-prices').forEach(item => item.innerHTML = `($${totalPrice})`);
    }

    countAmount() {
        let totalCount;

        totalCount = this.items.reduce((acc, item) => {
            acc += item.amount;
            return acc;
        }, 0);

        document.querySelectorAll('.cart-counter').forEach(item => item.innerHTML = `(${totalCount})`);
    }
};