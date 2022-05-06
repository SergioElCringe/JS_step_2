<template>
  <nav class='main_nav' id='main_nav' v-if='ready'>
    <ul>
      <NavSubMenu
        v-for='item in items'
        :key='item.text'
        :item='item'
        :ready='ready'
      />
    </ul>
  </nav>
</template>

<script>
import NavSubMenu from './NavSubMenu.vue';
export default {
  name: 'Nav',
  components: { NavSubMenu },
  data: function () {
    return {
      URL: '/api/menu',
      container: null,
      items: [],
      ready: false
    };
  },
  methods: {
    async getData() {
      try {
        const data = await $api.send(this.URL);
        this.items = data;
      } catch (err) {
        throw err;
      } finally {
        this.ready = !!this.items.length;
      }
    },
  },
  async created() {
    try {
      await this.getData();
    } catch (err) {
      console.warn(err);
    }
  },
};
</script>

<style>
</style>