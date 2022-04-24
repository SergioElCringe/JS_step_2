require("babel-polyfill");
import List from './list.js';
export default class Cart extends List {
  constructor(url, type, requestManager) {
    super(url, type, requestManager);
    this.itemsCount = 0;
    this.cartToggle = null;
    this.requestManager = requestManager;
  }

  _handleEvents() {
    this.container.addEventListener('click', e => {
      if (e.target.classList.contains('cart__delete-btn')) {
        const id = +e.target.parentNode.dataset.id;
        this.removeItem(id);
      } else if (e.target.classList.contains('cart-item__btn_plus')) {
        const id = +e.target.parentNode.parentNode.parentNode.parentNode.dataset.id;
        this.changeItemAmount(id, 1);
      } else if (e.target.classList.contains('cart-item__btn_minus')) {
        const id = +e.target.parentNode.parentNode.parentNode.parentNode.dataset.id;
        this.changeItemAmount(id, -1);
      }
    });
    this.cartToggle.addEventListener('click', this._showCart);
  }

  async removeItem(id) {
    const response = await this.requestManager.send(`/api/cart/${id}`, 'DELETE');
    if (response) {
      this.items = this.items.filter(el => el.id !== id)
      this._render();
    }
  }

  async changeItemAmount(id, value) {
    const item = this.items.find(el => el.id === id);
    if (item.amount === 1 && value === -1) {
      await this.removeItem(id);
    } else {
      const response = await this.requestManager.send(`/api/cart/${id}`, 'PUT', JSON.stringify({ value: value }));
      if (response) {
        const selected = this.items.find(item => item.id === id);
        if (selected) {
          selected.amount += value;
        }
        this._render();
      }
    }
  }

  _countAmount() {
    this.itemsCount = this.items.reduce((acc, item) => {
      acc += +item.amount;
      return acc;
    }, 0);
    this.containerCounter.innerHTML = `(${this.itemsCount})`;
  }

  _showCart() {
    document.querySelector('.cart__content').classList.toggle('cart_hidden');
  }

  _initContainer() {
    this.container = document.querySelector('#cart__items');
    this.containerCounter = document.querySelector('#cart__counter');
    this.cartToggle = document.querySelector('#cartToggle');
  }
}
