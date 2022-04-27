<template>
  <label class="delivery_option clearfix" @click="getSelectMethod(item)">{{ item.method }}
    <input type="radio" checked="checked" name="radio" v-if="item.id == 1" >
    <input type="radio" name="radio" v-else>
    <span class="checkmark"></span>
    <span class="delivery_price">${{ item.price }}</span>
  </label>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ShippingMethodsItem',
  props: {
    item: {
      type: Object,
    },
  },

  methods: {
    ...mapActions({
      getSelectMethod: 'Cart/getSelectMethod',
    }),
  },
};
</script>