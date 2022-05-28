import List from "./LIST";

const url = '/api/cart';
export default class Cart extends List {
	constructor(api) {
		super(api, url, 'cart');
		this.container = null;
		this.containerCounter = null;
		this.counter = 0;
		this.total = 0;
		this.totalContainer = null;
		this.buttonToggler = null;
		this.open = false;
	}

	async _init() {
		try {
			const data = await this.request.send(this.url, 'GET');
			if (data) {
				const { items } = data;
				this.items = items;
			}
		}

		catch (err) {
			this.error = err;
		}

		finally {
			this._initContainers();
			if (!this.error) {
				this._render();
				this._countAmount();
				if (this.items.length) {
					this._handleEvents();
					this._renderTotalSumm();
				}
			}
		}
	}

	_handleEvents() {
		this.container.addEventListener('click', evt => {
			const { id } = evt.target.dataset;
			if (evt.target.classList.contains('cart__delete')) {
				this.deleteItem(id);
			}
			else if (evt.target.classList.contains('cart__add')) {
				const newItem = this.items.find(el => el.id === id);
				this.addItem(newItem);
			}
			else if (evt.target.classList.contains('cart__delete-all')) {
				this.deleteItemAll(id);
			}
		});
		this.buttonToggler.addEventListener('click', this.toggleCart.bind(this));
	}

	_initContainers() {
		this.container = document.querySelector('#cart-items');
		this.containerCounter = document.querySelector('#cart-counter');
		this.buttonToggler = document.querySelector('#cart__btn');
		this.totalContainer = document.querySelector('#cart__total');
	}

	_renderTotalSumm() {
		this.total = 0;
		this.items.forEach(el => {
			this.total += el.price * el.amount;
		});
		this.totalContainer.innerText = `$${this.total}`;
	}

	toggleCart() {
		this.open = !this.open;
		this._renderTotalSumm();
		if (this.open) {
			this.container.classList.add('active');
		} else {
			this.container.classList.remove('active');
		}
	}

	async deleteItem(id) {
		const find = this.items.find(cartItem => cartItem.id === id);
		try {
			if (find.amount > 1) {
				const data = await this.request.send(this.url, 'PUT', { value: -1 }, id);
				if (!data.error) {
					find.amount--;
					this._countAmount();
				}
			} else {
				const data = await this.request.send(this.url, 'DELETE', {}, id);
				if (!data.error) {
					find.amount--;
					this._countAmount();
				}
				if (!data.error) {
					this.items = this.items.filter(el => el.id !== id);
				}
			}
			this._render();
			this._renderTotalSumm();
		}
		catch (err) {
			console.warn(err);
		}
	}

	async deleteItemAll(id) {
		const find = this.items.find(cartItem => cartItem.id === id);
		try {
			const data = await this.request.send(this.url, 'DELETE', {}, id);
			if (!data.error) {
				find.amount--;
				this._countAmount();
			}
			if (!data.error) {
				this.items = this.items.filter(el => el.id !== id);
			}
			this._render();
			this._renderTotalSumm();
		}
		catch (err) {
			console.warn(err);
		}
	}

	async addItem(item) {
		const { imgUrl, name, price, id } = item;
		const find = this.items.find(cartItem => cartItem.id === id);

		try {
			if (!find) {
				const newItem = { imgUrl, name, price, id, amount: 1 };
				const data = await this.request.send(this.url, 'POST', newItem);
				if (!data.error) {
					this.items.push(newItem);
					this._countAmount();
				}
			} else {
				const data = await this.request.send(this.url, 'PUT', { value: 1 }, id);
				if (!data.error) {
					find.amount++;
					this._countAmount();
				}
			}
			this._render();
			this._renderTotalSumm();
		}

		catch (err) {
			console.warn(err);
		}
	}

	_countAmount() {
		this.counter = this.items.reduce((acc, item) => {
			acc += item.amount;
			return acc;
		}, 0);
		this.containerCounter.innerText = `(${this.counter})`;
	}

}
