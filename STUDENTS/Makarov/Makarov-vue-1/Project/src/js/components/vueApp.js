require("babel-polyfill");
import RequestManager from "./api/request-manager";
const requestManager = new RequestManager();

export default {
    el: '#vueApp',
    data: {
        rawData: [],
        catalog: [],
        stickerTypes: [],
        cart: [],
        ready: false,
        cartToggle: false,
        URL: '/api/lists',
        imgURLTemplate: 'https://raw.githubusercontent.com/MikhailErnstovich/my-ftp/master/img/'
    },
    methods: {
        async getData() {
            try {
                const data = await requestManager.send(this.URL);
                this.rawData = data;
                this.stickerTypes = data.catalog.stickerTypes;
                this.catalog = data.catalog.items;
                this.cart = data.cart.items;
            } catch (err) {
                throw err;
            } finally {
                this.ready = !!this.rawData;
            }
        },
        async addItem(id) {
            const response = await requestManager.send(`/api/catalog/${id}`, 'POST', JSON.stringify({ id: id }));
            if (response) {
                const item = this.cart.find(el => el.id === id);
                if (item) {
                    item.amount++;
                } else {
                    const newItem = JSON.stringify(this.catalog.find(el => el.id === id));
                    this.cart.push(JSON.parse(newItem));
                }
            }
        },
        async removeItem(id) {
            const response = await requestManager.send(`/api/cart/${id}`, 'DELETE');
            if (response) {
                this.cart = this.cart.filter(el => el.id !== id)
            }
        },
        async changeItemAmount(id, value) {
            const item = this.cart.find(el => el.id === id);
            if (item.amount === 1 && value === -1) {
                await this.removeItem(id);
            } else {
                const response = await requestManager.send(`/api/cart/${id}`, 'PUT', JSON.stringify({ value: value }));
                if (response) {
                    const selected = this.cart.find(item => item.id === id);
                    if (selected) {
                        selected.amount += value;
                    }
                }
            }
        },
        showCart() {
            this.cartToggle = !this.cartToggle;
        },
        getStickerContent(stickerNum) {
            return this.stickerTypes[stickerNum].charAt(0).toUpperCase() + this.stickerTypes[stickerNum].slice(1)
        },
    },
    computed: {
        cartCounter: function () {
            return this.cart.reduce((acc, cur) => acc + cur.amount, 0);
        },
    },
    async created() {
        await this.getData();
    }
}