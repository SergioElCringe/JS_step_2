<template>
  <div>
    <CategorySlider 
      :category="$route.params.category"
    />
    <div class="products">
      <div class="container">
        <ProductSorting />
        <div class="row">
          <div class="col">
            <Catalog :discountProducts="false" />
          </div>
        </div>
      </div>
    </div>
    <IconBoxs />
    <NewsLetter />
  </div>
</template>

<script>
import CategorySlider from "./components/CategorySlider.vue";
import ProductSorting from "@components/ProductSorting.vue";
import Catalog from "@components/Catalog.vue";
import IconBoxs from "@components/pages/UI/IconBoxs.vue";
import NewsLetter from "@components/pages/UI/NewsLetter.vue";

export default {
  name: 'Categories',
  components: { CategorySlider, ProductSorting, Catalog, IconBoxs, NewsLetter },  
};
</script>

<style>
</style>