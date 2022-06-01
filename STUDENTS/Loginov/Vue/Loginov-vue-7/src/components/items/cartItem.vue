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
    <div class="cart__buttons">
      <div class="cart__quantity_buttons">
        <button @click="changeAmount(true)">+</button>
        <button @click="changeAmount(false)">-</button>
      </div>
      <button class="cart__delete" @click="deleteItem(item)">x</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {
    item: {
      type: Object,
    },
    imgApi: {
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {
    changeAmount(add) {
      this.$emit('changeItem', { id: this.item.id, amount: add ? 1 : -1});
    }
  },
  computed: {
    imgUrl() {
      return this.imgApi + this.item.imgUrl[0];
    },
  },
};
</script>

<style>
.cart__item {
  width: 500px;
  display: flex;
  flex-direction: row;
}
.cart__buttons {
  display: flex;
}
.cart__quantity_buttons {
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cart__delete {
  width: 30px;
}
</style>