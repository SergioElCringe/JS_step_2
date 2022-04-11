import List from './list.js';
export default class Catalog extends List {
    constructor(url, type) {
        super(url, type);

    }
    
    _handleEvents() {
        this.container.addEventListener('click', e => {
            if(e.target.classList.contains('button_add')){
                const { title, price, imgfilename, id } = e.target.dataset;
                console.log({title, price, id, imgFileName: imgfilename});
            }
        });
    }
    
    _initContainer() {
        this.container = document.querySelector('#catalog');
        this.container.style.height = 'auto';
    }
}
