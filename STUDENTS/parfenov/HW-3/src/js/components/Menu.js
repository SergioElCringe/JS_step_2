import List from "./LIST";
const url = 'https://raw.githubusercontent.com/GeoParf/FrontendLerning/main/menu.json';

export default class Menu extends List {
    constructor() {
        super(url, 'menu', 'ul')
        this.container = null;
    };


    _initContainers() {
        this.container = document.querySelector('#main_nav');
    };

    _handleEvents() {
        return true;
    };

};