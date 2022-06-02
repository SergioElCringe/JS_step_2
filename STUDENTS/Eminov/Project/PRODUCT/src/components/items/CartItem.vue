<template>
  <div class="cart">
    <div class="cart__item">
        <img class="cart__item__img" :src="imgUrl">
        <div class="cart__item__info">
            <span>Name: <b>{{ item.name }}</b></span>
            <div class="price__block">
                <span>Cost: <b>${{ item.price }}</b></span>
                <div class="qty-flex">
                    <span>Qty:</span>
                    <div class="qty">
                        <button class="item-minus" @click="increment(false)">-</button>
                        <span class="amount">{{ item.amount }}</span>
                        <button class="item-plus" @click="increment(true)">+</button>
                    </div>
                </div>
                <span>Total: <b>${{ item.price * item.amount }}</b></span>
            </div>
        </div>
    </div>
    <div>
        <span class="item-delete" @click="deleteItem({ id: item.id })"></span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'CartItem',
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