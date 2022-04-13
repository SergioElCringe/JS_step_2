import List from "./LIST";
const baseURL = 'https://raw.githubusercontent.com/SergioElCringe/JS_step_2/Loginov-hw-3/STUDENTS/Loginov/PROJECT/src/js/components/';
const url = baseURL + '/menu.json';

export default class Navigation extends List {
    constructor(type = 'menu') {
        super(type);
        this.url = url;
    }

    _initContainers() {
        this.container = document.querySelector('#main_nav');
    }
};