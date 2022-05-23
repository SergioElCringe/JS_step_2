<template>
  <div class="col-lg-6 offset-lg-2">
    <div class="cart_total">
        <div class="section_title">Cart total</div>
        <div class="section_subtitle">Final info</div>
        <div class="cart_total_container">
            <ul>
                <li class="d-flex flex-row align-items-center justify-content-start">
                    <div class="cart_total_title">Subtotal</div>
                    <div class="cart_total_value ml-auto subtotal">${{ total }}</div>
                </li>
                <li class="d-flex flex-row align-items-center justify-content-start">
                    <div class="cart_total_title">Shipping</div>
                    <div class="cart_total_value ml-auto shipping">$0</div>
                </li>
                <li class="d-flex flex-row align-items-center justify-content-start">
                    <div class="cart_total_title">Total</div>
                    <div class="cart_total_value ml-auto main-total">${{ total }}</div>
                </li>
            </ul>
        </div>
        <div class="button checkout_button"><a href="checkout.html">Proceed to checkout</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TotalCart',
  data() {
    return {
      total: null,
      url: '/api/cart',
    };
  },

  methods: {
    async fetchCart() {
      try {
        const data = await $api.send(this.url, 'GET');
        this.total = data.totalPrice;
      } catch (err) {
        console.warn(err);
      };
    },
  },

  created() {
    this.fetchCart();
  },
};
</script>

<style>
</style>