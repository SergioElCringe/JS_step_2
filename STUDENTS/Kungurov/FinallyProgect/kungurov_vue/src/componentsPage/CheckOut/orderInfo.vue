<template>
  <div class="col-lg-6">
    <div class="order checkout_section">
      <div class="section_title">Your order</div>
      <div class="section_subtitle">Order details</div>

      <!-- Order details -->
      <div class="order_list_container">
        <div
          class="
            order_list_bar
            d-flex
            flex-row
            align-items-center
            justify-content-start
          "
        >
          <div class="order_list_title">Product</div>
          <div class="order_list_value ml-auto">Total</div>
        </div>
        <ul class="order_list">
          <li class="d-flex flex-row align-items-center justify-content-start">
            <div class="order_list_title">Cocktail Yellow dress</div>
            <div class="order_list_value ml-auto">$59.90</div>
          </li>
          <li class="d-flex flex-row align-items-center justify-content-start">
            <div class="order_list_title">Subtotal</div>
            <div class="order_list_value ml-auto">$59.90</div>
          </li>
          <li class="d-flex flex-row align-items-center justify-content-start">
            <div class="order_list_title">Shipping</div>
            <div class="order_list_value ml-auto">Free</div>
          </li>
          <li class="d-flex flex-row align-items-center justify-content-start">
            <div class="order_list_title">Total</div>
            <div class="order_list_value ml-auto">$59.90</div>
          </li>
        </ul>
      </div>

      <!-- Payment Options -->
      <div class="payment">
        <div class="payment_options">
          <label class="payment_option clearfix"
            >Paypal
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="payment_option clearfix"
            >Cach on delivery
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="payment_option clearfix"
            >Credit card
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="payment_option clearfix"
            >Direct bank transfer
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>

      <!-- Order Text -->
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
export default {
    name: 'OrderInfo'
};
</script>

<style>
</style>