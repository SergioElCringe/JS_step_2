<template>
  <div class="shopping_cart">
    <button id="cart__btn" class="btn__cart" @click="open = !open">
      <img class="cart__icon" src="../assets/img/cartIcon.svg" alt="" />
      <div>
        Cart
        <span id="cart-counter">(0)</span>
      </div>
    </button>
    <div class="cart__content" id="cart-items" v-show="open">
      <item
        v-for="item of items" 
        :item="item" 
        :key="item.id"
        :imgApi="imgApi"
        />
    </div>
  </div>
</template>

<script>
import item from "./items/cartItem.vue";

export default {
  name: "Cart",
  components: { item },

  data() {
    return {
      items: [],
      url: "/api/cart",
      open: false,
      imgApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products',
    };
  },

  async created() {
    try {
      const data = await $api.send(this.url, "GET");
      this.items = data.items;
    } catch (err) {
      this.error = err;
    }
  },
  methods: {
    addItem(item) {
      console.log(item.name + 'added');
    }
  }
};
</script>

<style>
</style>