import List from "./LIST";
const url = '/api/catalog';

export default class Catalog extends List {
    constructor(api, cart) {
        super(api, url);
        this.cart = cart;
        this.container = null;
    };

    _handleEvents() {
        this.container.addEventListener('click', evt => {
            evt.preventDefault();
            if (evt.target.classList.contains('btn-add')) {
                const { name, price, id, imgurl } = evt.target.dataset;
                this.cart.addItem({
                    name, price, id,
                    imgUrl: imgurl
                });
            };
        });
    };

    _initContainers() {
        this.container = document.querySelector('#catalog');
    };
};