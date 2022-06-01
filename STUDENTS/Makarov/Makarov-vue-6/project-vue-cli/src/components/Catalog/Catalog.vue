<template>
  <div class='catalog'>
    <CatalogItem
      v-for='item in items'
      :key='item.id'
      :item='item'
      :stickerTypes='stickerTypes'
      :imgURLTemplate='imgURLTemplate'
      @addItem='addItem'
    />
  </div>
</template>

<script>
import CatalogItem from './CatalogItem.vue';
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'Catalog',
  components: { CatalogItem },

  data: function () {
    return {
      ready: false,
      URL: '/api/catalog',
      imgURLTemplate:
        'https://raw.githubusercontent.com/MikhailErnstovich/my-ftp/master/img/',
    };
  },

  methods: {
    ...mapActions({
      getCatalog: 'Catalog/getCatalog',
      addItem: 'Cart/addItem'
    }),
  },

  computed: {
    ...mapGetters({
      items: 'Catalog/getItems',
      stickerTypes: 'Catalog/getStickers',
    }),
  },

  async created() {
    try {
      await this.getCatalog();
    } catch (err) {
      throw err;
    }
  },
};
</script>

<style>
.catalog {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.button_add {
  width: 100%;
  height: 61px;
  border: 2px solid #1b1b1b;
  background-color: #fff;
  font-size: 16px;
  font-weight: 600;
  font-family: Poppins, sans-serif;
  color: #1b1b1b;
  cursor: pointer;
  transition: all 0.2s ease;
}

.button_add:hover {
  background-color: #1b1b1b;
  color: #fff;
}

.button_add:active {
  background-color: #fff;
  color: #1b1b1b;
}
</style>