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
                        <button class="item-minus" @click="changeItem({ id: item.id, amount: -1, price: -item.price })">-</button>
                        <span class="amount">{{ item.amount }}</span>
                        <button class="item-plus" @click="changeItem({ id: item.id, amount: 1, price: item.price })">+</button>
                    </div>
                </div>
                <span>Total: <b>${{ item.totalPrice }}</b></span>
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
      changeItem: 'Cart/changeItem',
      deleteItem: 'Cart/deleteItem',
    }),
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