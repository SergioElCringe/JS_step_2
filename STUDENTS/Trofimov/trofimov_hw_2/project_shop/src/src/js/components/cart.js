import { PRODUCTS_API } from "./app";
const CARTITEMS = [];

export default class Cart {

    constructor() {
        this.containerItems = null;
        this.containerCounter = null;
        this.containerTotalPrice = null;
        this.containerCard = null;
        this.action = null;
        this.items = null;
        this.itemsCount = 0;
        this.itemsTotalSum = 0;
        this.totalSum = '';
        this.index = null;
        this._init();
    }

    _init() {
        this.items = CARTITEMS;
        this.containerItems = document.querySelector('#cart-items');
        this.containerItems.addEventListener('click', this.handleEvents.bind(this));
        this.containerCounter = document.querySelector('#cart-counter');
        this.containerTotalPrice = document.querySelector('#cart-total-price');

        this._render();
    }

    handleEvents(evt) {
        const { id } = evt.target.dataset;
        if (evt.target.classList.contains('cart__item__del')) {
            this.deleteItem(id);
        };
    }

    deleteItem(id) {
        const find = this.items.find(item => item.id === id);
        let index = this.items.indexOf(find);
        this.items.splice(index, 1);

        this._render();
    }

    createItem(item) {
        const { imgUrl, name, price, amount, id } = item;
        return `
        <div class="cart__item" id="cart__item">
            <img class="cart__item__img" src="${PRODUCTS_API + imgUrl}">
            <div class="cart__item__info">
                <span class="cart__item__name">${name}</span>
                <div class="price__block">
                    <span class="cart__item__price">$${price}</span>
                    <span class="cart__item__amount"> x${amount}</span>
                    <span class="cart__item__total-price">($${price * amount})</span>
                </div>
            </div>
            <div class="cart__item__del" data-id="${id}">
                x
            </div>
        </div>
        `;
    }

    addItem(item) {
        const { imgUrl, name, price, id } = item;
        const find = this.items.find(cartItem => cartItem.id === id);
        if (!find) {
            const newItem = { imgUrl, name, price, id };
            newItem.amount = 1;
            this.items.push(newItem);
        } else {
            find.amount++;
        }

        this._render();
    }

    countAmount() {
        this.itemsCount = this.items.reduce((acc, item) => {
            acc += item.amount;
            return acc;
        }, 0);
    }

    countTotalSum() {
        this.itemsTotalSum = this.items.reduce((accum, item) => {
            accum += Number(item.amount * item.price);
            return accum;
        }, 0);
    }

    _render() {
        let result = '';

        this.items.forEach(item => {
            result += this.createItem(item);
        });

        this.containerItems.innerHTML = result;
        this.countAmount();
        this.countTotalSum();
        this.containerCounter.innerHTML = `( ${this.itemsCount} )`;
        this.containerTotalPrice.innerHTML = `$${this.itemsTotalSum}`;
    }
};

