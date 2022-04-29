<template>
  <div class="row">
    <div class="col">
      <div class="sorting_bar d-flex flex-md-row flex-column align-items-md-center justify-content-md-start">
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
import { mapGetters } from 'vuex';

export default {
  name: 'ProductSorting',
  components: { ProductSortingItem },

  data() {
    return {
      sortOptions: [
        { 
          name: "default",
          val: 'id' },
        { 
          name: "price",
          val: 'price' },
        { 
          name: "name",
          val: 'name' 
        },
      ],
    };
  },

  computed: {
    ...mapGetters({
      sortedCatalog: 'Catalog/sortedCatalog',
    }),
  },
};
</script>