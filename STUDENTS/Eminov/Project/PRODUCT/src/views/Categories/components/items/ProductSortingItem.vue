<template>
  <li class="product_sorting_btn" @click="setSort(item)">
    <span>{{ name }}</span>
  </li>
</template>

<script>
export default {
  name: 'ProductSortingItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    setSort(sort) {
      this.$emit('setSort', sort);
    },
  },

  computed: {
    name() {
      return this.item.name.toUpperCase();
    },
  },
};
</script>