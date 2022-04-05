import List from './general/LIST';
const url = '/api/catalog';

export default class Categories extends List {
    constructor(cart, api) {
        super(url, api);
        this.totaAmount = null;
        this.sort = null;
        this.desprod = null;
        this.cart = cart;
    }

    _initContainers() {
        this.container = document.querySelector('#products');

        if (this.container) {
            this.sort = document.querySelector('#sort-items').addEventListener('click', this._handleEventsSort.bind(this));
            this.container.addEventListener('click', this._handleEventsAdd.bind(this));
            this._getTotalAmount();
        };
    }

    _handleEventsSort(evt) {
        const sort = evt.path[1].dataset.sort;
        this._getTypeOfSort(sort, this.items);
    }

    _getTypeOfSort(sort, products) {
        switch (sort) {
            case 'name':
                {
                    products.sort((prev, next) => {
                        if (prev.name < next.name) return -1;
                        if (prev.name < next.name) return 1;
                    });
                    break;
                };
            case 'price':
                {
                    products.sort((prev, next) => prev.price - next.price);
                    break;
                }
            default:
                {
                    products.sort((prev, next) => prev.id - next.id);
                    break;
                };
        };

        this._render();
    }

    _getTotalAmount() {
        this.totalAmount = document.querySelector('#total-amount').innerHTML = `${this.items.length}`;
    }

    _handleEventsAdd(evt) {
        if (evt.target.classList.contains('btn-add')) {
            const { name, price, imgurl, id } = evt.path[2].dataset;
            this.cart.addItem({
                name: name,
                price: Number(price),
                imgUrl: imgurl,
                id: id,
                totalPrice: Number(price),
                amount: 1
            });
        };

        if (evt.path[1].classList.contains('product_title')) {
            const { id, price, name } = evt.path[3].dataset;
            const product = { id, price, name };

            localStorage.setItem("product", JSON.stringify(product));
        };
    }
}