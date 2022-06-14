// CONTAINER
import Item, { hasType } from "./LIST_ITEM";
import types from "./const/types";

function getCartHeaderTemplate(type) {
    return types[type]?.getCartHeader ?? (() => '');
};


export default class List {
    constructor(api, url, type = 'catalog') {
        this.items = [];
        this.url = url;
        if (!hasType(type)) {
            throw new Error(`Unknown type: ${type}`)
        }
        this.error = '';
        this.type = type;
        this.request = api;
        this.cartHeader = getCartHeaderTemplate(this.type);
        this._init();
    };

    async _init() {
        try {
            const data = await this.request.send(this.url, 'GET');
            this.items = data;
        }
        catch (err) {
            this.error = err;
        }
        finally {
            this._initContainers();
            this._render();
            this._handleEvents();
        };
    };


    _render() {
        const result = this.items.map(item => {
            const newItem = new Item(item, this.type)
            return newItem.template;
        }).join('');

        if (!this.container) {
            this._initContainers();
        };

        this.container.innerHTML = this.cartHeader(this.aggregate || {}) + result;
    };
};




