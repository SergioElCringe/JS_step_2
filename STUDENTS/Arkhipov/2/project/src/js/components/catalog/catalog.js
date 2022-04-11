import { data } from "./catalogData";

const ENUMS = {
	category: {
		1: 'new',
		2: 'hot',
		3: 'sale',
	},
};

import Cart from '../cart/cart'


const PRODUCTS_API = 'https://raw.githubusercontent.com/SergioElCringe/JS_step_2/init/PROJECT/BASE__PROJECT/images/';

export default class Catalog {
	constructor() {
		this.items = [];
		this.container = null;
		this.cart = null;
		this._init();
	}
	_init() {
		this.items = data.PRODUCTS;
		this.cart = new Cart();
		this.container = document.querySelector('#catalog');
		this._render();
		this._handleEvents();
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

	_createTemplate(item) {
		const { imgUrl, name, price, category, id } = item;
		return `
    <div class="product">
      <div class="product_image"><img src="${PRODUCTS_API + imgUrl}" alt=""></div>
      ${this._getProductExtraTemplate(category)}
      <div class="product_content">
        <div class="product_title"><a href="product.html">${name}</a></div>
        <div class="product_price">$${price}</div>
      </div>
      <div 
        class="button button_custom btn-add"
        data-imgurl="${imgUrl}"
        data-name="${name}"
        data-price="${price}"
        data-id="${id}"
      >
        <span>Add</span>
      </div>
    </div>
    `;
	}

	_getProductExtraTemplate(categoryId) {
		const category = categoryId ? this._getCategory(categoryId) : null;
		return category ? `
      <div class="product_extra ${category.className}">
        <a href="categories.html">${category.text}</a>
      </div>
    ` : '';
	}

	_getCategory(categoryId) {
		let className, text;
		switch (categoryId) {
			case 1: {
				className = 'product_new';
				text = 'New';
				break;
			}

			case 2: {
				className = 'product_hot';
				text = 'Hot';
				break;
			}

			default: {
				className = 'product_sale';
				text = 'Sale';
			}
		};
		return { className, text };
	}

	_render() {
		let result = '';

		this.items.forEach(item => {
			result += this._createTemplate(item);
		});

		this.container.innerHTML = result;
	}
}


