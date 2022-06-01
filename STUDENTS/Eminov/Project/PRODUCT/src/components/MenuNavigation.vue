<template>
  <ul>
    <MenuNavigationItem
      v-for="item of items"
      :key="item.id"
      :item="item"
    />
  </ul>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import MenuNavigationItem from './items/MenuNavigationItems.vue';

export default {
  name: 'MenuNavigation',
  components: { MenuNavigationItem },

  methods: {
    ...mapActions({
      getMenu: 'Menu/getMenu',
    }),
  },

  computed: {
    ...mapState({
      items: state => state.Menu.items,
    }),
  },

  async created() {
    await this.getMenu();
  },
};
</script>