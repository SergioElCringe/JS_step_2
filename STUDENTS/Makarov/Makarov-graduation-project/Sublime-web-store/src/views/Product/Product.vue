<template>
  
<div class="super_container">
    <Header />
    <SideMenu />
    <div class="product_details" v-if="!loading">
    <div class="container">
      <div class="row details_row">
        <div class="col-lg-6">
          <ProductGallery :item="product" :stickerTypes="stickerTypes" />
        </div>
        
        <div class="col-lg-6">
          <div class="details_content">
            <div class="details_name">{{ product.title }}</div>
            <div class="details_discount" v-if="product.discount">$ {{ product.discount }}</div>
            <div class="details_price">${{ product.price }}</div>

            <!-- In Stock -->
            <div class="in_stock_container">
              <div class="availability">Availability:</div>
              <span>In Stock</span>
            </div>
            <div class="details_text">
              <p>{{ product.specification }}</p>
            </div>

            <!-- Product Quantity -->
            <div class="product_quantity_container">
              <div class="product_quantity clearfix">
                <span>Qty</span>
                <input type="text" :value="amount">
                <div class="quantity_buttons">
                  <div class="quantity_inc quantity_control" @click="increment">
                      <i class="fa fa-chevron-up"></i>
                  </div>
                  <div class="quantity_dec quantity_control" @click="decrement">
                      <i class="fa fa-chevron-down"></i>
                  </div>
                </div>
              </div>
              <div class="button cart_button"
                v-if="!loadingChange"
                @click="changeAmount"
              >
                <span>Add to cart</span>
              </div>
            </div>
            <Socials class="details_share" :text="'Share:'"/>
          </div>
        </div>
      </div>

      <div class="row description_row">
        <div class="col">
          <div class="description_title_container">
            <div class="description_title">Description</div>
          </div>
          <div class="description_text">
            <p>{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <NewsLetter />
  <Footer />
</div>
</template>

<script>
import Footer from "@components/Footer/Footer.vue";
import Header from "@components/Header/Header.vue";
import SideMenu from "@components/SideMenu/SideMenu.vue";
import NewsLetter from "@components/NewsLetter/NewsLetter.vue";
import Socials from "@components/Socials/Socials.vue";
import ProductGallery from "./components/ProductGallery.vue";

import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "Product",
  components: { Footer, Header, SideMenu, NewsLetter, Socials, ProductGallery },
  data() {
    return {
      loading: true,
      loadingChange: false,
      amount: 1,
    }
  },
  watch: {
    async $route(to, from) {
      this.loading = true;
      try {
        await this.fetchProduct(this.$route.params.id);
      }
      catch (err) {
        throw err;
      }
      finally {
        this.loading = false;
      }
    }
  },
  methods: {
    ...mapActions({
      fetchProduct: "Catalog/getProduct",
      changeItemAmount: "Cart/changeItemAmount",
    }),
    async changeAmount() {
      this.loadingChange = true;
      try {
        await this.changeItemAmount({ item: this.product, value: this.amount });
      }
      catch (err) {
        throw err;
      }
      finally {
        this.amount = 1;
        this.loadingChange = false;
      }

    },
    increment() {
      this.amount++;
    }, 
    decrement() {
      this.amount !== 0 ? this.amount-- : this.amount = 0;
    },
  },
  computed: {
    ...mapGetters({
      product: "Catalog/getProduct",
      cartProducts: "Cart/getCartItems",
      stickerTypes: "Catalog/getStickers"
    }),  
  },
  async created() {
    this.loading = true;
    try {
      await this.fetchProduct(this.$route.params.id);
    }
    catch (err) {
      throw err;
    }
    finally {
      this.loading = false;
    }
  }  
}
</script>

<style>

.product_details {
  width: 100%;
  margin-top: 130px;
  background: #FFFFFF;
  z-index: 2;
}
.details_row {
  margin-top: 95px;
}
.in_stock_container {
  margin-top: 22px;
}
.availability {
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  color: #6c6a74;
}
.in_stock_container span {
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  color: #44a038;
  margin-left: 5px;
}
.details_content{
  margin-top: 50px;
}
.details_name {
  font-size: 24px;
  font-weight: 500;
  color: #1b1b1b;
  margin-top: -9px;
}
.details_discount {
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  color: #e95a5a;
  margin-right: 20px;
  text-decoration: line-through;
}
.details_price {
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  color: #6c6a74;
  margin-top: 12px;
}
.details_text {
  margin-top: 49px;
}
.details_text p {
  font-weight: 500;
}

.product_quantity {
  display: inline-block;
  max-width: 147px;
  height: 61px;
  border: solid 2px #d0d0d0;
  overflow: hidden;
  padding-left: 78px;
  vertical-align: middle;
}
.product_quantity span {
  position: absolute;
  top: 50%;
  left: 23px;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 16px;
  font-weight: 600;
  color: #6c6a74;
}
.product_quantity input {
  display: block;
  width: 30px;
  height: 57px;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  color: #1b1b1b;
  text-align: left;
  padding-left: 9px;
  line-height: 39px;
  float: left;
}
.quantity_buttons {
  position: absolute;
  top: 0;
  right: 1px;
  height: 100%;
  width: 29px;
}
.quantity_inc, 
.quantity_dec {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50%;
  cursor: pointer;
}
.quantity_control i {
  font-size: 10px;
  color: #232323;
  pointer-events: none;
}
.quantity_control:active {
  border: solid 1px rgba(14, 140, 228, 0.2);
}
.quantity_inc {
  padding-bottom: 3px;
  justify-content: flex-end;
}
.quantity_inc i {
  -webkit-transform: translateY(3px);
  -moz-transform: translateY(3px);
  -ms-transform: translateY(3px);
  -o-transform: translateY(3px);
  transform: translateY(3px);
}
.quantity_dec {
  padding-top: 3px;
  justify-content: flex-start;
}
.quantity_dec i {
  -webkit-transform: translateY(-3px);
  -moz-transform: translateY(-3px);
  -ms-transform: translateY(-3px);
  -o-transform: translateY(-3px);
  transform: translateY(-3px);
}
.cart_button {
  display: inline-block;
  vertical-align: middle;
  margin-left: 13px;
}
.cart_button::after {
  background: #1b1b1b;
}
.details_share {
  margin-top: 51px;
  border-top: solid 1px #d0d0d0;
}
.details_share span {
  display: inline-block;
}
.details_share ul {
  display: inline-block;
  margin-top: 31px;
  margin-left: 41px;
}
.details_share ul li {
  display: inline-block;
}
.details_share ul li:not(:last-child) {
  margin-right: 18px;
}
.details_share ul li a i {
  font-size: 16px;
  color: #b5b5b5;
  padding: 5px;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.details_share ul li a i:hover {
  color: #1b1b1b;
}
.description_row {
  margin-top: 91px;
}
.description_title {
  display: inline-block;
  font-size: 24px;
  font-weight: 500;
  color: #1b1b1b;
}
.description_text {
  margin-top: 44px;
}

.products_title {
  font-size: 30px;
  font-weight: 500;
  color: #1b1b1b;
}
.product_grid {
  margin-top: 88px;
}
</style>