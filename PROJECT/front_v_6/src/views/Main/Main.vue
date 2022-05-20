<template>
  <div>
    <Slider />
    <!-- <button class="btn" @click="increase">Do something</button>
    <p>{{ item }}</p> -->
    <DiscountProducts />
    <div class="products">
      <div class="container">
        <Catalog :discountProducts="true" :query="{ filter: 'category' }"/>
      </div>
    </div>
    <AmazingProducts />
    <IconBoxs />
    <NewsLetter />
  </div>
</template>

<script>
import Catalog from "../../components/Catalog.vue";
import Slider from "../../components/pages/UI/Slider.vue";
import IconBoxs from "../../components/pages/UI/IconBoxs.vue";
import NewsLetter from "../../components/pages/UI/NewsLetter.vue";
import DiscountProducts from "./components/DiscountProducts.vue";
import AmazingProducts from "./components/AmazingProducts.vue";

export default {
  name: 'Main',
  data() {
    return {
      newData: 12,
    };
  },
  components: { Catalog, Slider, IconBoxs, NewsLetter, DiscountProducts, AmazingProducts },
  methods: {
    // increase() {
    //   const num = this.$store.state.item;
    //   // this.$store.state.item = num + 1;
    //   this.$store.dispatch('pleaseIncreaseItem')
    // }
  },
  computed: {
    // item() {
    //   return this.$store.state.item;
    // }
  },
  mounted() {
    // this.$data.newData = 12;
    // vm.$set('newData', 12);
  }
};
</script>
