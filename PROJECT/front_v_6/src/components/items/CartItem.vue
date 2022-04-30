<template>
  <div class="cart">
    <div class="cart__item">
        <img class="cart__item__img" :src="ImgUrl">
        <div class="cart__item__info">
            <span>Name: <b>{{ item.name }}</b></span>
            <div class="price__block">
                <span>Cost: <b>{{ item.price }}$</b></span>
                <div class="qty-flex">
                    <span>Qty:</span>
                    <div class="qty">
                        <!-- <button class="item-minus" @click="$parent.changeItem(item.id, -1, -item.price)">-</button> -->
                        <button class="item-minus" @click="changeAmount(false)">-</button>
                        <span class="amount">{{ item.amount }}</span>
                        <!-- <button class="item-plus" @click="$parent.changeItem(item.id, 1, item.price)">+</button> -->
                        <button class="item-plus" @click="changeAmount(true)">+</button>
                    </div>
                </div>
                <span>Total: <b>{{ item.totalPrice }}$</b></span>
            </div>
        </div>
    </div>
    <div>
        <span class="item-delete" @click="$parent.deleteItem(false, item.id)"></span>
    </div>
  </div>
</template>

<script>
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

  computed: {
    ImgUrl() {
      return this.api.productApi + this.item.imgUrl;
    },
  },

  methods: {
    changeAmount(add) {
      //$emit
      this.$emit('changeItem', { id: this.item.id, amount: add ? 1 : -1 });
    },
  }
};
</script>