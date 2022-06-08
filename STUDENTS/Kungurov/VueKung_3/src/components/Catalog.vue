<template>
  <div class="product_grid" id="catalog">
    <catalogItem v-for="item of items" :key="item.id" :item="item" :imgApi="imgApi" />
  </div>
</template>

<script>
import catalogItem from '../components/items/catalogItem.vue'
export default {
name: 'Catalog',
  components: { catalogItem },
  data() {
    return {
      items: [],
      url: '/api/catalog',
      imgApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products',
      error: null,
    };
  },

  methods: {
    addItem(item) {
      this.$parent.$refs.cart.addItem(item);
    },
  },
  
  async created() {
    try {
      const data = await $api.send(this.url, 'GET');
      this.items = data;
    }
    catch(err) {
      this.error = err;
    }
  },
};
</script>

<style>
</style>