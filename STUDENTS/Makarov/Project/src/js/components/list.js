export default class List {
    constructor(url, imgURLTemplate, type) {
        this.url = url;
        this.items = [];
        this.imgURLTemplate = imgURLTemplate;
        this.type = type;
        this._init();
    }
    _init() {
        this._fetchData(function(data) {
            this.items = data[this.type].items;
            switch (this.type) {
                case 'catalog': 
                    this.stickerTypes = data[this.type].stickerTypes;
                    this._initContainer();
                    this._render();
                    this._handleEvents();
                    break;
                case 'cart': 
                    this._countAmount();
                    this._initContainer();
                    this._render();
                    this._handleEvents();
                    break;
                default:
                    console.log('New List was created');
            }
        }.bind(this));
    }
    _fetchData(callback) {
        let data = [];
        if (this.url) {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', this.url, true);
            xhr.send();
            xhr.onreadystatechange = function() {
                if (xhr.readyState != 4) {
                    return;
                }
                data = JSON.parse(xhr.responseText);
                callback(data)
            }
        }
    }
}