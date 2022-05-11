<template>
  <div>
    <CategorySlider />
    <div class="products">
      <div class="container">
        <ProductSorting />
        <div class="row">
          <div class="col">
            <Catalog :discountProducts="false" :query="query" />
            <Pagination :onPage="4" @paginate="query.page = $event" />
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
import ProductSorting from "../../components/ProductSorting.vue";
import Catalog from "../../components/Catalog.vue";
import IconBoxs from "../../components/pages/UI/IconBoxs.vue";
import NewsLetter from "../../components/pages/UI/NewsLetter.vue";
import Pagination from '@components/Pagination.vue';

export default {
  name: 'Categories',
  components: { CategorySlider, ProductSorting, Catalog, IconBoxs, NewsLetter, Pagination },
  data() {
    return {
      query: {
        page: 1,
        show: 4,
        sort: 'ad',
      },
    }
  },
};
</script>

<style>
</style>