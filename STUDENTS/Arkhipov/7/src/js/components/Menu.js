import Item from "./LIST_ITEM";
import List from "./LIST";

const url = '/api/menu';

export default class Menu extends List {
	constructor(api, items) {
		super(api, url, 'menu')
		this.container = null;
		this.items = items;
	}

	_handleEvents() {
		return true
	}

	_initContainers() {
		this.container = document.querySelector('#menu-nav');
	}

	_render() {
		let result = '<ul>';

		this.items.forEach(item => {
			const newItem = new Item(item, this.type);
			result += newItem.template;
			return result
		})

		result += '</ul>';
		this.container.innerHTML = result;
	}
}
