// CONTAINER
import Item from "./LIST_ITEM";

export default class List {
    constructor(url, type) { 
        this.items = [];
        this.url = url;
        this.info = null;
        this.prices = [];
        this._init();
        this.container = [];
        this.cart = '';
    }

    _init() {
        this._fetchData(function(data) {
            this._initContainers();
            this.items = data;
            this._render();
        }.bind(this));
    }

    _render() {
        let result = '';
        this.items.forEach(item => {
            const newItem = new Item(item, this.type)
            result += newItem.template;
        });

        this.container.innerHTML = result;
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
                };

                data = JSON.parse(xhr.responseText);
                callback(data);
            }
        }
    }

    _getPrice(callback) {
        let prices = [];

        if (this.url) {
            const reqPrices = new XMLHttpRequest();
            reqPrices.open('GET', 'https://raw.githubusercontent.com/schultznoan/FTP/main/fetchData/prices.json', true);
            reqPrices.send();

            reqPrices.onreadystatechange = function() {
                if (reqPrices.readyState != 4) {
                    return;
                };

                prices = JSON.parse(reqPrices.responseText);
                callback(prices);
            };
        };
    }
}

