import List from "./general/LIST";
const url = 'https://raw.githubusercontent.com/schultznoan/FTP/main/fetchData/menu.json';

export default class Menu extends List {
    constructor(type) {
        super(url, type = 'menu');
    }

    _initContainers() {
        this.container = document.querySelector('#main_nav');
    }
};