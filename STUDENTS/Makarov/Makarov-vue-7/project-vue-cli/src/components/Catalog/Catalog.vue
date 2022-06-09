<template>
  <div class="products">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="catalog">
            <CatalogItem 
              v-for="(item, i) in (suggestion ? suggestionItems : items)"
              :key="i"
              :item="item"
              :stickerTypes="stickerTypes"
              :imgURLTemplate="imgURLTemplate"
              @addItem="addItem"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Catalog",
  components: { CatalogItem },
  props: ["suggestion"],
  data: function () {
    return {
      ready: false,
      URL: "/api/catalog",
      imgURLTemplate:
        "https://raw.githubusercontent.com/MikhailErnstovich/my-ftp/master/img/",
    };
  },

  methods: {
    ...mapActions({
      getCatalog: "Catalog/getCatalog",
      getHomeSuggestion: "Catalog/getHomeSuggestion",
      addItem: "Cart/addItem",
    }),
  },

  computed: {
    ...mapGetters({
      items: "Catalog/getItems",
      suggestionItems: "Catalog/getSuggestion",
      stickerTypes: "Catalog/getStickers",
    }),
  },

  async created() {
    try {
      if (this.suggestion) {
        await this.getHomeSuggestion();
      } else {
        await this.getCatalog();
      }
    } catch (err) {
      throw err;
    }
  },
};
</script>

<style>
.products {
  width: 100%;
  background: #ffffff;
  padding-top: 99px;
  z-index: 2;
}

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
@media only screen and (max-width: 575px) {
  .products {
    padding-top: 30px;
  }
}
</style>