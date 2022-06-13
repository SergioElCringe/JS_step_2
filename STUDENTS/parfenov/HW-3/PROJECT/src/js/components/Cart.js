import List from "./LIST";
const url = '/api/cart';



export default class Cart extends List {
    constructor(api) {
        super(api, url, 'cart');
        this.container = null;
        this.containerCounter = null;
        this.counter = 0;
        this.itemsCount = 0;
        this.total = 0;
        this.buttonToggler = null;
        this.open = false;
        this.aggreagate = {
            total: '0.00'
        }
    };

    async _init() {
        try {
            const data = await this.request.send(this.url, 'GET');
            if (data) {
                const { items, total } = data;
                this.total = total;
                this.items = items;
            } else {
                this.error = true;
            }
        }
        catch (err) {
            this.error = err;
        }
        finally {
            this._initContainers();
            if (this.error) {
                return null;
            }
            this._render();
            this._handleEvents();

        }
    };

    _initContainers() {
        this.container = document.querySelector('#cart-items');
        this.containerCounter = document.querySelector('#cart-counter');
        this.buttonToggler = document.querySelector('#cart_btn');
    };

    _handleEvents() {
        this.container.addEventListener('click', evt => {
            if (evt.target.classList.contains('btn-delete')) {
                const { id } = evt.target.dataset;
                this.deleteItem(id)
            }
        });
        this.buttonToggler.addEventListener('click', this.toggleCart.bind(this));
    };

    toggleCart() {
        this.open = !this.open;
        if (this.open) {
            this.container.classList.add('active');
        } else {
            this.container.classList.remove('active');
        };
    };

    // Add Item in Cart

    async addItem(item) {
        try {
            const { imgUrl, name, price, id } = item;
            const find = this.items.find(cartItem => cartItem.id === id);
            if (find) {
                // PUT (+1 item)
                const data = await this.request.send(this.url, 'PUT', { value: 1 }, id);
                if (!data.error) {
                    find.amount++;
                }
            } else {
                // POST (new item)
                const newItem = { imgUrl, name, price, id, amount: 1 };
                const data = await this.request.send(this.url, 'POST', newItem);
                if (!data.error) {
                    this.items.push(newItem);
                }
            }
            this._render();
        }
        catch (err) {
            console.warn(err);
        }
    };

    _render() {
        this.aggregate = {
            isEmpty: !this.items.length,
            total: this.items.reduce((total, item) => total + Number(item.price) * item.amount, 0).toFixed(2)
        };
        super._render()
        this.containerCounter.innerHTML = `(${this.countAmount()} item(s) for $${this.countTotalPrise()})`
    };

    //Delete Item from Cart

    async deleteItem(item) {
        const id = item;
        const find = this.items.find(cartItem => cartItem.id === id);
        try {
            // PUT (-1 item)
            if (find.amount > 1) {
                const data = await this.request.send(this.url, 'PUT', { value: (-1) }, id);
                if (!data.error) {
                    find.amount--;
                }
            } else if (find.amount === 1) {
                //DELETE item
                const data = await this.request.send(this.url, 'DELETE', '', id);
                if (!data.error) {
                    this.items = this.items.filter(el => el.id !== id);
                }
            }
            this._render();
        }
        catch (err) {
            console.warn(err);
        }
    };

    countAmount() {
        this.itemsCount = this.items.reduce((acc, item) => {
            acc += item.amount;
            return acc;
        }, 0);
        return this.itemsCount;
    };

    countTotalPrise() {
        this.countAmount()
        this.total = this.items.reduce((acc, item) => {
            acc += Number(item.price) * this.itemsCount;
            return acc;
        }, 0);
        return this.total;
    };


};