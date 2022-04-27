<template>
  <li class="product_sorting_btn">
    <span>{{ name }}</span>
  </li>
</template>

<script>
export default {
  name: 'ProductSortingItem',
  props: {
    item: {
      type: Object,
    },
  },

  computed: {
    name() {
      return this.item.value.toUpperCase();
    },
  },
};
</script>