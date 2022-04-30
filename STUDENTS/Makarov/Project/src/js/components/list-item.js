import types from './constant/list-item-types.js';

export default class ListItem {
    constructor(item, type, stickerTypes = null) {
        this.template = '';
        this.item = item;
        this.stickerTypes = stickerTypes;
        this.type = type;
        this._init();
    }
    _init() {
        this.template = types[this.type].getItemTemplate(this.item, this.stickerTypes);
    }
}