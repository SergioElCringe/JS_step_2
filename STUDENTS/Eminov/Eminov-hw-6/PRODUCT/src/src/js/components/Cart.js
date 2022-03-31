import List from "./general/LIST";
const url = '/api/cart';

export default class Cart extends List {
    constructor(type = 'cart') {
        super(url, type)
        this.action = null;
        this.toggleCart = null;
        this.open = false;
    }

    async _init() {
        try {
            const data = await this._fetchData();
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
                await this.changeItem(find.id, 'DELETE', 'deleteItem');
            } else if (action.contains('right')) {
                await this.changeItem(find.id, 'PUT', 'plus');
            } else if (action.contains('left')) {
                await this.changeItem(find.id, 'PUT', 'minus');
            };

            this._render();
        } catch (err) {
            console.warn(err);
        };
    }

    async addItem(item) {
        const { id, imgUrl, name, price, totalPrice } = item;
        const find = this.items.find(cartItem => cartItem.id === id);

        if (!find) {
            let data = null;
            const newItem = { id, imgUrl, name, price, totalPrice, amount: 1 };
            try {
                data = await fetch(this.url, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newItem)
                });

                if (!data.error) {
                    this.items.push(newItem);
                    this._render();
                };
            } catch (err) {
                console.warn(err);
            };
        };
    }

    async changeItem(id, fetchMethod, operator) {
        const find = this.items.find(cartItem => cartItem.id === id);
        const putItem = { id: id, amount: find.amount, price: find.price, operator };
        let data = null;

        try {
            data = await fetch(this.url, {
                method: fetchMethod,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(putItem)
            });

            if (!data.error) {
                switch (operator) {
                    case 'plus':
                        {
                            find.amount++;
                            find.totalPrice += (+find.price);
                            break;
                        };
                    case "minus":
                        {
                            if (find.amount > 1) {
                                find.amount--;
                                find.totalPrice = find.totalPrice - find.price;
                            };
                            break;
                        };
                    default:
                        {
                            let index = this.items.indexOf(find);
                            this.items.splice(index, 1);
                        };
                };
            };
        } catch (err) {
            console.warn(err);
        };
    }

    async _action(evt) {
        if (evt.path[1].id === 'remove' || evt.target.id === 'remove') {
            let data = null;

            data = fetch(this.url, {
                method: 'DELETE',
                headers: { "Content-Type": "application/json" }
            });

            if (!data.error) {
                this.items = [];
            };

            this._render();
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