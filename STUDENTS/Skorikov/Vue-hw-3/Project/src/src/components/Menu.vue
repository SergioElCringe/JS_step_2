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
import menuItem from './MenuItem.vue'
export default {
  name: "menunav",
  components: { menuItem },
  data() {
    return {
      items: [],
      api: {
        menuApi: 'https://raw.githack.com/SergioElCringe/JS_step_1/main/BASE__PROJECT',
        url: '/api/menu'
      },
    };
  },
  methods: {
    fetchMenu() {
      try {
        this.items = await $api.send(this.api.url, "GET");
      } catch (err) {
        console.log(err);
      };
    }
  },
  created() {
    this.fetchMenu(); 
  },
};
</script>

<style>
</style>