<template>
  <div class="cart__item">
    <img class="cart__item__img" :src="imgUrl">
    <div class="cart__item__info">
      <span>{{ item.name }}</span>
      <div class="price__block">
        <span>${{ item.price }}</span>
        <span>{{ item.amount }}</span>
      </div>
    </div>
    <button class="cart__delete">
    x
    </button>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    item: {
      type: Object,
      // default: () => ({ a: 1 })
    },
    imgApi: {
      type: String,
      // default: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products'
    }
  },
  computed: {
    imgUrl() {
      return this.imgApi + this.item.imgUrl;
    }
  }
}
</script>

<style>

</style>