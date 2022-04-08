import ListItem from './list-item.js';
export default class List {
    constructor(url, type) {
        this.url = url;
        this.items = [];
        this.type = type;
        this.stickerTypes = null;
        this._init();
    }

    _init() {
        this._fetchData(function (data) {
            this.items = data[this.type].items;
            this.stickerTypes = data[this.type].stickerTypes;
            this._initContainer();
            this._render();
            this._handleEvents();
        }.bind(this), this.url);
    }

    _fetchData(callback, url) {
        let data = [];
        if (url) {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState != 4) {
                    return;
                }
                data = JSON.parse(xhr.responseText);
                callback(data)
            }
        }
    }
    
    _render() {
        this.container.innerHTML = this.items.reduce((accum, current) => {
            const itemObj = new ListItem(current, this.type, this.stickerTypes);
            accum += itemObj.template;
            return accum;
        }, '');
        this._countAmount?.();
    }
}