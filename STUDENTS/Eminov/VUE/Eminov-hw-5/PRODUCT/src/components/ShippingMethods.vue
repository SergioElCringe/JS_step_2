<template>
  <div class="delivery">
    <div class="section_title">Shipping method</div>
    <div class="section_subtitle">Select the one you want</div>
    <div class="delivery_options" id="shipping">
      <ShippingMethodsItem 
        v-for="item of items"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import ShippingMethodsItem from "./items/ShippingMethodsItem.vue";

export default {
  name: 'ShippingMethods',
  components: { ShippingMethodsItem },
  data() {
    return {
      url: '/api/shipping',
      items: [
        {
          id: 1,
          method: 'Personal pickup',
          price: 0,
        },
        {
          id: 2,
          method: 'Standart delivery',
          price: 1.99,
        },
        {
          id: 3,
          method: 'New day delivery',
          price: 4.99,
        },
      ],
    };
  },
};
</script>