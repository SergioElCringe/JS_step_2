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
import { mapState, mapGetters, mapActions } from 'vuex';

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
      // items: [],
      api: {
        productApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products',
        url: '/api/catalog',
      },
    };
  },

  methods: {
    // async fetchCatalog() {
    //   try {
    //     this.items = await $api.send(this.api.url, 'GET');
    //   } catch (err) {
    //     console.warn(err);
    //   }
    // },
    ...mapActions({
      getCatalog: 'Catalog/getGatalog'
    }),
  },

  computed: {
    // ...mapState({
    //   items: state => state.catalogItems,
    // })
    // items() {
    //   return this.$store.state.catalogItems;
    // }
    ...mapGetters({
      items: 'Catalog/itemsMain',
    })
  },

  async created() {
    // this.fetchCatalog();
    try {
      // this.$store.dispatch('getGatalog', this.api.url);
      await this.getCatalog(this.api.url);
    }
    catch(err) {
      console.warn(err);
    }
  },
};
</script>