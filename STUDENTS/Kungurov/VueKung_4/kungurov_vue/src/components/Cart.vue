<template>
  <div>
    <div>
      Cart <span id="cart-counter">({{ this.items.length }})</span>
    </div>
    <button id="ourCart" @click="createCart"></button>
    <div id="cart" v-show="click">
      <h2>Ваша корзина :</h2>
      <cartItems
        v-for="item of items"
        :key="item.id"
        :item="item"
        :productsApi="productsApi"
      />
      <div id="mon">
        <span>{{ this.money }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import cartItems from '../components/items/cartItem.vue'
import { mapState, mapGetters , mapActions} from 'vuex';
export default {
 name: 'Cart',
    components: { cartItems },
    data() {
      return {
        urlCart: '/api/cart',
        error: null,
        productsApi:  'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products/',
	    click:        false,
	    value:        0,
      };
    },
    methods: {
		...mapActions({
      		getCart: 'Cart/getCart'
    	}),
		async createCart() {
			this.click = !this.click;
		},
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
		this.value = this.items.length
     }
     catch(err) {
       console.warn(err)
     }
   },
};
</script>

<style>
</style>