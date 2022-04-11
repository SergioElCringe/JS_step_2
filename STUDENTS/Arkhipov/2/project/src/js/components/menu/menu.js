import { data } from "./menuData";

export default class Menu {
	constructor() {
		this.items = [];
		this.container = null;
		this._init();
	}

	_init() {
		this.container = document.querySelector('#menu-nav');
		this.items = data.menuData;
		this._render();
	}

	_render() {
		this.container.innerHTML = this._createTemplate(this.items);
	}

	_createTemplate(items) {
		let result = '<ul>';
		items.forEach(item => {
			result += this._createItem(item);
		});
		result += '</ul>';
		return result;
	}

	_createItem(item) {
		const subMenu = !!item.items?.length || false; // это решение честно подсмотрел(хотя про него знал). Проерка наличия массива, существует ли он вообще или нет? (?)не будет давать ошибку, а просто undefined(false)
		const { link, text } = item;
		let result = '';
		if (!subMenu) {
			result += `<li><a href="${link}">${text}</a></li>`;
		} else {
			result += `
        <li class="hassubs">
          <a href="${link}">${text}</a>
          ${this._createTemplate(item.items)}
        </li>
      `;
		};
		return result;
	}
}
