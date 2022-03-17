import List from "./LIST";
const url = '';

export default class Cart extends List {
  constructor() {
    super(url, 'cart');
    this.container = null;
    this.containerCounter = null;
    this.counter = 0;
  }

  _handleEvents() {
    // this.container.addEventListener('click', evt => {
    //   if (evt.target.classList.contains('btn-add')) {
    //     const { name, price, imgurl, id } = evt.target.dataset;
    //     this.cart.addItem({
    //       name, price, id, 
    //       imgUrl: imgurl
    //     });
    //   }
    // });
    return true;
  }

  _initContainers() {
    this.container = document.querySelector('#cart-items');
    this.containerCounter = document.querySelector('#cart-counter');
  }

}
