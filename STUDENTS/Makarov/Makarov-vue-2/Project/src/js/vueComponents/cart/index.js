import "./style.css"
import CartItem from "./CartItem";

export default {
    name: "cart",
    components: { CartItem },
    data: function () {
        return {
            cartToggle: false,
            cart: [],
            URL: "/api/lists",
            imgURLTemplate: "https://raw.githubusercontent.com/MikhailErnstovich/my-ftp/master/img/"
        }
    },
    methods: {
        showCart() {
            this.cartToggle = !this.cartToggle;
        },
        async getData() {
            try {
                const data = await this.$api.send(this.URL);
                this.cart = data.catalog.items;
            } catch (err) {
                throw err;
            }
        },
    },
    computed: {
        cartCounter: function () {
            return this.cart.reduce((acc, cur) => acc + cur.amount, 0);
        },
    },
    async created() {
        try {
            await this.getData();
        } catch (err) {
            console.warn(err);
        }
    },
    template: `
        <div class="shopping_cart">
            <button id="cartToggle" @click="showCart()">
                <img class="cart__icon"
                    src="https://raw.githubusercontent.com/MikhailErnstovich/my-ftp/master/img/shopping.svg"
                    alt="cart icon">
                <div>Cart <span id="cart__counter">({{ cartCounter }})</span></div>
            </button>
            <div class="cart__content" id="cart__items" v-show="cartToggle">
                <CartItem 
                    v-for="item in cart"
                    :key="item.id"
                    :item="item"
                    :imgURLTemplate="imgURLTemplate"
                    :cart="cart"
                />
            </div>
        </div>
    `
}