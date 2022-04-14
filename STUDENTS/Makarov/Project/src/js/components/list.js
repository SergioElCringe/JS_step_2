require("babel-polyfill");
import ListItem from './list-item.js';
export default class List {
    constructor(url, type, requestManager) {
        this.url = url;
        this.items = [];
        this.type = type;
        this.stickerTypes = null;
        this.requestManager = requestManager;
        this._init();
    }

    async _init() {
        try {
            const response = await this.requestManager.send(this.url, 'GET');
            this.items = response[this.type].items;
            this.stickerTypes = response[this.type].stickerTypes;
        } catch(err) {
            throw err;
        } finally {
            this._initContainer();
            this._render();
            this._handleEvents();
        };
    }
    
    _render() {
        this.container.innerHTML = this.items.reduce((accum, current) => {
            const itemObj = new ListItem(current, this.type, this.stickerTypes);
            accum += itemObj.template;
            return accum;
        }, '');
        this._countAmount?.();
    }
}