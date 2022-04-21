import './style.css';
import item from "../items"

export default {
    name: 'cart',
    components: {
        item
    },

    data() {
        return {
            items: [],
            openCart: false,
            cartIcon: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_2/init/PROJECT/Front_V_2/src/assets/img/shopping.svg',
            api: {
                productApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products',
                url: '/api/cart'
            },
            type: 'cart'
        };
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
                      :actions="actions"
                    />
                    <hr>
                    <div class="action">
                        <div class="continue">
                            <span>
                                <a href="cart.html"><b>Continue</b></a>
                            </span>
                        </div>
                        <div class="clear-all">
                            <span id="remove"><b>Remove all products</b></span>
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