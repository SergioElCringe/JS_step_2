import List from "./general/LIST";
const url = 'https://raw.githubusercontent.com/schultznoan/FTP/main/fetchData/catalog.json';

export default class Catalog extends List {
    constructor(cart) {
        super(url);
        this.cart = cart;
    }

    _initContainers() {
        this.container = document.querySelector('#catalog');
        this.container.addEventListener('click', this._handleEvents.bind(this));
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
};