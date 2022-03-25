import List from './general/LIST';
const url = 'https://raw.githubusercontent.com/schultznoan/FTP/main/fetchData/catalog.json';

export default class Categories extends List {
    constructor(cart, type = 'categories') {
        super(url, type);
        this.totaAmount = null;
        this.cart = cart;
    }

    _initContainers() {
        this.container = document.querySelector('#products');

        if (this.container) {
            this.container.addEventListener('click', this._handleEvents.bind(this));
        };
    }

    _categoriesHandler(items) {
        const products = items;

        this.totalAmount = document.querySelector('#total-amount').innerHTML = `${products.length}`;
    }

    _handleEvents(evt) {
        if (evt.target.classList.contains('btn-add')) {
            const { name, price, imgurl, id } = evt.target.dataset;
            this.cart.addItem({
                name: name,
                price: price,
                imgUrl: imgurl,
                id: id,
                amount: 1
            });
        };
    }
}