const baseURL = 'https://raw.githubusercontent.com/SergioElCringe/JS_step_2/Loginov-hw-3/STUDENTS/Loginov/PROJECT/src/js/components/';
const url = baseURL + '/menu.json';

export default class Navigation extends List {
    container = null;
    items = null;
    constructor(type = 'menu') {
        super(url, type);
    }

    _initContainers() {
        this.container = document.querySelector('#main_nav');
        this._render();
    }

    _render() {
        this.container.innerHTML = this.createMenu(this.items);
    }
};