<template>
  <label class="delivery_option clearfix" @click="setShippingMethod(item)">{{ item.method }}
    <input type="radio" checked="checked" name="radio" v-if="item.standart" >
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
      default: () => {},
    },
  },

  methods: {
    setShippingMethod(val) {
      this.$emit('setShippingMethod', val);
    }
  },

  created() {
    if (this.item.standart) {
      this.setShippingMethod(this.item);
    };
  },
};
</script>