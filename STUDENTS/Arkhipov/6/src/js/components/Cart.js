import List from "./LIST";

const url = '/api/cart';
export default class Cart extends List {
	constructor() {//удалил items
		super(url, 'cart');
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
			const data = await this._fetchData();
			const { items } = data;
			this.items = items;
		}
		catch (err) {
			this.error = err;
		}
		finally {
			this._initContainers();
			if (!this.error) {
				this._render();
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
			} else if (evt.target.classList.contains('cart__add')) {
				const newItem = this.items.find(el => el.id === id);
				this.addItem(newItem);
			} else if (evt.target.classList.contains('cart__delete-all')) {
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
		this.total = null;
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
				const data = await fetch(this.url + `/${id}`, {
					method: 'PUT',
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ value: -1 }),
				}).then(d => d.json());
				if (!data.error) {
					find.amount--;
				}
			} else {
				const data = await fetch(this.url + `/${id}`, {
					method: 'DELETE',
					headers: { "Content-Type": "application/json" },
				}).then(d => d.json());
				if (!data.error) {
					find.amount--;
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
			const data = await fetch(this.url + `/${id}`, {
				method: 'DELETE',
				headers: { "Content-Type": "application/json" },
			}).then(d => d.json()); //POST
			if (!data.error) {
				find.amount--;
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
				const data = await fetch(this.url, {
					method: 'POST',
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(newItem),
				}).then(d => d.json());
				if (!data.error) {
					this.items.push(newItem);
				}
			} else {
				const data = await fetch(this.url + `/${id}`, {
					method: 'PUT',
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ value: 1 }),
				}).then(d => d.json());
				if (!data.error) {
					find.amount++;
				}
			}
			this._render();
			this._renderTotalSumm();
		}
		catch (err) {
			console.warn(err);
		}
	}

}
