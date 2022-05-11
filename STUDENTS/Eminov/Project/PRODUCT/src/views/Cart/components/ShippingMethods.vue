<template>
  <div class="delivery">
    <div class="section_title">Shipping method</div>
    <div class="section_subtitle">Select the one you want</div>
    <div class="delivery_options">
      <v-radio-group v-model="active">
        <ShippingMethodsItem 
          v-for="item of items"
          :key="item.id"
          :item="item"
          @setShippingMethod="setShippingMethod"
        />    
      </v-radio-group>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';
import ShippingMethodsItem from "./items/ShippingMethodsItem.vue";

export default {
  name: 'ShippingMethods',
  components: { ShippingMethodsItem },
  data() {
    return {
      active: 1,
    };
  },
  
  methods: {
    ...mapActions({
      getMethods: 'ShippingMethods/getMethods',
    }),

    ...mapMutations({
      setShippingMethod: 'Cart/setShippingMethod',
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