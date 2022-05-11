<template>
  <div class="col-lg-6">
    <div class="order checkout_section">
      <div class="section_title">Your order</div>
      <div class="section_subtitle">Order details</div>
      <div class="order_list_container">
        <hr />
        <ul class="order_list">
          <OrderListItem v-for="item of items" :key="item.id" :item="item" />
        </ul>
        <hr />
        <ul class="order_list">
          <OrderTotal
            :totalPrice="totalPrice"
            :total="total"
            :shipping="shipping"
          />
        </ul>
      </div>
      <hr />

      <Payment />

      <div class="order_text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra
        temp or so dales. Phasellus sagittis auctor gravida. Integ er bibendum
        sodales arcu id te mpus. Ut consectetur lacus.
      </div>
      <div class="button order_button"><a href="#">Place Order</a></div>
    </div>
  </div>
</template>

<script>
import Payment from "./UI/PaymentOptions.vue";
import OrderListItem from "./items/OrderListItem.vue";
import OrderTotal from "./UI/OrderTotal.vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "OrderInfo",
  components: { Payment, OrderListItem, OrderTotal },
  methods: {},

  computed: {
    ...mapGetters({
      totalPrice: "Cart/totalPrice",
      total: "Cart/total",
    }),

    ...mapState({
      items: (state) => state.Cart.items,
      shipping: (state) => state.Cart.shippingMethod.price,
    }),
  },
};
</script>