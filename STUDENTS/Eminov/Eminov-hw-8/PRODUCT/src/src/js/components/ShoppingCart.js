import Cart from "./Cart";

export default class ShoppingCart extends Cart {
    constructor(shipping, api, type = 'shoppingCart') {
        super(api, type);
        this.subtotal = null;
        this.total = null;
        this.cartPrices = null;
        this.shipping = shipping;
    }

    _initContainers() {
        this.container = document.querySelector('#shop-cart-items');

        if (this.container) {
            this.container.addEventListener('click', this._handleEvents.bind(this));
            this.action = document.querySelector('.action');
            this.action.addEventListener('click', this._removeAllItems.bind(this));
            this.cartPrices = document.querySelectorAll('.cart-prices');
            this.subtotal = document.querySelector('.subtotal');
            this.total = document.querySelector('.main-total');
        };
    }

    countPrice() {
        let totalPrice;

        totalPrice = this.items.reduce((acc, item) => {
            acc += (+item.totalPrice);
            return acc;
        }, 0);

        this.cartPrices.forEach(item => item.innerHTML = `($${totalPrice})`);
        this.subtotal.innerHTML = `$${totalPrice}`;
        this.shipping.subtotal = totalPrice;

        if (this.shipping.method) {
            const shippingPrice = this.shipping.method.price;
            this.total.innerHTML = `$${totalPrice + (+shippingPrice)}`;
        } else {
            this.total.innerHTML = `$${totalPrice}`;
        };
    }
};