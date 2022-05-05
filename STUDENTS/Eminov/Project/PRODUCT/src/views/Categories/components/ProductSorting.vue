<template>
  <div class="row">
    <div class="col">
      <div class="sorting_bar d-flex flex-md-row flex-column align-items-md-center justify-content-between">
        <div class="results">
          Showing {{ sortedCatalog.length }} results
        </div>
        <div class="sorting_container ml-md-auto">
          <div class="sorting">
            <ul class="item_sorting">
              <li>
                <span class="sorting_text">Sort by</span>
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
                <ul>
                  <ProductSortingItem 
                    v-for="item of sortOptions"
                    :key="item.val"
                    :item="item"
                    @setSort="setSort"
                  />
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductSortingItem from './items/ProductSortingItem';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'ProductSorting',
  components: { ProductSortingItem },

  data() {
    return {
      sortOptions: [
        { 
          name: "default",
          val: 'id' 
        },
        { 
          name: "price",
          val: 'price' 
        },
        { 
          name: "name",
          val: 'name' 
        },
      ],
    };
  },

  methods: {
    ...mapMutations({
      setSort: 'Catalog/setSort',
    }),
  },

  computed: {
    ...mapGetters({
      sortedCatalog: 'Catalog/sortedCatalog',
    }),
  },
};
</script>