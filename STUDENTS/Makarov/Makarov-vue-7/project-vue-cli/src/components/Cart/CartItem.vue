<template>
  <div class='cart-item'>
    <img class='cart-item__img' :src='imgURLTemplate + item.images[0]' />
    <div class='cart-item__info'>
      <span class='cart-item__title'>{{ item.title }}</span>
      <div class='cart-item__order'>
        <span class='cart-item__price'>{{ item.price }}</span>
        <span class='cart-item__amount'>
          <b class='cart-item__btn cart-item__btn_minus' @click='decrement'>-</b>
          <span> {{ item.amount }} </span>
          <b class='cart-item__btn cart-item__btn_plus' @click='increment'>+</b>
        </span>
      </div>
    </div>
    <button class='cart__delete-btn' @click='remove'>×</button>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: ['item', 'imgURLTemplate'],
  methods: {
    remove () {
      this.$emit('remove', this.item);
    },
    increment() {
      this.$emit('increment', this.item);
    },
    decrement() {
      this.$emit('decrement', this.item);
    }
  },
};
</script>

<style>
</style>