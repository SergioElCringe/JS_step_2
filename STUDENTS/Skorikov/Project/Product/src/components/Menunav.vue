<template>
  <ul>
    <MenunavItem
      v-for="item of items"
      :key="item.id"
      :item="item"
    />
  </ul>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import MenunavItem from './items/MenunavItems.vue';

export default {
  name: 'Menunav',
  components: { MenunavItem },

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