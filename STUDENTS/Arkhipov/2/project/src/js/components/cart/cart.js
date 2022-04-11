const CARTITEMS = [];
const PRODUCTS_API = 'https://raw.githubusercontent.com/SergioElCringe/JS_step_2/init/PROJECT/BASE__PROJECT/images/';

export default class Cart {
	constructor() {
		this.containerItems = null;
		this.containerCounter = null;
		this.items = null;
		this.itemsCont = 0;
		this.total = null;
		this._init();
	}

	_init() {
		this.items = CARTITEMS;
		this.containerItems = document.querySelector('#cart-items');
		this.containerCounter = document.querySelector('#cart-counter');
		this.containerItems.addEventListener('click', this._handleCart.bind(this));
		this._render();
	}

	_handleCart(event) {
		if (event.target.dataset.quantity) {
			this._changeAmount(event);
		} else if (event.target.className === 'cart__btn-del') {
			this._deleteItem(event);
		}
	}

	_changeAmount(event) {
		const idElem = event.target.parentElement.parentElement.parentElement.parentElement.id;//ужас !!!!! Оч плохое решение
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
		const idElem = event.target.parentElement.id;// не такой сильно стрёмный ужас
		const find = this.items.find(item => item.id === idElem);
		let index = this.items.indexOf(find);
		this.items.splice(index, 1);
		this._render();
	}

	_createItem(item) {
		const { imgUrl, name, price, amount, id } = item;
		return `
    <div class="cart__item" id="${id}">
        <img class="cart__item__img" src="${PRODUCTS_API + imgUrl}">
        <div class="cart__item__info">
          <span>${name}</span>
          <div class="price__block">
            <span>$${price}</span>
				<div class="quantity" > 
					<span data-quantity="-">-</span>
					<span>${amount}</span>
					<span data-quantity="+">+</span>
				</div>
          </div>
        </div>
				<div>
				$${price * amount}
				</div>
        <div class="cart__btn-del">
        X
        </div>
				
    </div>
    `;
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

	_countAmount() {
		this.itemsCount = this.items.reduce((acc, item) => {
			acc += item.amount;
			return acc;
		}, 0);
	}

	_totalSumm() {
		this.total = 0;
		this.items.forEach(item => {
			this.total += item.price * item.amount;
		})
		return `<div class='cart__total'>Total summ: $${this.total}</div>`;
	}

	_render() {
		let result = '';
		this.items.forEach(item => {
			result += this._createItem(item);
		});
		result += this._totalSumm();
		this.containerItems.innerHTML = result;
		this._countAmount();
		this.containerCounter.innerHTML = `(${this.itemsCount})`;
	}
}
