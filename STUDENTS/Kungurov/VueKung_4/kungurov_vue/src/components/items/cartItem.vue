<template>
  <div class="cart__item" id="cart__item">
    <img class="cart__item__img" :src="productsApi + item.imgUrl" />
    <div class="cart__item__info">
      <span>{{ item.name }}</span>
      <div class="price__block">
        <span>$ {{ item.price }}</span>
        <span>количество: {{ item.amount }}</span>
      </div>
    </div>
    <button class="delete" @click="deleteItem(item)"> x </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';


export default {
    name: 'CartItem',
    props: ['item', 'productsApi'],

     methods: {
    ...mapActions({
      deleteItem: 'Cart/deleteItem'
    }),
  },
};
</script>

<style>
</style>