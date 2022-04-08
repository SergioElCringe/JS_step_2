import List from "./general/LIST";
const url = '/api/shipping';

export default class ShippingMethods extends List {
    constructor(api, type = 'shipping') {
        super(url, api, type);
        this.shipping = null;
        this.method = null;
        this.total = null;
    }

    _initContainers() {
        this.container = document.querySelector('#shipping');

        if (this.container) {
            this.container.addEventListener('click', this._handleEvents.bind(this));
            this.shipping = document.querySelector('.shipping');
        };
    }

    _handleEvents(evt) {
        const { id } = evt.target.dataset;
        const find = this.items.find(item => item.id === id);

        if (evt.target.classList.contains('delivery_option')) {
            const total = this.subtotal + (+find.price);
            this.method = find;


            document.querySelector('.shipping').innerHTML = `$${find.price}`;
            document.querySelector('.main-total').innerHTML = `$${total}`;
        };
    }
}