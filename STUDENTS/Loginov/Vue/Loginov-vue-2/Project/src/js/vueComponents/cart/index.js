import item from '../catalogItem';

export default {
  name: 'cart',
  components: { item },

  data() {
    return {
    };
  },

  computed: {

  },

  async created() {
    try {
      const data = await this.$api.send(this.api.url, 'GET');
      this.items = data.items;
    } catch (err) {
      console.warn(err);
    };
  },

  template: `
    <div class="shopping_cart">
      <button id="cart" @click="toggleCart()">
        <img class="cart__icon" src="./src/assets/img/cartIcon.svg" alt="">
        <div>Cart
        <span id="cart-counter">(0)</span>
        </div>
      </button>
      <div class="cart__content" id="cart-items" v-show="open">
      <div v-if="itemsCart.length > 0">
        <div class="cart" v-for="item of itemsCart" :key="item.id">
          <div class="cart__item">
            <img class="cart__item__img" :src="productsApi + item.imgUrl">
            <div class="cart__item__info">
              <span>{{ item.name }}</span>
              <div class="price__block">
                <span>$ {{ item.price }}</span>
                <span>{{ item.amount }}</span>
              </div>
              </div>
              <button class="cart__delete" @click="deleteItem(item)">
                x
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
}