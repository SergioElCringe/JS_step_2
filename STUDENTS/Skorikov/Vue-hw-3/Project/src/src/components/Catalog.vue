<template>
  <div class="product_grid">
    <catalogItem
      v-for="item of items"
      :key="item.key"
      :item="item"
      :api="api"
    />
  </div>
</template>

<script>
import catalogItem from "./CatalogItem.vue";
export default {
  name: "Catalog",
  components: { catalogItem },
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
        this.items = await $api.send(this.api.url, "GET");
      } catch (err) {
        console.warn(err);
      };
    }
  },
  created() {
    this.fetchCatalog();  
  },
};
</script>

<style>
  .product_grid {
    display: flex !important;
    flex-wrap: wrap !important;
    height: auto !important;
    position: relative !important;
    justify-content: center !important;
  }
  @media screen and (max-width: 546px) {
    .product_grid {
      justify-content: center;
    }
  }
</style>