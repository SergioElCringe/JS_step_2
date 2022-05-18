<template>
  <div>
    <HomePageBanner :name="`description product ${product.name}`" />
    <div class="product_details">
      <div class="container">
        <div class="row details_row">
          <Gallery 
            :images="product.imgUrl"
            :productApi="productApi"
          />
          <ProductContent 
            :product="product"
            @addItem="addItem"
            @incrementAmount="incrementAmount" 
          />
        </div>
        <Reviews 
          :reviews="product.reviews"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Gallery from "./components/UI/Gallery.vue";
import ProductContent from "./components/ProductContent.vue";
import Social from "@components/pages/UI/Social.vue";
import HomePageBanner from "@components/pages/UI/HomePageBanner.vue";
import Reviews from './components/UI/Reviews.vue';
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  name: "Description",
  components: { HomePageBanner, Gallery, ProductContent, Social, Reviews },

  methods: {
    ...mapActions({
      getProduct: "Catalog/getProduct",
      addItem: 'Cart/addItem',
    }),

    ...mapMutations({
      incrementAmount: 'Catalog/incrementAmount',
    }),
  },

  computed: {
    ...mapState({
      product: (state) => state.Catalog.selectedProduct,
      productApi: (state) => state.Catalog.productApi,
    }),
  },

  async created() {
    this.getProduct({ id: +this.$route.params.id });
  },
};
</script>