<template>
  <li class="d-flex flex-row align-items-center justify-content-start">
    <div class="order_list_title">{{ item.name }}</div>
    <div class="order_list_value ml-auto">${{ item.price * item.amount }}</div>
  </li>
</template>

<script>
export default {
  name: "OrderListItem",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>