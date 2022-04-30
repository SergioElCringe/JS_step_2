<template>
  <div class="d-flex flex-row align-items-center mb-5">
    <div class="cart_item_product d-flex flex-row align-items-center justify-content-start">
      <div class="cart_item_image">
        <div><img :src="imgUrl" /></div>
      </div>
      <div class="cart_item_name_container">
        <div class="cart_item_name"><router-link :to="`/catalog/${item.id}`">{{ item.name }}</router-link></div>
        <div class="cart_item_edit" @click="deleteItem({ id: item.id })">Remove Product</div>
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
            <div class="quantity_inc quantity_control" @click="increment(true)">
              <i class="fa fa-chevron-up" aria-hidden="true"></i>
            </div>
            <div class="quantity_dec quantity_control" @click="increment(false)">
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cart_item_total">${{ item.price * item.amount }}</div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: "ShoppingCartItems",
  props: {
    item: {
      type: Object,
    },
  },

  methods: {
    ...mapActions({
      incrementAmount: 'Cart/incrementAmount',
      deleteItem: 'Cart/deleteItem',
    }),

    increment(val) {
      this.incrementAmount({ id: this.item.id, amount: val ? 1 : -1 });
    },
  },

  computed: {
    ...mapState({
      productApi: state => state.Catalog.productApi,
    }),

    imgUrl() {
      return this.productApi + this.item.imgUrl;
    },
  },
};
</script>