<template>
  <div class="product_grid" v-if="discountProducts">
    <CatalogItem
      v-for="item of filteredCatalog"
      :key="item.key"
      :item="item"
      :productApi="productApi"
      :categories="categories"
      @addItem="addItem"
    />
  </div>
  <div v-else>
    <div class="product_grid">
      <CatalogItem
        v-for="item of sortedCatalog"
        :key="item.key"
        :item="item"
        :productApi="productApi"
        :categories="categories"
        @addItem="addItem"
      />
    </div>
    <div class="product_pagination">
      <ul>
        <li class="active mr-3">
          <button><span>1</span></button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CatalogItem from './items/CatalogItem.vue';
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'Catalog',
  components: { CatalogItem },
  props: {
    discountProducts: {
      type: Boolean,
    },
  },

  methods: {
    ...mapActions({
      getCatalog: 'Catalog/getCatalog',
      addItem: 'Cart/addItem',
    }),
  },

  computed: {
    ...mapGetters({
      filteredCatalog: 'Catalog/filteredCatalog',
      sortedCatalog: 'Catalog/sortedCatalog',
    }),

    ...mapState({
      productApi: state => state.Catalog.productApi,
      categories: state => state.Catalog.categories,
    }),
  },

  async created() {
    await this.getCatalog();
  },
};
</script>