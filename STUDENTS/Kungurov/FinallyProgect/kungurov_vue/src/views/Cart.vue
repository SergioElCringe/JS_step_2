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
        <cartItem v-for="item of items"
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
import { mapGetters , mapActions } from 'vuex';
export default {
  components: { cartItem , Delivery },
 data() {
      return {
        urlCart: '/api/cart',
        error: null,
        productsApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products/',
        itemsCart: [],
      };
    },

   methods: {
		...mapActions({
      		getCart: 'Cart/getCart'
    	}),
  },

  computed: {
 	  ...mapGetters({
      items: 'Cart/itemsCheck',
	    money: 'Cart/moneyCheck'
 	  })
 	 },
   async created() {
     try {
      	await this.getCart(this.urlCart)
     }
     catch(err) {
       console.warn(err)
     }
   },
};
</script>
<style>
.cart {
  margin-top: 2%;
  margin-bottom: 3%;
  border-bottom: 3px solid black;
  background-image: url(https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/BASE__PROJECT/images/avds_large.jpg);
  color: beige;
  height: 111px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
}
.cartCart{
  margin-bottom: 5%;
}

</style>