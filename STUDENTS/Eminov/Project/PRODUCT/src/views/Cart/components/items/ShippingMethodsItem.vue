<template>
  <v-radio 
    :label="item.method"
    :value="item.id"
    color="red darken-3"
    @click="setShippingMethod(item)"
  />
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