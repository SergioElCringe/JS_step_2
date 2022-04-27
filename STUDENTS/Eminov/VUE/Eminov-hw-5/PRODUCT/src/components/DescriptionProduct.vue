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
        <div class="details_discount" v-if="product.prevPrice">${{ findItem.prevPrice }}</div>
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
              <div id="quantity_inc_button" class="quantity_inc quantity_control" @click="getIncrement(1)">
                <i class="fa fa-chevron-up" aria-hidden="true"></i>
              </div>
              <div id="quantity_dec_button" class="quantity_dec quantity_control" :class="product.amount == 1 ? 'unavailable' : ''" @click="getIncrement(-1)">
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div class="button cart_button"><button @click="getNewItem({ api: '/api/cart', item: this.product })">Add to cart</button></div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Social from './pages/UI/Social.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'DescriptionProduct',
  comsponents: { Social },
  data() {
    return {
      api: {
        productApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products',
        url: '/api/catalog',
      },
    };
  },

  methods: {
    ...mapActions({
      getProduct: 'DescriptionProduct/getProduct',
      getNewItem: 'Cart/getNewItem',
      getIncrement: 'DescriptionProduct/getIncrement',
    }),
  },

  computed: {
    ...mapState({
      product: state => state.DescriptionProduct.product,
    }),

    imgUrl() {
      return this.api.productApi + this.product.imgUrl;
    },
  },

  async created() {
    await this.getProduct({api: this.api.url, id: this.$route.params.id});
  },
};
</script>

<style>
</style>