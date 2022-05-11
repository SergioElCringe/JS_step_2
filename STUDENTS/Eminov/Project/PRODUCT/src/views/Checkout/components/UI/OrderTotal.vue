<template>
  <li class="d-flex flex-row align-items-center justify-content-start">
    <div class="order_list_title">Subtotal</div>
    <div class="order_list_value ml-auto">${{ totalPrice }}</div>
  </li>
  <li class="d-flex flex-row align-items-center justify-content-start">
    <div class="order_list_title">Shipping</div>
    <div class="order_list_value ml-auto">${{ shipping }}</div>
  </li>
  <li class="d-flex flex-row align-items-center justify-content-start">
    <div class="order_list_title">Total</div>
    <div class="order_list_value ml-auto">${{ total }}</div>
  </li>
</template>

<script>
export default {
  name: "OrderTotal",
  props: {
    totalPrice: {
      type: Number,
      default: () => 0,
    },

    total: {
      type: Number,
      default: () => 0,
    },

    shipping: {
      type: Number,
      default: () => 0,
    },
  },
};
</script>