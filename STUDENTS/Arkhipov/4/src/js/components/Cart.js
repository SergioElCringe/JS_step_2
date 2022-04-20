import Item from "./LIST_ITEM";
import List from "./LIST";

const baseURL = 'https://raw.githubusercontent.com/SergioElCringe/JS_step_2/init/STUDENTS/Arkhipov/3/FTP';//
const url = baseURL + '/cart.json';

export default class Cart extends List {
	constructor(items) {
		super(url, 'cart');
		this.container = null;
		this.containerCounter = null;
		this.counter = 0; // 
		this.items = items;
	}

	_handleEvents() {
		this.container.addEventListener('click', this._handleCart.bind(this));
		return true
	}

	_handleCart(event) {
		if (event.target.dataset.quantity) {
			this._changeAmount(event);
		} else if (event.target.className === 'cart__btn-del') {
			this._deleteItem(event);
		}
	}

	_changeAmount(event) {
		const idElem = event.target.parentElement.parentElement.parentElement.parentElement.id;//ужас !!!!! Оч плохое решение. Я так понимаю тут надо со всплатием что то делать.
		if (event.target.dataset.quantity === '+') {
			this.items.forEach(item => {
				if (idElem === item.id) {
					item.amount++
					this._render();
				}
			})
		} else if (event.target.dataset.quantity === '-') {
			this.items.forEach(item => {
				if (idElem === item.id) {
					item.amount > 1 ? item.amount-- : 1
					this._render();
				}
			})
		}
	}

	_deleteItem(event) {
		const idElem = event.target.parentElement.id;
		const find = this.items.find(item => item.id === idElem);
		let index = this.items.indexOf(find);
		this.items.splice(index, 1);
		this._render();
	}

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
		this._render();
	}

	_initContainers() {
		this.container = document.querySelector('#cart-items');
		this.containerCounter = document.querySelector('#cart-counter');
	}

	_totalSumm() {
		this.total = 0;
		this.items.forEach(item => {
			this.total += item.price * item.amount;
		})
		return `<div class='cart__total'>Total summ: $${this.total}</div>`;
	}

	_countAmount() {
		this.counter = this.items.reduce((acc, item) => {
			acc += item.amount;
			return acc;
		}, 0);
	}

	_render() {
		let result = '';
		this.items.forEach(item => {
			const newItem = new Item(item, this.type);
			result += newItem.template;
		});
		result += this._totalSumm();
		this.container.innerHTML = result;
		this._countAmount();
		this.containerCounter.innerHTML = `(${this.counter})`;

	}

}
