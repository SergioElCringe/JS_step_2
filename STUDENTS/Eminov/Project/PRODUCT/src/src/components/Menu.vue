<template>
  <ul>
    <menuItem
      v-for="item of items"
      :key="item.id"
      :item="item"
      :api="api"
    />
  </ul>
</template>

<script>
import menuItem from './items/menu-item.vue'
export default {
  name: "menu-navigation",
  components: { menuItem },

  data() {
    return {
      items: [],
      api: {
        menuApi:
          "https://raw.githack.com/SergioElCringe/JS_step_1/main/BASE__PROJECT",
        url: "/api/menu"
      },
    };
  },

  async created() {
    try {
      this.items = await $api.send(this.api.url, "GET");
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style>
</style>