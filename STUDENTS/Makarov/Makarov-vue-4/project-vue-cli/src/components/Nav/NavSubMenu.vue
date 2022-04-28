<template>
  <li :class='item?.items ? `hassubs` : ``'>
    <router-link :to='item.link'>{{ item.text  }}</router-link>
    <ul v-if='item?.items'>
      <NavSubMenuItem
        v-for='item in items'
        :key='item.text'
        :item='item'
      />
    </ul>
  </li>
</template>

<script>
import NavSubMenuItem from './NavSubMenuItem.vue'
export default {
  name: 'NavSubMenu',
  props: ['item'],
  components: { NavSubMenuItem },
  data: function() {
    return {
      items: this.item.items,
    }
  },
};
</script>

<style>
</style>