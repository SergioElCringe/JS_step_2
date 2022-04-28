<template>
  <div class="delivery">
    <div class="section_title">Shipping method</div>
    <div class="section_subtitle">Select the one you want</div>
    <div class="delivery_options">
      <ShippingMethodsItem 
        v-for="item of items"
        :key="item.name"
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
          method: 'Personal pickup',
          price: 0,
        },
        {
          method: 'Standart delivery',
          price: 1.99,
        },
        {
          method: 'New day delivery',
          price: 4.99,
        },
      ],
    };
  },
};
</script>