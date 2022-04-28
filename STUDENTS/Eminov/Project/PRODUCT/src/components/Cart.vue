<template>
  <div class="shopping_cart">
    <button @click="openCart = !openCart">
      <img src="../assets/img/basket.svg" />
      <div>
        Cart
        <span class="cart-counter">({{ totalCount }})</span>
        <span class="cart-prices">{{ totalPrice }}$</span>
      </div>
    </button>
    <div class="cart__content" v-show="openCart">
      <div v-if="items.length > 0">
        <cartItem
          v-for="item of items"
          :key="item.id"
          :item="item"
          :api="api"
        />
        <hr />
        <div class="action">
          <div class="continue">
            <span>
              <router-link to="/Cart"><b>Continue</b></router-link>
            </span>
          </div>
          <div class="clear-all">
            <span id="remove" @click="deleteItem(true)"
              ><b>Remove all products</b></span
            >
          </div>
        </div>
      </div>
      <div v-else>
        <p class="no-bascket">
          <b
            >There are no products. Select products to purchase from catalog.</b
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import cartItem from './items/CartItem.vue';

export default {
  name: 'Cart',
  components: { cartItem },

  data() {
    return {
      items: [],
      openCart: false,
      api: {
        productApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products',
        url: '/api/cart',
      },
    };
  },

  methods: {
    async addItem(item) {
      const { id, imgUrl, name, price } = item;
      const find = this.items.find((cartItem) => cartItem.id === id);

      if (!find) {
        const newItem = { id, imgUrl, name, price, totalPrice: price, amount: 1 };

        try {
          const data = await $api.send(this.api.url, 'POST', newItem);
          if (!data.error) {
            this.items.push(newItem);
          };
        } catch (err) {
          console.warn(err);
        };
      };
    },

    async changeItem(id, value, price) {
      const find = this.items.find((item) => item.id == id);

      try {
        const data = await $api.send(this.api.url + `/${id}`, 'PUT', { value, price });

        if (!data.error) {
          if (value == -1 && find.amount == 1) {
            await this.deleteItem(false, id);
          } else {
            find.amount += value;
            find.totalPrice += price;
          };
        };
      } catch (err) {
        console.warn(err);
      };
    },

    async deleteItem(removeAllItems, id = "") {
      try {
        if (!removeAllItems) {
          const find = this.items.find((item) => item.id == id);
          const data = await $api.send(this.api.url, 'DELETE', { removeAllItems, id: find.id });

          if (!data.error) {
            const index = this.items.indexOf(find);
            this.items.splice(index, 1);
          }
        } else {
          const data = await $api.send(this.api.url, 'DELETE', { removeAllItems });

          if (!data.error) {
            this.items = [];
          };
        }
      } catch (err) {
        console.warn(err);
      };
    },

    async fetchCart() {
      try {
        const data = await $api.send(this.api.url, 'GET');
        this.items = data.items;
      } catch (err) {
        console.warn(err);
      };
    },
  },

  computed: {
    totalPrice() {
      return this.items.reduce((acc, item) => {
        return (acc += item.totalPrice);
      }, 0);
    },

    totalCount() {
      return this.items.reduce((acc, item) => {
        return (acc += item.amount);
      }, 0);
    },
  },

  created() {
    this.fetchCart();
  },
};
</script>