import List from './list.js';
export default class Cart extends List {
  constructor(url, type) {
    super(url, type);
    this.itemsCount = 0;
    this.cartToggle = null;
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
    const options = { method: 'DELETE' };
    const path = `/api/cart/${id}`
    const response = await fetch(path, options).then(d => d.json()).catch(err => { throw err });
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
      const options = {
        method: 'PUT',
        body: JSON.stringify({ value: value }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const path = `/api/cart/${id}`;
      const response = await fetch(path, options).then(d => d.json()).catch(err => { throw err });
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
