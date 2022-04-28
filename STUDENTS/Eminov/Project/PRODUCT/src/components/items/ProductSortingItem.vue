<template>
  <li class="product_sorting_btn" @click="getSort(item)">
    <span>{{ name }}</span>
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ProductSortingItem',
  props: {
    item: {
      type: Object,
    },
  },

  methods: {
    ...mapActions({
      getSort: 'Catalog/getSort',
    })
  },

  computed: {
    name() {
      return this.item.name.toUpperCase();
    },
  },
};
</script>