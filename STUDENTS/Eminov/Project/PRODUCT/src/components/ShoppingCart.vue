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

export default {
  name: "ShoppingCart",
  components: { ShoppingCartItem },
  data() {
    return {
      items: [],
      api: {
        productApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products',
        url: '/api/cart',
      },
    };
  },

  methods: {
    async fetchCart() {
      try {
        const data = await $api.send(this.api.url, 'GET');
        this.items = data.items;
      } catch (err) {
        console.warn(err);
      };
    },
  },

  created() {
    this.fetchCart();
  },
};
</script>

<style>
</style>