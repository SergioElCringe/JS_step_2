import types from "./const/types";

function getTemplate(item, type) {
  return types[type].get(item);
}

export default class Item {
  constructor(item, type = 'catalog') {
    this.item = item;
    this.type = type;
    this.template = '';
    this._init();
  }

  _init() {
    this.template = getTemplate(this.item, this.type);
  }
};
