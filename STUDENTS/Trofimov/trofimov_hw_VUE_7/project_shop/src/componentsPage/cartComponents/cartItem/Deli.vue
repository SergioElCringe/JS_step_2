<template>
  <div class="delivery">
    <div class="section_title">Shipping method</div>
    <div class="section_subtitle">Select the one you want</div>
    <div class="delivery_options">
      <label class="delivery_option clearfix"
        >Next day delivery
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
        <span class="delivery_price">$4.99</span>
      </label>
      <label class="delivery_option clearfix"
        >Standard delivery
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
        <span class="delivery_price">$1.99</span>
      </label>
      <label class="delivery_option clearfix"
        >Personal pickup
        <input type="radio" checked="checked" name="radio" />
        <span class="checkmark"></span>
        <span class="delivery_price">Free</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
    name : "deli"
};
</script>

<style>
</style>