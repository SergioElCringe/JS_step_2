import types from "../const/types";

export default class Item {
    constructor(item, type = 'catalog') {
        this.template = null;
        this.item = item;
        this.type = type;
        this._init();
    }

    _defineType(item, type) {
        return types[type].getTemplate(item);

    }

    _init() {
        this.template = this._defineType(this.item, this.type);
    }
};