import Cart from "./Cart";

export default class ShoppingCart extends Cart {
    constructor(api, type = 'shoppingCart') {
        super(api, type);
        this.shipping = null;
    }

    _initContainers() {
        this.container = document.querySelector('#shop-cart-items');

        if (this.container) {
            this.container.addEventListener('click', this._handleEvents.bind(this));
            this.action = document.querySelector('.action');
            this.action.addEventListener('click', this._action.bind(this));
        };
    }

    countPrice() {
        let totalPrice;

        totalPrice = this.items.reduce((acc, item) => {
            acc += (+item.totalPrice);
            return acc;
        }, 0);

        document.querySelectorAll('.cart-prices').forEach(item => item.innerHTML = `($${totalPrice})`);
        document.querySelector('.subtotal').innerHTML = `$${totalPrice}`;
        document.querySelector('.main-total').innerHTML = `$${totalPrice}`;
    }
};