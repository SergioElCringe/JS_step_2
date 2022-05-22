<template>
  <HomePageBanner 
    :name="'checkout'"
  />
  <div class="checkout">
    <div class="container">
      <div class="row">
        <CheckoutInfo />
        <OrderInfo />
      </div>
    </div>
  </div>
</template>

<script>
import HomePageBanner from "@components/pages/UI/HomePageBanner.vue";
import CheckoutInfo from './components/CheckoutInfo.vue';
import OrderInfo from './components/OrderList.vue';

export default {
  name: 'Checkout',
  components: { HomePageBanner, CheckoutInfo, OrderInfo },
};
</script>