<template>
  <ul>
    <item v-for="item of items" :key="item.id" :item="item" />
  </ul>
</template>

<script>
import item from './items/menuItem.vue';
export default {
  name: "Menu",
  components: { item },
  data() {
    return {
      items: [],
      url: "/api/menu",
    };
  },
  methods: {
    async fetchData() {
      try {
        this.items = await $api.send(this.url, "GET");
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style>
</style>