const PRODUCTS_API = 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products';

export default {
	catalog: {
		get(item) {
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
		},
		_getProductExtraTemplate(categoryId) {
			const category = categoryId ? this._getCategory(categoryId) : null;
			return category ? `
        <div class="product_extra ${category.className}">
          <a href="categories.html">${category.text}</a>
        </div>
      ` : '';
		},
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
		},
	},
	cart: {
		get(item) {
			const { imgUrl, name, price, amount, id } = item;
			return `
        <div class="cart__item"">
        <img class="cart__item__img" src="${PRODUCTS_API + imgUrl}">
        <div class="cart__item__info">
          <span>${name}</span>
          <div class="price__block">
            <span>$${price}</span>
				<div class="cart__quantity" > 
					<button class="cart__delete cart__action-btn" data-id="${id}">-</button>
					<span>${amount}</span>
					<button class="cart__add cart__action-btn" data-id="${id}">+</button>
				</div>
          </div>
        </div>
				<div>
				$${price * amount}
				</div>
        <button class="cart__delete-all cart__action-btn" data-id="${id}">
        X
        </button>
    </div>
      `;
		}
	},
	menu: {
		get(item) {
			const subMenu = !!item.items?.length || false;
			const { text, link } = item;
			let result = '';

			if (!subMenu) {
				result += `<li><a href="${link}">${text}</a></li>`;
			} else {
				result += `<li class="hassubs"><a href="${link}">${text}</a>
				${this._createSubMenu(item.items)}</li>
				`;
			}
			return result;
		},

		_createSubMenu(items) {
			let result = '<ul>';
			items.forEach(subMenu => {
				const { link, text } = subMenu;
				result += `<li><a href="${link}">${text}</a></li>`
			})
			result += '</ul>'
			return result;
		}

	}

};
