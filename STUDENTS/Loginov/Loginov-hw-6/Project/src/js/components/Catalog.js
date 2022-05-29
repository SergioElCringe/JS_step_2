import List from "./LIST";
const url ='/api/catalog';

export default class Catalog extends List {
  constructor(cart) {
    super(url)
    this.cart = cart;
    this.container = null;
  }

  _handleEvents() {
    this.container.addEventListener('click', evt => {
      if (evt.target.classList.contains('btn-add')) {
        const { name, price, imgurl, id } = evt.target.dataset;
        this.cart.addItem({
          name, price, id, 
          imgUrl: imgurl
        });
      }
    });
  }

  _initContainers() {
    this.container = document.querySelector('#catalog');
  }

}
