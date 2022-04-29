<template>
  <label class="delivery_option clearfix" @click="setShippingMethod(item)">{{ item.method }}
    <input type="radio" checked="checked" name="radio" v-if="item.method === 'Personal pickup'" >
    <input type="radio" name="radio" v-else>
    <span class="checkmark"></span>
    <span class="delivery_price">${{ item.price }}</span>
  </label>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ShippingMethodsItem',
  props: {
    item: {
      type: Object,
    },
  },

  methods: {
    ...mapMutations({
      setShippingMethod: 'Cart/setShippingMethod',
    }),
  },
};
</script>