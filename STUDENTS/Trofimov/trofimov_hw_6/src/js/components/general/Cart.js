import List from "./LIST";
import Item from "./LIST_ITEM";
const url = '/api/cart';

export default class Cart extends List {
    constructor( type) {
        super(url, type);
        this.type = 'cart';
        this.containerItems = null;
        this.containerCounter = null;
        this.containerCard = null;
        this.items = null;
        this.itemsCount = 0;
        this.itemsFront = null;
        this.click = false;
        this.clean = null;
        this.numberObject = 0;
        this.cl = '';
        this.index = null;
        this.money = null;
        this.containerItem = null;
        this.basket = null;
    }

    async _init() {
        try {
            const data = await this._fetchData();
            this.items = data.items;
        } catch {
            this.error = err;
        } finally {
            this._initContainers();
    
            if (this.items.length) {
                this._render();
            }
        }
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
    }

    async deleteItem(event) {
        let deleted = event.target.id;
        let m = +deleted;
            try {
                const data = fetch(this.url + `/${deleted}`, {
                    method: 'DELETE',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({deleted}),
                });
     
                this.index = this.items.find((el, i) => {
                    if (el.id == m) {
                        this.items.splice(i, 1);
                        this._render();
                    }
                });
                this._render();
                this.click = true;
            } catch (err) {
                console.warn(err);
            }
    }
    
    async addItem(item) {
        const { imgUrl, name, price, id } = item;
        const find = this.items.find(cartItem => cartItem.id === id);
        try {
            if (!find) {
                const newItem = await { imgUrl, name, price, id, amount: 1 };
                if(imgUrl){
                    const data = await fetch(this.url, {
                        method: 'POST',
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(newItem),
                    }).then(d => d.json());
                    if (!data.error) {
                        this.items.push(newItem);
                        this._render();
                    }
                }
                } else {
                    const data = await fetch(this.url + `/${ id }`, { 
                        method: 'PUT',
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({value: 1}),
                    }).then(d => d.json());
                    if (!data.error) {
                        find.amount++;
                    }
                    this._init();
                }
        }
        catch(err) {
            console.warn(err);
        }
    }    

    countAmount() {
        this.itemsCount = this.items.reduce((acc, item) => {
            acc += item.amount;
            return acc;
        }, 0);
    }

    onMouseDown() {
        this.click = !this.click;
    }

    _render() {
        let result = '';
        if (this.items.lenght != 0) {
            this.items.forEach(item => {
                const newItem = new Item( item , this.type );
                result += newItem.template;
            });
        }
        
        if (this.click == true) {
            let cartShow = `
            <div id="cart">
                <h2>Ваша корзина :</h2> 
                ${ result }
                <input id ='mon' type="text" placeholder="Какая сумма в корзине?" disabled></input>
            </div>
            `;
            this.containerCard.innerHTML = cartShow;
        } else {
            this.containerCard.innerHTML = '';
        };
        this.containerCounter.innerHTML = `(${this.items.lenth})`;
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