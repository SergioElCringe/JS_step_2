<template>
  <div class="cart__item">
    <img class="cart__item__img" :src="imgUrl" />
    <div class="cart__item__info">
      <span>{{ item.name }}</span>
      <div class="price__block">
        <span>${{ item.price }}</span>
        <span>{{ item.amount }}</span>
      </div>
    </div>
    <button class="cart__delete" @click="deleteItem(item)">x</button>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {
    item: {
      type: Object
    },
    imgApi: {
      type: String,
    }
  },
  computed: {
    imgUrl() {
      return this.imgApi + this.item.imgUrl;
    }
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>