<template>
  <li :class='item?.items ? `hassubs` : ``'>
    <a :href='item.link'>{{ item.text }}</a>
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