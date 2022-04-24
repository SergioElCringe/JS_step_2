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
			const { imgUrl, name, price, counter, id } = item;
			return `
        <div class="cart__item" id="${id}">
        <img class="cart__item__img" src="${PRODUCTS_API + imgUrl}">
        <div class="cart__item__info">
          <span>${name}</span>
          <div class="price__block">
            <span>$${price}</span>
				<div class="cart__quantity" > 
					<span data-quantity="-">-</span>
					<span>${counter}</span>
					<span data-quantity="+">+</span>
				</div>
          </div>
        </div>
				<div>
				$${price * counter}
				</div>
        <div class="cart__btn-del">
        X
        </div>
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
