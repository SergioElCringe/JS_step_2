require("babel-polyfill");
export default class NavMenu {
    constructor(url, requestManager) {
        this.url = url;
        this.container = null;
        this.menuData = [];
        this.requestManager = requestManager;
        this._init();
    }

    async _init() {
        const response = await this.requestManager.send(this.url, 'GET');
        this.menuData = response;
        this._initContainer();
        this._render();
    }

    _createItem(item) {
        const { text, link, items } = item;
        const hasSubMenu = !!item.items?.length || false;
        if (!hasSubMenu) {
            return `<li><a href="${link}">${text}</a></li>`;
        } else {
            return `
                <li class='hassubs'>
                    <a href="${link}">${text}</a>
                    ${this._createSubMenu(items)}
                </li>
            `;
        }
    }

    _createSubMenu(items) {
        const subMenuContent = items.reduce((accum, current) => {
            accum += `<li><a href="${current.link}">${current.text}</a></li>`
            return accum;
        }, '');
        return `<ul>${subMenuContent}</ul>`;
    }
    _initContainer() {
        this.container = document.querySelector('#main_nav');
    }
    _render() {
        const result = this.menuData.reduce((accum, current) => {
            accum += this._createItem(current);
            return accum;
        }, '');

        this.container.innerHTML = `<ul>${result}</ul>`

    }
}