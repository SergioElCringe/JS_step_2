import List from "./LIST";
import Item from "./LIST_ITEM";
const url = 'https://raw.githubusercontent.com/schultznoan/FTP/main/fetchData/cart.json';

export default class Cart extends List {
    constructor( type) {
        super(url, type)
        this.type = 'cart';
        this.containerItems = null;
        this.containerCounter = null;
        this.containerCard = null;
        this.items = null;
        this.itemsCount = 0;
        this.click = false;
        this.clean = null;
        this.numberObject = 0;
        this.cl = '';
        this.index = null;
        this.money = null;
        this.containerItem = null;
        this.basket = null;
    }

    _initContainers() {
        this.container = document.querySelector('#cart-items');
        this.containerCounter = document.querySelector('#cart-counter');
        this.containerCard = document.querySelector('#ourCart');
        this.basket = document.querySelector('#ourCart');
        this.basket.addEventListener('click', this._handleEvents.bind(this));
        this.containerItem = document.querySelector('#catalog');
        this.containerItem.addEventListener('click', this.addItem.bind(this));
    }

    _handleEvents(evt) {
        this.createCart();
        const cart = document.querySelector('#cart');
        if (evt.target.id === 'ourCart') {
        cart.style.display = 'block';} 
    }

    deleteItem(event) {
        let de = event.target.id;
        let m = +de;
        this.index = this.items.find((el, i) => {
            if (el.id == m) {
                this.items.splice(i, 1);
                this._render();};
        });
    }

    addItem(evt) {
        if (evt.target.id === ("btn")) {
            const { name, price, imgurl, id } = evt.target.dataset;
            const find = this.items.find(cartItem => cartItem.id === id)
            if (!find) {
                this.items.push({
                    name,
                    price,
                    id,
                    imgUrl: imgurl,
                    amount: 1
                });
            } else {
                find.amount++;
            }
            this._render();
        };
    }
    countAmount() {
        this.itemsCount = this.items.reduce((acc, item) => {
            acc += item.amount;
            return acc;
        }, 0);
    }

  onMouseDown() {
        if (this.click == false) {
            this.click = true;
        } else {
            this.click = false;
        };
    }

    _render() {
        this.countAmount();
        let result = '';
        if (this.items.lenght != 0) {
            this.items.forEach(item => {
                const newItem = new Item( item , this.type )
                result += newItem.template;
            });
        }
        
        if (this.click == true) {
            let cartShow = `
            <div id="cart">
                <h2>Ваша корзина :</h2> 
                ${ result }
                <input id ='mon' type="text" placeholder="Шо там по деньгам?" disabled></input>
            </div>
            `;
            this.containerCard.innerHTML = cartShow;
        } else {
            this.containerCard.innerHTML = '';
        };
        this.containerCounter.innerHTML = `(${this.itemsCount})`;
    }

    createCart() {
        this.onMouseDown();
        this._render();
        this.money = document.querySelector('#mon');
        this.clean = document.querySelector('#cart');
        this.clean.addEventListener('click', this.deleteItem.bind(this));
        let result = null;
        this.index = this.items.find((el) => {
            result += el.price * el.amount;
            this.money.value = '$' + result;
        });
    }
}