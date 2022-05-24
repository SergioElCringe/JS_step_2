<template>
  <div>
    <!-- Cart Info -->

    <div class="cart_info">
      <div class="container">
      <div class="cart">
        <h1>Cart</h1>
      </div>
            <!-- Cart Item -->
            <div class="cartCart">
        <cartItem v-for="item of itemsCart"
        :key="item.id"
        :item="item"
        :productsApi="productsApi"
        />
            </div>
        <Delivery :money="money"/>
      </div>
    </div>
  </div>
</template>

<script>
import cartItem from '../components/items/cartItem.vue'
import Delivery from '../componentsPage/cartComponents/Delivery.vue'
export default {
  components: { cartItem , Delivery },
 data() {
      return {
        items: [],
        urlCart: '/api/cart',
        error: null,
        productsApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products/',
        itemsCart: [],
        money : 0
      };
    },
    methods: {
      async howMoney() {
			this.money = 0;
			await this.itemsCart.find((el) => {
					this.money += el.price * el.amount;
				});
		}
    },
  async created() {
    const cart = await fetch(this.urlCart).then(d => d.json());
    this.itemsCart = cart.items;
    this.howMoney();
  }
};
</script>
<style>
.cart {
  margin-top: 5%;
  margin-bottom: 3%;
  border-bottom: 3px solid black;
  background-image: url(https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/BASE__PROJECT/images/avds_large.jpg);
  color: beige;
  height: 111px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cartCart{
  margin-bottom: 5%;
}

</style>