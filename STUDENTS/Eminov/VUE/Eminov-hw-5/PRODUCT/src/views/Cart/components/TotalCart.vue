<template>
  <div class="col-lg-6 offset-lg-2">
    <div class="cart_total">
        <div class="section_title">Cart total</div>
        <div class="section_subtitle">Final info</div>
        <div class="cart_total_container">
            <ul>
                <li class="d-flex flex-row align-items-center justify-content-start">
                    <div class="cart_total_title">Subtotal</div>
                    <div class="cart_total_value ml-auto subtotal">${{ totalPrice }}</div>
                </li>
                <li class="d-flex flex-row align-items-center justify-content-start">
                    <div class="cart_total_title">Shipping</div>
                    <div class="cart_total_value ml-auto shipping">${{ shipping }}</div>
                </li>
                <li class="d-flex flex-row align-items-center justify-content-start">
                    <div class="cart_total_title">Total</div>
                    <div class="cart_total_value ml-auto main-total">${{ cheque }}</div>
                </li>
            </ul>
        </div>
        <div class="button checkout_button"><router-link to="/checkout">Proceed to checkout</router-link></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex';

export default {
  name: 'TotalCart',
  data() {
    return {
      total: null,
      url: '/api/cart',
    };
  },

  methods: {
    ...mapActions({
      getCart: 'Cart/getCart',
    }),
  },

  computed: {
    ...mapGetters({
      totalPrice: 'Cart/totalPrice',
      shipping: 'Cart/shipping',
      cheque: 'Cart/cheque',
    }),
  },

  async created() {
    await this.getCart(this.url);
  },
};
</script>

<style>
</style>