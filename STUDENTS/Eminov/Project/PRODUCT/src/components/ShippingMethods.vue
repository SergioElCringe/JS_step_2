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
  name: "ShippingMethods",
  components: { ShippingMethodsItem },
  data() {
    return {
      items: [],
      url: "/api/shipping",
    };
  },

  methods: {
    async fetchMethods() {
      try {
        this.items = await $api.send(this.url, "GET");
      } catch (err) {
        console.warn(err);
      };
    },
  },

  created() {
    this.fetchMethods();
  },
};
</script>

<style>
</style>