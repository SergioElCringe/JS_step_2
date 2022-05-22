<template>
  <div>
    <Slider />
    <DiscountProducts />
    <div class="products pgt">
      <div class="container">
        <Catalog :discountProducts="true" />
      </div>
    </div>
    <AmazingProducts />
    <IconBoxs />
    <NewsLetter />
  </div>
</template>

<script>
import Catalog from "@components/Catalog.vue";
import Slider from "./components/UI/Slider.vue";
import IconBoxs from "@components/pages/UI/IconBoxs.vue";
import NewsLetter from "@components/pages/UI/NewsLetter.vue";
import DiscountProducts from "./components/UI/DiscountProducts.vue";
import AmazingProducts from "./components/UI/AmazingProducts.vue";

export default {
  name: 'Main',
  components: { Catalog, Slider, IconBoxs, NewsLetter, DiscountProducts, AmazingProducts },
};
</script>
