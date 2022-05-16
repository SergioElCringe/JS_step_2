import types from "./const/types";

export default class Item {
    
    constructor (item, type = 'catalog' ) {
        this.item = item;
        this.type = type;
        this.template = null;
        this._init();
    }

    _defineType(item, type) {
        return types[type].get(item);
    }

    _init() {
        this.template = this._defineType(this.item, this.type);
    }
}