import List from "./LIST";
const url = '/api/menu';

export default class Menu extends List {
    constructor(api) {
        super(api, url, 'menu')
        this.container = null;
    };


    _initContainers() {
        this.container = document.querySelector('#main_nav');
    };

    _handleEvents() {
        return true;
    };

};