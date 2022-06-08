<template>
  <div>
    <item v-for="item of items" :key="item.id" :item="item" :imgApi="imgApi" />
  </div>
</template>

<script>
import item from "./items/catalogItem.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Catalog",
  components: { item },
  data() {
    return {
      // items: [],
      url: "/api/catalog",
      imgApi:
        "https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products",
      error: null,
    };
  },
  computed: {
    ...mapGetters({
      items: "Catalog/itemsMain",
    }),
  },
  async created() {
    // try {
    //   const data = await $api.send(this.url, "GET");
    //   this.items = data;
    // } catch (err) {
    //   this.error = err;
    // }
    try {
      // this.$store.dispatch("getCatalog", this.url);
      await this.getCatalog(this.url);
    } catch (err) {
      console.warn(err);
    }
  },

  methods: {
    addItem(item) {
      this.$parent.$refs.cart.addItem(item);
    },

    ...mapActions({
      getCatalog: 'Catalog/getCatalog',
    }),
  },
};
</script>

<style>
</style>