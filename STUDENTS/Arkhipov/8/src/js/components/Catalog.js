import List from "./LIST";
const url = '/api/catalog';


export default class Catalog extends List {
	constructor(api, cart) {
		super(api, url, 'catalog')
		this.cart = cart;
		this.container = null;
	}

	_handleEvents() {
		this.container.addEventListener('click', evt => {
			if (evt.target.classList.contains('btn-add')) {
				const { name, price, imgurl, counter, id } = evt.target.dataset;
				this.cart.addItem({
					name, price, id,
					imgUrl: imgurl,
					counter: 1
				});
			}
		});
	}

	_initContainers() {
		this.container = document.querySelector('#catalog');
	}

}
