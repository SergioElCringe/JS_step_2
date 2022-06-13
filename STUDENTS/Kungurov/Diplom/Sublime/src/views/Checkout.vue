<template>
  <roadHome />
  <div class="checkout">
    <div class="container">
      <div class="row">
        <BillingInfo />
        <OrderInfo />
      </div>
    </div>
  </div>
</template>

<script>
import roadHome from "../componentsPage/CheckOut/roadHome.vue";
import OrderInfo from "../componentsPage/CheckOut/orderInfo.vue";
import BillingInfo from "../componentsPage/CheckOut/BillingInfo.vue";
export default {
  name: "Checkout",
  components: { roadHome, OrderInfo, BillingInfo },
};
</script>

<style>
</style>