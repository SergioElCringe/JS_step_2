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
import { mapActions, mapState } from 'vuex';
import ShippingMethodsItem from "./items/ShippingMethodsItem.vue";

export default {
  name: 'ShippingMethods',
  components: { ShippingMethodsItem },
  
  methods: {
    ...mapActions({
      getMethods: 'ShippingMethods/getMethods',
    }),
  },

  computed: {
    ...mapState({
      items: state => state.ShippingMethods.items,
    }),
  },

  async created() {
    await this.getMethods();
  }
};
</script>