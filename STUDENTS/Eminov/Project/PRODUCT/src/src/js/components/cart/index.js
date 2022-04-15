import './style.css';
import item from "../items"

export default {
    name: 'cart',
    components: { item },

    data() {
        return {
            items: [],
            openCart: false,
            cartIcon: 'https://raw.githack.com/SergioElCringe/JS_step_1/main/students/Eminov/Project/Eminov-hw-8/src/assets/img/backet.svg',
            api: {
                productApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products',
                url: '/api/cart'
            },
            actions: {
                type: 'cart',
                changeItem: this.changeItem,
                deleteItem: this.deleteItem
            }
        };
    },

    methods: {
        async changeItem(item, value, price) {
            try {
                const data = await this.$api.send(this.api.url + `/${item.id}`, 'PUT', { value, price });
    
                if (!data.error) {
                    if (value == -1 && item.amount == 1) {
                        await this.deleteItem(false, item.id);
                    } else {
                        item.amount += value;
                        item.totalPrice += price;
                    };
                };
            } catch (err) {
                console.warn(err);
            };
        },

        async deleteItem(removeAllItems, id = '') {
            try {
                if (!removeAllItems) {
                    const find = this.items.find(item => item.id == id);
                    const data = await this.$api.send(this.api.url, 'DELETE', { removeAllItems, id: find.id })

                    if (!data.error) {
                        const index = this.items.indexOf(find);
                        this.items.splice(index, 1)
                    };
                } else {
                    const data = await this.$api.send(this.api.url, 'DELETE', { removeAllItems })

                    if (!data.error) {
                        this.items = [];
                    };
                }
            } catch (err) {
                console.warn(err);
            };
        },
    },

    computed: {
        totalPrice() {
            return this.items.reduce((acc, item) => {
                return acc += item.totalPrice;
            }, 0);
        },

        totalCount() {
            return this.items.reduce((acc, item) => {
                return acc += item.amount;
            }, 0);
        }
    },

    async created() {
        try {
            const data = await this.$api.send(this.api.url, 'GET');
            this.items = data.items;
        } catch (err) {
            console.warn(err);
        };
    },

    template: `
        <div class="shopping_cart">
            <button @click="openCart = !openCart">
                <img :src="cartIcon" height="20px" width="20px">
                <div>Cart
                    <span class="cart-counter">({{ totalCount }})</span>
                    <span class="cart-prices">{{ totalPrice }}$</span>
                </div>
            </button>
            <div class="cart__content" v-show="openCart">
                <div v-if="items.length > 0">
                    <item 
                    v-for="item of items"
                    :key="item.id"
                    :item="item"
                    :api="api"
                    :actions="actions"/>
                    <hr>
                    <div class="action">
                        <div class="continue">
                            <span>
                                <a href="cart.html"><b>Continue</b></a>
                            </span>
                        </div>
                        <div class="clear-all">
                            <span id="remove" @click="deleteItem(true)"><b>Remove all products</b></span>
                        </div>
                    </div> 
                </div>
                <div v-else>
                    <p class="no-bascket"><b>There are no products. Select products to purchase from catalog.</b></p>
                </div>
            </div>
        </div>    
    `
}