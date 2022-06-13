// CONTAINER
import Item, { hasType } from "./LIST_ITEM";

export default class List {
    constructor(url, type = 'catalog') {
        this.items = [];
        this.url = url;
        if (!hasType(type)) {
            throw new Error(`Unknown type: ${type}`)
        }
        this.type = type;
        this._init();
        this.error = '';
    };

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
                this._handleEvents();
            }
        }
    };

    _render() {
        const result = this.items.map(item => {
            const newItem = new Item(item, this.type)
            return newItem.template;
        }).join('');
        if (!this.container) {
            this._initContainers();
        }
        this.container.innerHTML = result;
    };

    async _fetchData() {
        try {
            const d = await fetch(this.url); // метод позволяющий получить рессурсы по сети асинхронно
            return await d.json();
        } catch (err) {
            throw err;
        }
    };
};



