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
                        <button 
                          class="item-minus"
                          :class="item.amount == 1 ? 'unavailable' : ''" 
                          @click="incrementAmount(false)"
                        >-</button>
                        <span class="amount">{{ item.amount }}</span>
                        <button 
                          class="item-plus" 
                          @click="incrementAmount(true)"
                        >+</button>
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
export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    
    productApi: {
      type: String,
      default: () => '',
    },
  },

  methods: {
    incrementAmount(val) {
      this.$emit('incrementAmount', { id: this.item.id, amount: val ? 1 : -1 });
    },

    deleteItem(val) {
      this.$emit('deleteItem', val);
    },
  },

  computed: {
    imgUrl() {
      return this.productApi + this.item.imgUrl;
    },
  },
};
</script>