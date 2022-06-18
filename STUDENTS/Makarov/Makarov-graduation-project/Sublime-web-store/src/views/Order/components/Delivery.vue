<template>
  <div class="delivery">
    <div class="section_title">Shipping method</div>
    <div class="section_subtitle">Select the one you want</div>
    <div class="delivery_options">
      <label class="delivery_option clearfix" v-for="item in options"
        :key="item.type"
      >
        <span>{{ item.type }}</span>
        <input type="radio" name="radio" :checked="item.checked" @click="$emit('selectDelivery', item.type)">
        <span class="checkmark"></span>
        <span class="delivery_price">${{ item.price }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Delivery",
  props: ["options"],
}
</script>

<style>
.delivery {
  width: 100%;
}
.delivery_options {
  margin-top: 38px;
}
.delivery_option {
  display: block;
  position: relative;
  padding-left: 36px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 14px;
  font-weight: 400;
  color: #1b1b1b;
}
.delivery_option:not(:last-child) {
  margin-bottom: 27px;
}
.delivery_option input {
  position: absolute;
  opacity: 0;
  visibility: hidden;
}
.delivery_price {
  float: right;
}
.checkmark {
	position: absolute;
	top: 0;
	left: 0;
	margin-top: 4px;
	width: 11px;
	height: 11px;
	border-radius: 50%;
	border: solid 2px #9f9f9f;
	background: #FFFFFF;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.delivery_option input:checked ~ .checkmark {
  background: #e95a5a;
  border: solid 2px #e95a5a;
}
.delivery_option input:hover ~ .checkmark {
  background: #e95a5a;
}
</style>