<template>
  <div class='shopping_cart'>
    <button id='cartToggle' @click='showCart()'>
      <img
        class='cart__icon'
        src='https://raw.githubusercontent.com/MikhailErnstovich/my-ftp/master/img/shopping.svg'
        alt='cart icon'
      />
      <div>
        Cart
        <span id='cart__counter'>({{ cartCounter }})</span>
      </div>
    </button>
    <div class='cart__content' id='cart__items' v-show='cartToggle'>
      <CartItem
        v-for='item in items'
        :key='item.id'
        :item='item'
        :imgURLTemplate='imgURLTemplate'
        @remove='removeItem'
        @increment='incrementItemAmount'
        @decrement='decrementItemAmount'
      />
    </div>
  </div>
</template>

<script>
import CartItem from './CartItem.vue'
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'Cart',
  components: { CartItem },
  data: function () {
    return {
      cartToggle: false,
      URL: '/api/cart',
      imgURLTemplate:
        'https://raw.githubusercontent.com/MikhailErnstovich/my-ftp/master/img/',
    };
  },
  methods: {
    showCart() {
      this.cartToggle = !this.cartToggle;
    },

    ...mapActions({
      getCart: 'Cart/getCart',
      removeItem: 'Cart/removeItem',
      incrementItemAmount: 'Cart/incrementItemAmount',
      decrementItemAmount: 'Cart/decrementItemAmount'
    }),
  },

  computed: {
    ...mapGetters({
      items: 'Cart/getCartItems',
      cartCounter: 'Cart/cartCounter'
    }),
  },
  
  async created() {
    try {
      await this.getCart();
    } 
    catch (err) {
      throw err;
    }
  },
};
</script>

<style>
#cartToggle {
  display: flex;
  justify-content: space-around;
  width: calc(20px + 5em);
  border: none;
  background: none;
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

.cart-item__img {
  width: 40px;
  height: auto;
  object-fit: contain;
}

.cart-item___info {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  content: 'Price:';
  margin-right: 15px;
}

.cart-item__price::after {
  content: '$';
}

.cart-item__amount::before {
  content: 'Amount: ';
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