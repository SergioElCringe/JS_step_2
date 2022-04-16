<template>
    <div class="shopping_cart">
        <button @click="openCart = !openCart">
            <img :src="cartIcon" height="20px" width="20px">
            <div>Cart
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
                :api="api"/>
                <hr>
                <div class="action">
                    <div class="continue">
                        <span>
                            <a href="cart.html"><b>Continue</b></a>
                        </span>
                    </div>
                    <div class="clear-all">
                        <span id="remove" @click="deleteItem(true)"><b>Remove all products</b></span>
                    </div>
                </div> 
            </div>
            <div v-else>
                <p class="no-bascket"><b>There are no products. Select products to purchase from catalog.</b></p>
            </div>
        </div>
    </div>
</template>

<script>
import cartItem from './items/cart-item.vue';
export default {
  name: "cart",
  components: { cartItem },

  data() {
    return {
      items: [],
      openCart: false,
      cartIcon: "https://raw.githack.com/SergioElCringe/JS_step_1/main/students/Eminov/Project/Eminov-hw-8/src/assets/img/backet.svg",
      api: {
        productApi: "https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products",
        url: "/api/cart"
      },
    };
  },

  methods: {
    async addItem(item) {
        const { id, imgUrl, name, price } = item;
        const find = this.items.find(cartItem => cartItem.id === id);

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
      const find = this.items.find(item => item.id == id);

      try {
        const data = await $api.send(this.api.url + `/${id}`, "PUT", { value, price, });

        if (!data.error) {
          if (value == -1 && find.amount == 1) {
            await this.deleteItem(false, id);
          } else {
            find.amount += value;
            find.totalPrice += price;
          }
        }
      } catch (err) {
        console.warn(err);
      }
    },

    async deleteItem(removeAllItems, id = "") {
      try {
        if (!removeAllItems) {
          const find = this.items.find((item) => item.id == id);
          const data = await $api.send(this.api.url, "DELETE", {
            removeAllItems,
            id: find.id,
          });

          if (!data.error) {
            const index = this.items.indexOf(find);
            this.items.splice(index, 1);
          }
        } else {
          const data = await $api.send(this.api.url, "DELETE", {
            removeAllItems,
          });

          if (!data.error) {
            this.items = [];
          }
        }
      } catch (err) {
        console.warn(err);
      }
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

  async created() {
    try {
      const data = await $api.send(this.api.url, "GET");
      this.items = data.items;
    } catch (err) {
      console.warn(err);
    }
  },
};
</script>

<style>
    .shopping_cart {
        display: inline-block;
        width: 200px;
    }

    .shopping_cart button {
        border: none;
        outline: none;
        background-color: #fff;
        cursor: pointer;
    }

    .shopping_cart button svg {
        display: inline-block;
        width: 20px;
        height: 20px;
        vertical-align: middle;
        -webkit-transition: all 200ms ease;
        -moz-transition: all 200ms ease;
        -ms-transition: all 200ms ease;
        -o-transition: all 200ms ease;
        transition: all 200ms ease;
    }

    .shopping_cart button:hover svg,
    .shopping_cart button:hover div {
        fill: #e95a5a;
        color: #e95a5a;
    }

    .shopping_cart button div {
        display: inline-block;
        vertical-align: middle;
        font-size: 14px;
        font-weight: 500;
        color: #1b1b1b;
        margin-left: 13px;
        -webkit-transition: all 200ms ease;
        -moz-transition: all 200ms ease;
        -ms-transition: all 200ms ease;
        -o-transition: all 200ms ease;
        transition: all 200ms ease;
    }

    .shopping_cart button div span {
        margin-left: 4px;
    }

    .cart__content {
        box-shadow: 0 0 9px gray;
        position: absolute;
        width: 530px;
        min-height: 90px;
        border-radius: 4px;
        background: #fff;
        left: -200px;
        flex-direction: column;
        color: black;
        top: 40px;
        padding: 5px 0;
        max-height: 500px;
        overflow: scroll;
        display: flex;
    }

    .action {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .clear-all span,
    .continue span a {
        padding: 0 10px 10px 10px;
        text-transform: uppercase;
        transition: 0.3s;
        cursor: pointer;
    }

    .clear-all span:hover,
    .continue span:hover {
        color: red;
    }
</style>