import List from "./LIST";
const url = '/api/cart';

export default class Cart extends List {
  constructor() {
    super(url, 'cart');
    this.container = null;
    this.containerCounter = null;
    this.counter = 0;
    this.total = 0;
    this.buttonToggler = null;
    this.open = false;
  }

  async _init() {
    try {
      const data = await this._fetchData();
      const { items, total } = data;
      this.items = items;
      this.total = total;
    }
    catch(err) {
      this.error = err;
    }
    finally {
      this._initContainers();
      if (!this.error) {
        this._render();
        if (this.items.length) {
          this._handleEvents();
        }
      }
    }
  }

  _handleEvents() {
    this.container.addEventListener('click', evt => {
      if (evt.target.classList.contains('cart__delete')) {
        const { id } = evt.target.dataset;
        this.deleteItem(id);
      }
    });
    
    this.buttonToggler.addEventListener('click', this.toggleCart.bind(this));
  }

  _initContainers() {
    this.container = document.querySelector('#cart-items');
    this.containerCounter = document.querySelector('#cart-counter');
    this.buttonToggler = document.querySelector('#cart__btn');
  }

  toggleCart() {
    this.open = !this.open;
    if (this.open) {
      this.container.classList.add('active');
    } else {
      this.container.classList.remove('active');
    }
  }

  // GET - для получения данных
  // POST - для отправки новых данных
  // PUT - для изменения уже имеющихся на серв. данных
  // DELETE - для удаления данных
  
  async deleteItem(id) {
    const find = this.items.find(cartItem => cartItem.id === id);
    try {
      if (find.amount > 1) {
        const data = await fetch(); //PUT -1
        if (!data.error) {
          find.amount--;
        }
      } else {
        const data = await fetch(); //DELETE
        if (!data.error) {
          this.items = this.items.filter(el => el.id !== id);
        }
      }
    }
    catch(err) {
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
        }).then(d => d.json()); //POST
        if (!data.error) {
          this.items.push(newItem);
        }
      } else {
        // const data = await fetch(); //PUT +1
        const data = await fetch(this.url + `/${ id }`, { // /cart/p1
          method: 'PUT',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ value: 1 }),
        }).then(d => d.json()); //POST
        if (!data.error) {
          find.amount++;
        }
      }
      this._render();
    }
    catch(err) {
      console.warn(err);
    }
  }
}
