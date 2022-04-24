require("babel-polyfill");
import ListItem from './list-item.js';
export default class List {
    constructor(url, type) {
        this.url = url;
        this.items = [];
        this.type = type;
        this.stickerTypes = null;
        this._init();
    }

    async _init() {
        try {
            const response = await this._fetchData(this.url);
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

    async _fetchData(url) {
        return await fetch(url).then(d => d.json()).catch(err => {throw err});
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