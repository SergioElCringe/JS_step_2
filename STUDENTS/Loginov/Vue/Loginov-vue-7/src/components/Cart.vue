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
        v-for="item of itemsCart"
        :item="item"
        :key="item.id"
        :imgApi="imgApi"
        @changeItem="changeItem"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import item from "./items/cartItem.vue";

export default {
  name: "Cart",
  components: { item },

  data() {
    return {
      url: "/api/cart",
      open: false,
      imgApi:
        "https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products",
      interval: null,
    };
  },
  async created() {
    try {
      await this.getCart(this.url);
    } catch (err) {
      console.warn(err);
    }
  },
  methods: {
    ...mapActions({
      getCart: "Cart/getCart",
      changeItem: "Cart/changeItem",
    }),
    async changeItem(pl) {
      const { id, amount } = pl;
      const find = this.itemsCart.find((item) => item.id == id);
      try {
        const data = await $api.send(this.url + `/${id}`, "PUT", {
          amount,
        });
        if (!data.error) {
          if (amount == -1 && find.amount == 1) {
            await this.deleteItem(false, id);
          } else {
            find.amount += amount;
          }
        }
      } catch (err) {
        console.warn(err);
      }
    },
  },
  computed: {
    // totalPrice() {
    //   return this.items.reduce((acc, item) => {
    //     return (acc += +item.price * item.amount);
    //   }, 0);
    // },
    ...mapState({
      itemsCart: (state) => state.Cart.items,
    }),
  },
};
</script>

<style>
.btn__cart {
  width: 100px;
  border: 0;
  background-color: white;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
button:focus {
  outline: none;
}
button:hover {
cursor: pointer;
}
</style>