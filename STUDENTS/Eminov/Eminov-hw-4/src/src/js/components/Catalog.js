import Categories from "./Categories";

export default class Catalog extends Categories {
    constructor(cart, type = 'catalog') {
        super(cart, type);
    }

    _initContainers() {
        this.container = document.querySelector('#catalog');

        if (this.container) {
            this.container.addEventListener('click', this._handleEventsAdd.bind(this));
        };
    }
};