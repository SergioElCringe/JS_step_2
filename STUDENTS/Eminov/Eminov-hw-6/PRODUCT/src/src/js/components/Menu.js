import List from "./general/LIST";
const url = '/api/menu';

export default class Menu extends List {
    constructor(type = 'menu') {
        super(url, type);
    }

    _initContainers() {
        this.container = document.querySelector('#main_nav');
    }
};