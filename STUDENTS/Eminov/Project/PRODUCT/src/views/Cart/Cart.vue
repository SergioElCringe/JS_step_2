<template>
  <div>
    <HomePageBanner :name="'shopping cart'" />
    <div class="cart_info">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="cart_info_columns clearfix">
              <div class="cart_info_col cart_info_col_product">Product</div>
              <div class="cart_info_col cart_info_col_price">Price</div>
              <div class="cart_info_col cart_info_col_quantity">Quantity</div>
              <div class="cart_info_col cart_info_col_total">Total</div>
            </div>
          </div>
        </div>

        <ShoppingCart />

        <div class="row row_extra">
          <div class="col-lg-4">
            <ShippingMethods />
            <Coupon />
          </div>
          
          <TotalCart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomePageBanner from '../../components/pages/UI/HomePageBanner.vue';
import ShoppingCart from '../../components/ShoppingCart.vue';
import ShippingMethods from '../../components/ShippingMethods.vue';
import Coupon from './components/Coupon.vue';
import TotalCart from './components/TotalCart.vue';

export default {
  name: 'FinallyCart',
  components: { ShoppingCart, ShippingMethods, Coupon, TotalCart, HomePageBanner },
};
</script>

<style>
</style>