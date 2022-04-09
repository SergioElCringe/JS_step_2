import List from "./general/LIST";
const url = '/api/menu';

export default class Menu extends List {
    constructor(api, type = 'menu') {
        super(url, api, type);
    }

    _initContainers() {
        this.container = document.querySelector('#main_nav');
    }
};