import List from "./LIST"
const url = '/api/catalog';


export default class Catalog extends List {
  constructor(api , cart, type) {
    super(api , url, type = 'catalog')
    this.cart = cart;
    this.container = null;
  }
  _initContainers() {
    this.container = document.querySelector('#catalog');
    this._render();
    this._handleEvents();
  }
  _handleEvents(evt) {
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
  getProductExtraTemplate(categoryId) {
    const category = categoryId ? this.getCategory(categoryId) : null;
    return category ? `
      <div class="product_extra ${category.className}">
        <a href="categories.html">${category.text}</a>
      </div>
    ` : '';
  }

}