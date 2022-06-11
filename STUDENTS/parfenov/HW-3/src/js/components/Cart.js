import List from "./LIST";
const url = 'https://raw.githubusercontent.com/GeoParf/FrontendLerning/main/cart.json';

export default class Cart extends List {
    constructor() {
        super(url, 'cart');
        this.container = null;
        this.containerCounter = null;
        this.counter = 0;
    };



    _initContainers() {
        this.container = document.querySelector('#cart-items');
        this.containerCounter = document.querySelector('#cart-counter');
    };

    _handleEvents() {
        this.container.addEventListener('click', evt => {
            if (evt.target.classList.contains('btn-delete')) {
                const { id } = evt.target.dataset;
                this.deleteItem({ id })
                console.log('click delete');
            }
        });
    };

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
        super._render();
        console.log(item)
    };

    deleteItem(item) {
        const { id } = item;
        const find = this.items.find(cartItem => cartItem.id === id);
        if (find.amount > 1) {
            find.amount--;
            this.itemsPrise -= find.price;
        } else if (find.amount = 1) {
            this.itemsPrise -= find.price;
            let index = this.items.indexOf(find);
            this.items.splice(index, 1);
        };

        super.render();
    };

    countAmount() {
        this.itemsCount = this.items.reduce((acc, item) => {
            acc += item.amount;
            return acc;
        }, 0);
    };

    countTotalPrise() {
        this.itemsPrise = this.items.reduce((acc, item) => {
            acc += Number(item.price) * item.amount;
            console.log(acc);
            return acc;
        }, 0);
    };
};