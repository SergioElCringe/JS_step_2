<template>
  <div class="row details_row">
    <div class="col-lg-6">
      <div class="details_image">
        <div class="details_image_large">
          <img :src="imgUrl" />
        </div>
      </div>
    </div>

    <!-- Product Content -->
    <div class="col-lg-6">
      <div class="details_content">
        <div class="details_name">{{ product.name }}</div>
        <div class="details_discount" v-if="product.prevPrice">${{ product.prevPrice }}</div>
        <div class="details_price">${{ product.price }}</div>

        <!-- In Stock -->
        <div class="in_stock_container">
          <div class="availability">Availability:</div>
          <span>{{ product.availability }}</span>
        </div>
        <div class="details_text">
          <p>{{ product.description }}</p>
        </div>

        <!-- Product Quantity -->
        <div class="product_quantity_container">
          <div class="product_quantity clearfix">
            <span>Qty</span>
            <input
              id="quantity_input"
              type="text"
              pattern="[0-9]*"
              :value="product.amount"
            />
            <div class="quantity_buttons">
              <div id="quantity_inc_button" class="quantity_inc quantity_control" @click="setIncrement(1)">
                <i class="fa fa-chevron-up" aria-hidden="true"></i>
              </div>
              <div id="quantity_dec_button" class="quantity_dec quantity_control" :class="product.amount == 1 ? 'unavailable' : ''" @click="setIncrement(-1)">
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div class="button cart_button"><button @click="getNewItem({ item: this.product })">Add to cart</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Social from './pages/UI/Social.vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  name: 'DescriptionProduct',
  comsponents: { Social },

  methods: {
    ...mapActions({
      getProduct: 'DescriptionProduct/getProduct',
      getNewItem: 'Cart/getNewItem',
    }),

    ...mapMutations({
      setIncrement: 'DescriptionProduct/setIncrement',
    }),
  },

  computed: {
    ...mapState({
      product: state => state.DescriptionProduct.product,
      productApi: state => state.Catalog.productApi,
    }),

    imgUrl() {
      return this.productApi + this.product.imgUrl;
    },
  },

  async created() {
    await this.getProduct({ id: (+this.$route.params.id) });
  },
};
</script>

<style>
</style>