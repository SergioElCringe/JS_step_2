<template>
  <div class="cart">
    <div class="cart__item">
        <img class="cart__item__img" :src="ImgUrl">
        <div class="cart__item__info">
            <span>Name: <b>{{ item.name }}</b></span>
            <div class="price__block">
                <span>Cost: <b>${{ item.price }}</b></span>
                <div class="qty-flex">
                    <span>Qty:</span>
                    <div class="qty">
                        <button class="item-minus" @click="changeItem({api: api.url, changes: { id: item.id, amount: -1, price: -item.price }})">-</button>
                        <span class="amount">{{ item.amount }}</span>
                        <button class="item-plus" @click="changeItem({api: api.url, changes: { id: item.id, amount: 1, price: item.price }})">+</button>
                    </div>
                </div>
                <span>Total: <b>${{ item.totalPrice }}</b></span>
            </div>
        </div>
    </div>
    <div>
        <span class="item-delete"></span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CartItem',
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
    ImgUrl() {
      return this.api.productApi + this.item.imgUrl;
    },
  },
};
</script>