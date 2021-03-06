import List from "./general/LIST";
const url = '/api/cart';

export default class Cart extends List {
    constructor(type = 'cart') {
        super(url, type);
        this.removeAllItems = null;
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
            this.removeAllItems = document.querySelector('.action');
            this.removeAllItems.addEventListener('click', this._removeAllItems.bind(this));
            this.toggleCart = document.querySelector('#cart');
            this.toggleCart.addEventListener('click', this._toggleEvents.bind(this));
        };
    }

    _toggleEvents() {
        this.open = !this.open;
        const cart = document.querySelector('.cart__content');

        if (!this.open) {
            cart.classList.add('d-block');
        } else {
            cart.classList.remove('d-block');
        };
    }

    async _handleEvents(evt) {
        const { id } = evt.target.dataset;
        const find = this.items.find(item => item.id === id);
        const action = evt.target.id;

        try {
            switch (action) {
                case 'item-plus':
                    {
                        await this.changeItem(find.id, 1, find.price);
                        break;
                    };
                case 'item-minus':
                    {
                        await this.changeItem(find.id, -1, -find.price);
                        break;
                    };
                case 'item-delete':
                    {
                        await this.deleteItem(find.id);
                        break;
                    };
                default:
                    {
                        console.log('No method found!');
                    };
            };

            this._render();
        } catch (err) {
            console.warn(err);
        };
    }

    async addItem(item) {
        const { id, imgUrl, name, price, totalPrice } = item;
        const find = this.items.find(item => item.id === id);

        if (!find) {
            const newItem = { id, imgUrl, name, price, totalPrice, amount: 1 };
            try {
                const data = await fetch(this.url, {
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

    async changeItem(id, value, price) {
        const find = this.items.find(item => item.id === id);

        try {
            const data = await fetch(this.url + `/${find.id}`, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ value, price })
            });

            if (!data.error) {
                if (value == -1 && find.amount == 1) {
                    await this.deleteItem(find.id);
                } else {
                    find.amount += value;
                    find.totalPrice += price;
                }
            };
        } catch (err) {
            console.warn(err);
        };
    }

    async deleteItem(id) {
        const find = this.items.find(item => item.id === id);

        try {
            const data = await fetch(this.url + `/${find.id}`, {
                method: 'DELETE',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ removeAll: false })
            });

            if (!data.error) {
                const index = this.items.indexOf(find);
                this.items.splice(index, 1);
            };

            
        } catch (err) {
            console.warn(err);
        };
    }

    async _removeAllItems(evt) {
        const remove = evt.target.id;

        if (remove) {
            try {
                const data = fetch(this.url + `/${find.id}`, {
                    method: 'DELETE',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ removeAll: true })
                });

                if (!data.error) {
                    this.items = [];
                };

                this._render();
            } catch (err) {
                console.warn(err);
            };
        };
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