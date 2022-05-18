<template>
  <div class="shopping_cart">
    <button @click="openCart = !openCart">
      <img src="../assets/img/basket.svg" />
      <div>
        Cart
        <span class="cart-counter">({{ totalCount }})</span>
        <span class="cart-prices">${{ totalPrice }}</span>
      </div>
    </button>
    <div class="cart__content" v-show="openCart">
      <div class="cart__close">
        <button class="cart__close__btn" @click="openCart = !openCart">Close the cart</button>
      </div>
      <hr>
      <div v-if="items.length > 0">
        <cartItem
          v-for="item of items"
          :key="item.id"
          :item="item"
          :productApi="productApi"
          @incrementAmount="incrementAmount"
          @deleteItem="deleteItem"
        />
        <hr />
        <div class="action">
          <div class="continue">
            <span>
              <router-link to="/Cart"><b>Continue</b></router-link>
            </span>
          </div>
          <div class="clear-all">
            <span id="remove" @click="getClearCart({ clearCart: true })"><b>Remove all products</b></span>
          </div>
        </div>
      </div>
      <div v-else>
        <p class="no-bascket">
          <b>There are no products. Select products to purchase from catalog.</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import cartItem from './items/CartItem.vue';
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  name: 'Cart',
  components: { cartItem },

  data() {
    return {
      openCart: false,
      interval: null,
    };
  },

  methods: {
    ...mapActions({
      getCart: 'Cart/getCart',
      getClearCart: 'Cart/clearCart',
      incrementAmount: 'Cart/incrementAmount',
      deleteItem: 'Cart/deleteItem',
    }),
  },

  computed: {
    ...mapState({
      items: state => state.Cart.items,
      productApi: state => state.Catalog.productApi,
    }),

    ...mapGetters({
      totalCount: 'Cart/totalCount',
      totalPrice: 'Cart/totalPrice',
    }),
  },

  async created() {
    await this.getCart();
    this.interval = setInterval(() => {
      this.getCart();
    }, 10000);
  },

  beforeUnmount() {
    window.clearInterval(this.interval);
    this.interval = null;
  },
};
</script>