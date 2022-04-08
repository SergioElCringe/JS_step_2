const CARTITEMS = [];
import List from './list.js';
export default class Cart extends List {
  constructor(url, imgURLTemplate, type) {
    super(url, imgURLTemplate, type);
    this.itemsCount = 0;
  }
  _handleEvents() {
    this.container.addEventListener('click', e => {
      if (e.target.classList.contains('cart__delete-btn')) {
        const id = e.target.parentNode.dataset.id;
        this._removeItem(id);
      } else if (e.target.classList.contains('cart-item__btn_plus')) {
        const id = e.target.parentNode.parentNode.parentNode.parentNode.dataset.id;
        console.log(id);
        this._increaseItemAmount(id);
      } else if (e.target.classList.contains('cart-item__btn_minus')) {
        const id = e.target.parentNode.parentNode.parentNode.parentNode.dataset.id;
        console.log(id);
        this._decreaseItemAmount(id);
      }
    });
  }

  _createItem(item) {
    const { imgFileName, title, price, id, amount } = item;
    return `
    <div class="cart-item" data-id="${id}">
        <img class="cart-item__img" src="${this.imgURLTemplate + imgFileName}">
        <div class="cart-item__info">
          <span class="cart-item__title">${title}</span>
          <div class="cart-item__order">
            <span class="cart-item__price">${price}</span>
            <span class="cart-item__amount">
              <b class="cart-item__btn cart-item__btn_minus">-</b>${amount}<b class="cart-item__btn cart-item__btn_plus">+</b>
            </span>
          </div>
        </div>
        <button class="cart__delete-btn">
        ×
        </button>
    </div>
    `;
  }

  _removeItem(id) {
    let index = null;
    this.items.forEach((el, i) => {
      if (el.id === id) {
        index = i;
      }
    });
    this.items.splice(index, 1);
    this._render();
  }

  _increaseItemAmount(id) {
    const selected = this.items.find(item => item.id === +id);
    if (selected) {
      selected.amount++;
    }
    this._render();
  }

  _decreaseItemAmount(id) {
    const selected = this.items.find(item => item.id === +id);
    if (selected && selected.amount > 1) {
      selected.amount--;
    } else if (selected && selected.amount === 1) {
      this._removeItem(id);
    }
    this._render();
  }

  _countAmount() {
    this.itemsCount = this.items.reduce((acc, item) => {
      acc += +item.amount;
      return acc;
    }, 0);
  }

  _render() {
    let result = '';

    this.items.forEach(item => {
      result += this._createItem(item);
    });

    this.container.innerHTML = result;
    this._countAmount();
    this.containerCounter.innerHTML = `(${this.itemsCount})`;
  }

  _initContainer() {
    this.container = document.querySelector('#cart__items');
    this.containerCounter = document.querySelector('#cart__counter');
  }
}
