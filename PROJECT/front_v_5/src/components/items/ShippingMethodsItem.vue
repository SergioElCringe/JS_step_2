<template>
  <label class="delivery_option clearfix"
    > {{ item.method }}
    <input type="radio" checked="checked" name="radio" v-if="item.id == 1">
    <input type="radio" name="radio" v-else>
    <span class="checkmark"></span>
    <span class="delivery_price">${{ item.price }}</span>
  </label>
</template>

<script>
export default {
  name: 'ShippingMethodsItem',
  props: {
    item: {
      type: Object,
    },
  },
};
</script>

<style>
</style>