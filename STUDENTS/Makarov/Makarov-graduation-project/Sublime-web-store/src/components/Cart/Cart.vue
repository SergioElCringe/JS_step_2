<template>
  <div class="shopping_cart">
    <button id="cartToggle" @click="showCart()">
      <img
        class="cart__icon"
        src="https://raw.githubusercontent.com/MikhailErnstovich/my-ftp/master/img/shopping.svg"
        alt="cart icon"
      />
      <div>
        Cart
        <span id="cart__counter">({{ cartCounter }})</span>
      </div>
    </button>
    <div class="cart__content" id="cart__items" v-show="cartToggle">
      <CartItem
        v-for="(item, i) in items"
        :key="i"
        :item="item"
        :imgURLTemplate="imgURLTemplate"
        @remove="removeItem"
        @increment="incrementItemAmount"
        @decrement="decrementItemAmount"
      />
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue"
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Cart",
  components: { CartItem },
  data: function () {
    return {
      cartToggle: false,
      URL: "/api/cart",
      imgURLTemplate:
        "https://raw.githubusercontent.com/MikhailErnstovich/my-ftp/master/img/",
      interval: null,
    };
  },
  methods: {
    showCart() {
      this.cartToggle = !this.cartToggle;
    },

    ...mapActions({
      getCart: "Cart/getCart",
      removeItem: "Cart/removeItem",
      incrementItemAmount: "Cart/incrementItemAmount",
      decrementItemAmount: "Cart/decrementItemAmount"
    }),
  },

  computed: {
    ...mapGetters({
      items: "Cart/getCartItems",
      cartCounter: "Cart/cartCounter"
    }),
  },
  
  async created() {
    try {
      await this.getCart();
      this.interval = setInterval(() => this.getCart(), 10000)
    } 
    catch (err) {
      throw err;
    }
  },
  beforeUnmount() {
    window.clearInterval(this.interval);
    this.interval = null;
  }
};
</script>

<style>
.shopping_cart {
	display: inline-block;
  vertical-align: bottom;
}
.shopping_cart a svg {
	display: inline-block;
	width: 20px;
	height: 20px;
	vertical-align: middle;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.shopping_cart a:hover svg,
.shopping_cart a:hover div {
	fill: #e95a5a;
	color: #e95a5a;
}
.shopping_cart a div {
	display: inline-block;
	vertical-align: middle;
	font-size: 14px;
	font-weight: 500;
	color: #1b1b1b;
	margin-left: 13px;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.shopping_cart a div span {
	margin-left: 4px;
}

#cartToggle {
  display: flex;
  justify-content: space-around;
  width: calc(20px + 5em);
  border: none;
  background: none;
  cursor: pointer;
}

.cart__icon {
  width: 20px;
}

.cart__content {
  position: absolute;
  left: -200px;
  top: 30px;
  flex-direction: column;
  width: 300px;
  min-height: 200px;
  padding: 0 10px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 0 5px #6c6a74;
  color: black;
}

.cart-item {
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  border-bottom: 1px solid #dddddd;
}
.cart-item a:first-child {
  display: flex;
}

.cart-item__img {
  width: 40px;
  height: auto;
  object-fit: contain;
  cursor: pointer;
}

.cart-item__info {
  display: flex;
  flex-direction: column;
}
.cart-item__title,
.cart-item__title:active,
.cart-item__title:visited {
  color: #000;
}
.cart-item__title:hover{
  color: #dc3545;
}
.cart__delete-btn {
  display: block;
  background: none;
  border: none;
  outline: none;
  font-size: 1.5em;
  cursor: pointer;
}

.cart__delete-btn:focus {
  border: none;
  outline: none;
}

.cart__delete-btn:hover {
  color: #dc3545;
}

.cart-item__order {
  display: flex;
  flex-direction: column;
}

.cart-item__price::before {
  content: "Price:";
  margin-right: 15px;
}

.cart-item__price::after {
  content: "$";
}

.cart-item__amount::before {
  content: "Amount: ";
  margin-right: 15px;
}

.cart-item__btn {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 5px;
  text-align: center;
  cursor: pointer;
  color: #1b1b1b;
}
.cart-item__btn:hover {
  color: #dc3545;
}
</style>