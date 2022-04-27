import List from "./LIST";
const baseURL = '/api';
const url = baseURL + '/menu';

export default class Navigation extends List {
    constructor(type = 'menu') {
        super(type);
        this.url = url;
    }

    _initContainers() {
        this.container = document.querySelector('#main_nav');
    }
};