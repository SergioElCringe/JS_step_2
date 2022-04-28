<template>
  <div class="d-flex flex-row align-items-center mb-5">
    <div class="cart_item_product d-flex flex-row align-items-center justify-content-start">
      <div class="cart_item_image">
        <div><img :src="imgUrl" /></div>
      </div>
      <div class="cart_item_name_container">
        <div class="cart_item_name"><a href="#">{{ item.name }}</a></div>
        <div class="cart_item_edit">Remove Product</div>
      </div>
    </div>
    <div class="cart_item_price">${{ item.price }}</div>
    <div class="cart_item_quantity">
      <div class="product_quantity_container">
        <div class="product_quantity clearfix">
          <span>Qty</span>
          <input
            id="quantity_input"
            type="text"
            pattern="[0-9]*"
            :value="item.amount"
          />
          <div class="quantity_buttons">
            <div class="quantity_inc quantity_control" @click="changeItem({api: api.url, changes: { id: item.id, amount: 1, price: item.price }})">
              <i class="fa fa-chevron-up" aria-hidden="true"></i>
            </div>
            <div class="quantity_dec quantity_control" @click="changeItem({api: api.url, changes: { id: item.id, amount: -1, price: -item.price }})">
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cart_item_total">${{ item.totalPrice }}</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "ShoppingCartItems",
  props: {
    item: {
      type: Object,
    },
    api: {
      type: Object,
    },
  },

  methods: {
    ...mapActions({
      changeItem: 'Cart/changeItem',
    }),
  },

  computed: {
    imgUrl() {
      return this.api.productApi + this.item.imgUrl;
    },
  },
};
</script>

<style>
</style>