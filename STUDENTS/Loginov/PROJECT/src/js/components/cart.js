import List from "./LIST";
const baseURL = '/api';
const url = baseURL + '/menu';

export default class Cart extends List {
  constructor() {
    super(url, 'cart');
    this.container = null;
    this.containerCounter = null;
    this.counter = 0;
  }

  _initContainers() {
    this.container = document.querySelector('#cart-items');
    this.containerCounter = document.querySelector('#cart-counter');
    this.containerPrice = document.querySelector('#cart-price');
    this.containerItems.addEventListener('click', this.removeItem.bind(this));
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
  removeItem(evt) {
    if (evt.target.classList.contains('remove')) {
      this.items.pop();
    }
    this._render();
  }

  countPrice() {
    this.itemsPrice = this.items.reduce((acc, item) => {
      acc += (+item.price) * item.amount;
      return acc;
    }, 0);
  }

  countAmount() {
    this.itemsCount = this.items.reduce((acc, item) => {
      acc += item.amount;
      return acc;
    }, 0);
  }
  _render() {
		let result = '';
		this.countAmount();
		this.countPrice();
		this.items.forEach(item => {
      const newItem = new Item(item, this.type);
      result += newItem.template;
		});
		if (result && this.items.length > 0) {
            result += this.getTotal(this.itemsCount, this.itemsPrice);
        };
		this.container.innerHTML = result;
		this.containerCounter.innerHTML = `(${this.itemsCount})`;
	}
}
