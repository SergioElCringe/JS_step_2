<template>
  <div class="product_grid" v-if="discountProducts">
    <CatalogItem
      v-for="item of filteredCatalog"
      :key="item.key"
      :item="item"
    />
  </div>
  <div v-else>
    <div class="product_grid">
      <CatalogItem
        v-for="item of sortedCatalog"
        :key="item.key"
        :item="item"
      />
    </div>
    <div class="product_pagination">
      <ul>
        <li class="active mr-3" v-for="(index) in pagesCount" :key="index">
          <button @click="changePage(index)" class="newsletter_button trans_200"><span>{{ index }}</span></button>
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
    }),

    async changePage(index) {
      await this.getCatalog({ page: index });
    },
  },

  computed: {
    ...mapGetters({
      filteredCatalog: 'Catalog/filteredCatalog',
      sortedCatalog: 'Catalog/sortedCatalog',
    }),

    ...mapState({
      pagesCount: state => state.Catalog.pagesCount,
      page: state => state.Catalog.page,
    }),
  },

  async created() {
    await this.getCatalog({ page: 1 });
  },
};
</script>