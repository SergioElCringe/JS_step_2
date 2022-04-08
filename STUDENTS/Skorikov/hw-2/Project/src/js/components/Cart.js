import { PRODUCTS_API } from "./app";

const CARTITEMS = [];

export default class Cart {
    constructor() {
        this.containerItems = null;
        this.bascketItems = null;
        this.containerCounter = null;
        this.containerPrice = null;
        this.items = null;
        this.prices = [];
        this.itemsCount = 0;
        this.itemsPrice = 0;
        this._init();
    }


    _init() {
        this.items = CARTITEMS;
        this.bascketItems = document.querySelector('#cart-items');
        this.bascketItems.addEventListener('click', this._handleEvents.bind(this));
        this.containerCounter = document.querySelector('#cart-counter');
        this.containerPrice = document.querySelector('#cart-prices');
        this.containerItems = document.querySelector('#catalog');
        this.containerItems.addEventListener('click', this.addItem.bind(this));

        this._render();
    }

    _handleEvents(evt) {
        const prices = this.prices.find(cartItem => cartItem.id === evt.path[1].dataset.id);
        const find = this.items.find(cartItem => cartItem.id === evt.path[1].dataset.id);
        const action = evt.target.classList;

        if (action.contains('item-delete')) {
            this.removeItem(find.id);
        } else if (action.contains('right')) {
            find.amount++;
            find.price = (+find.price) + (+prices.price);
        } else if (action.contains('left')) {
            if (find.amount > 1) {
                find.amount--;
                find.price = (+find.price) - (+prices.price);
            };
        };

        if (evt.path[2].classList.contains('clear-all')) {
            this.removeAllItems();
        };

        this._render();
    }

    removeItem(id) {
        const find = this.items.find(item => item.id === id);
        let index = this.items.indexOf(find);
        this.items.splice(index, 1);

        this._render();
    }

    removeAllItems() {
        this.items = [];
        this._render();
    }

    createItem(item) {
        const { imgUrl, name, price, amount, id } = item;

        return `<hr>
        <div class="cart__item">
            <img class="cart__item__img" src="${PRODUCTS_API + imgUrl}">
            <div class="cart__item__info">
                <span>Name: <b>${name}</b></span>
                <div class="price__block">
                    <span>Cost: <b>$${price}</b></span>
                    <div class="quantity" data-id="${id}"><span class="left">-</span><span class="amount">${amount}</span><span class="right">+</span></div>
                </div>
                <div data-id="${id}"><span class="item-delete">Remove this product</span></div>
            </div>
        </div>`;
    }

    addItem(evt) {
        if (evt.target.classList.contains('btn-add')) {
            const { name, price, imgurl, id } = evt.target.dataset;
            const find = this.items.find(cartItem => cartItem.id === id);

            if (!find) {
                this.items.push({
                    name,
                    price,
                    id,
                    imgUrl: imgurl,
                    amount: 1
                });

                this.prices.push({
                    id,
                    price
                });
            };

            this._render();
        };
    }

    countPrice() {
        this.itemsPrice = this.items.reduce((acc, item) => {
            acc += (+item.price);
            return acc;
        }, 0);

        this.containerPrice.innerHTML = `$${this.itemsPrice}`;
    }

    countAmount() {
        this.itemsCount = this.items.reduce((acc, item) => {
            acc += item.amount;
            return acc;
        }, 0);

        this.containerCounter.innerHTML = `(${this.itemsCount})`;
    }

    getTotal(itemsCount, itemsPrice) {
        return `<hr>
        <div class="total"><span>Total quantity: <b>${itemsCount}</b></span><span>Total price: <b>$${itemsPrice}</b></span></div>
        <hr>
        <div class="action">
        <div class="continue"><span><a href="https://raw.githack.com/SergioElCringe/JS_step_2/init/PROJECT/BASE__PROJECT/cart.html"><b>Continue</b></a></span></div>
            <div class="clear-all"><span><b>Remove all products</b></span></div>
        </div>`;
    }

    _render() {
        let result = `<h2 class="head-bascket">Main products</h2>`;

        if (!(this.items.length > 0)) {
            result = `<p class="no-bascket">There are no products. Select products to purchase from catalog.</p>`;
        };

        this.items.forEach(item => {
            result += this.createItem(item);
        });

        this.countPrice();
        this.countAmount();

        if (result && this.items.length > 0) {
            result += this.getTotal(this.itemsCount, this.itemsPrice);
        };

        this.bascketItems.innerHTML = result;
    }
};
