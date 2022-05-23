<template>
  <div class="product_grid">
    <CatalogItem
      v-for="item of items"
      :key="item.key"
      :item="item"
      :api="api"
      :hasCategory="discountProducts ? discountProducts : false"
    />
  </div>
</template>

<script>
import CatalogItem from './items/CatalogItem.vue';

export default {
  name: 'Catalog',
  components: { CatalogItem },
  props: {
    discountProducts: {
      type: Boolean
    },
  },

  data() {
    return {
      items: [],
      api: {
        productApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products',
        url: '/api/catalog',
      },
    };
  },

  methods: {
    async fetchCatalog() {
      try {
        this.items = await $api.send(this.api.url, 'GET');
      } catch (err) {
        console.warn(err);
      }
    },
  },

  created() {
    this.fetchCatalog();
  },
};
</script>