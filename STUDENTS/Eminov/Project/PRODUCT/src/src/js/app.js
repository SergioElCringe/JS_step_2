// import Cart from "./components/Cart";
// import Catalog from "./components/Catalog";
// import Menu from "./components/Menu";
// import Categories from "./components/Categories";
// import Description from "./components/Description";
// import ShoppingCart from "./components/ShoppingCart";
// import Contact from "./components/Contact";
// import ShippingMethods from "./components/ShippingMethods";

// export default function(api) {
//     const cart = new Cart(api);
//     const catalog = new Catalog(cart, api);
//     const menu = new Menu(api);
//     const description = new Description(cart, api);
//     const categories = new Categories(cart, api);
//     const shipping = new ShippingMethods(api);
//     const shoppingCart = new ShoppingCart(shipping, api);
//     const contact = new Contact(api);
// };

export default {
    el: '#app',

    data: {
        urlCatalog: '/api/catalog',
        urlCart: '/api/cart',
        itemsCatalog: [],
        itemsCart: [],
        productsApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products/',
        open: false
    },

    methods: {
        toggleCart() {
            this.open = !this.open;
        },

        async addItem(item) {
            const { id, imgUrl, name, price, totalPrice = price, amount = 1 } = item;
            const find = this.itemsCart.find(item => item.id == id);

            if (!find) {
                const newItem = { id, imgUrl, name, price, totalPrice, amount };

                try {
                    const data = await fetch(this.urlCart, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(newItem)
                    });

                    if (!data.error) {
                        this.itemsCart.push(newItem)
                    };
                } catch (err) {
                    console.warn(err);
                };
            };
        },
        async changeItem(id, value, price) {
            const find = this.itemsCart.find(item => item.id == id);

            try {
                const data = await fetch(this.urlCart + `/${find.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ value, price })
                });

                if (!data.error) {
                    if (value == -1 && find.amount == 1) {
                        await this.deleteItem(false, find.id);
                    } else {
                        find.amount += value;
                        find.totalPrice += price;
                    };
                };
            } catch (err) {
                console.warn(err);
            };
        },
        async deleteItem(removeAllItems, id = '') {
            try {
                if (!removeAllItems) {
                    const find = this.itemsCart.find(item => item.id == id);
                    const data = await fetch(this.urlCart, {
                        method: 'DELETE',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ removeAllItems, id: find.id })
                    });

                    if (!data.error) {
                        const index = this.itemsCart.indexOf(find);
                        this.itemsCart.splice(index, 1);
                    };
                } else {
                    const data = await fetch(this.urlCart, {
                        method: 'DELETE',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ removeAllItems })
                    });

                    if (!data.error) {
                        this.itemsCart = [];
                    };
                }
            } catch (err) {
                console.warn(err);
            };
        },

        category(category) {
            let className, text;

            switch (category) {
                case 1:
                    {
                        className = 'product_new';
                        text = 'New';
                        break;
                    };

                case 2:
                    {
                        className = 'product_sale';
                        text = 'Sale';
                        break;
                    };

                default:
                    {
                        className = 'product_hot';
                        text = 'Hot';
                    };
            };

            return { className, text };
        }
    },

    computed: {
        totalCount() {
            let totalCount = 0;

            this.itemsCart.forEach(item => {
                totalCount += item.amount;
            });

            return totalCount;
        },

        totalPrice() {
            let totalPrice = 0;

            this.itemsCart.forEach(item => {
                totalPrice += (+item.totalPrice);
            });

            return totalPrice;
        },
    },

    async created() {
        try {
            const catalog = await fetch(this.urlCatalog).then(d => d.json());
            const cart = await fetch(this.urlCart).then(d => d.json());
            this.itemsCatalog = catalog;
            this.itemsCart = cart.items;
        } catch (err) {
            console.warn(err);
        };
    }
};