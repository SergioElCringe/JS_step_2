<template>
  <div>
    <div class="row cart_items_row">
      <div class="col">
        <div v-if="items.length > 0" class=" cart_item carts-listen flex-columnalign-items-lg-center align-items-start justify-content-start">
          <ShoppingCartItem 
            v-for="item of items"
            :key="item.id"
            :item="item"
          />
        </div>
        <p class="no-bascket" v-else><b>There are no products. Select products to purchase from catalog.</b></p>
      </div>
    </div>
    <div class="row row_cart_buttons">
      <div class="col">
        <div class="cart_buttons d-flex flex-lg-row flex-column align-items-start justify-content-start">
          <div class="button continue_shopping_button"><router-link to="/categories">Continue shopping</router-link></div>
          <div class="cart_buttons_right ml-lg-auto flex">
            <div class="button clear_cart_button action"><button @click="getClearCart({ clearCart: true })">Clear cart</button></div>
            <div class="button update_cart_button"><router-link to="/cart">Update cart</router-link></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingCartItem from "./items/ShoppingCartItem.vue";
import { mapActions, mapState } from 'vuex';

export default {
  name: "ShoppingCart",
  components: { ShoppingCartItem },

  methods: {
    ...mapActions({
      getCart: 'Cart/getCart',
      getClearCart: 'Cart/clearCart',
    }),
  },

  computed: {
    ...mapState({
      items: state => state.Cart.items,
    }),
  },

  async created() {
    await this.getCart();
  },
};
</script>

<style>
</style>