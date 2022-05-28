<template>
  <li class="product_sorting_btn" @click="setSort(item)">
    <span>{{ name }}</span>
  </li>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ProductSortingItem',
  props: {
    item: {
      type: Object,
    },
  },

  methods: {
    ...mapMutations({
      setSort: 'Catalog/setSort',
    })
  },

  computed: {
    name() {
      return this.item.name.toUpperCase();
    },
  },
};
</script>