<template>
  <div class="row cart_items_row">
    <div class="col">
      <div v-if="items.length > 0" class=" cart_item carts-listen flex-columnalign-items-lg-center align-items-start justify-content-start">
        <ShoppingCartItem 
          v-for="item of items"
          :key="item.id"
          :item="item"
          :api="api"
        />
      </div>
      <p class="no-bascket" v-else><b>There are no products. Select products to purchase from catalog.</b></p>
    </div>
  </div>
</template>

<script>
import ShoppingCartItem from "./items/ShoppingCartItem.vue";
import { mapActions, mapState } from 'vuex';

export default {
  name: "ShoppingCart",
  components: { ShoppingCartItem },
  data() {
    return {
      api: {
        productApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products',
        url: '/api/cart',
      },
    };
  },

  methods: {
    ...mapActions({
      getCart: 'Cart/getCart',
    }),
  },

  computed: {
    ...mapState({
      items: state => state.Cart.items,
    }),
  },

  async created() {
    await this.getCart(this.api.url);
  },
};
</script>

<style>
</style>