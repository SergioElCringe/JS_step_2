import Item from "./LIST_ITEM";

export default class List {
	constructor(url, type) {
		this.items = [];
		this.url = url;
		this.type = type;
		this.error = '';
		this._init();
	}

	async _init() {
		try {
			this.items = await this._fetchData();
		}
		catch (err) {
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

	_render() {
		let result = '';

		this.items.forEach(item => {
			const newItem = new Item(item, this.type);
			result += newItem.template;
		});

		this.container.innerHTML = result;
	}

	_fetchData() {
		return fetch(this.url)
			.then(d => d.json())
			.catch(e => { throw e })
	}
}