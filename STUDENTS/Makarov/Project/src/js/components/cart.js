import List from './list.js';
export default class Cart extends List {
  constructor(url, type) {
    super(url, type);
    this.itemsCount = 0;
  }
  
  _handleEvents() {
    this.container.addEventListener('click', e => {
      if (e.target.classList.contains('cart__delete-btn')) {
        const id = e.target.parentNode.dataset.id;
        this.removeItem(id);
      } else if (e.target.classList.contains('cart-item__btn_plus')) {
        const id = e.target.parentNode.parentNode.parentNode.parentNode.dataset.id;
        this.increaseItemAmount(id);
      } else if (e.target.classList.contains('cart-item__btn_minus')) {
        const id = e.target.parentNode.parentNode.parentNode.parentNode.dataset.id;
        this.decreaseItemAmount(id);
      }
    });
  }

  removeItem(id) {
    let index = null;
    this.items.forEach((el, i) => {
      if (el.id === id) {
        index = i;
      }
    });
    this.items.splice(index, 1);
    this._render();
  }

  increaseItemAmount(id) {
    const selected = this.items.find(item => item.id === +id);
    if (selected) {
      selected.amount++;
    }
    this._render();
  }

  decreaseItemAmount(id) {
    const selected = this.items.find(item => item.id === +id);
    if (selected && selected.amount > 1) {
      selected.amount--;
    } else if (selected && selected.amount === 1) {
      this.removeItem(id);
    }
    this._render();
  }

  _countAmount() {
    this.itemsCount = this.items.reduce((acc, item) => {
      acc += +item.amount;
      return acc;
    }, 0);
    this.containerCounter.innerHTML = `(${this.itemsCount})`;
  }

  _initContainer() {
    this.container = document.querySelector('#cart__items');
    this.containerCounter = document.querySelector('#cart__counter');
  }
}
