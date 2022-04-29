<template>
  <div class="product_grid" v-if="discountProducts">
    <CatalogItem
      v-for="item of filteredCatalog"
      :key="item.key"
      :item="item"
      :api="api"
    />
  </div>
  <div class="product_grid" v-else>
    <CatalogItem
      v-for="item of sortedCatalog"
      :key="item.key"
      :item="item"
      :api="api"
    />
  </div>
</template>

<script>
import CatalogItem from './items/CatalogItem.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Catalog',
  components: { CatalogItem },
  props: {
    discountProducts: {
      type: Boolean,
    },
  },

  data() {
    return {
      api: {
        productApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products',
        url: '/api/catalog',
      },
    };
  },

  methods: {
    ...mapActions({
      getCatalog: 'Catalog/getCatalog',
    }),
  },

  computed: {
    ...mapGetters({
      filteredCatalog: 'Catalog/filteredCatalog',
      sortedCatalog: 'Catalog/sortedCatalog',
    }),
  },

  async created() {
    await this.getCatalog(this.api.url);
  },
};
</script>