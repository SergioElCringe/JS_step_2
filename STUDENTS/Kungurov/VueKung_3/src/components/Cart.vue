<template>
  <div>
    <div>
      Cart <span id="cart-counter">({{ value }})</span>
    </div>
    <button id="ourCart" @click="createCart"></button>
    <div id="cart" v-if="click">
      <h2>Ваша корзина :</h2>
      <cartItems
        v-for="item of itemsCart"
        :key="item.id"
        :item="item"
        :productsApi="productsApi"
      />
      <div id="mon">
        <span>{{ money }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import cartItems from '../components/items/cartItem.vue'


export default {
 name: 'Cart',
    components: { cartItems },
    data() {
      return {
        items: [],
        urlCart: '/api/cart',
        error: null,
        productsApi:  'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products/',
        itemsCart:    [],
	    click:        false,
	    value:        0,
	    money:        0,
      };
    },

    methods: {
		async createCart() {
			this.click = !this.click;
		},
		async addItem(item) {
  			const { imgUrl, name, price, id } = item;
  			const find = this.itemsCart.find(cartItem => cartItem.id === id);
  			try {
  			  if (!find) {
  			    const newItem = await { imgUrl, name, price, id, amount: 1 };
  			    if(imgUrl){
                const data = await $api.send(this.urlCart, 'POST', newItem);
  			    if (!data.error) {
  			      this.itemsCart.push(newItem);
  			    }
  			  }
  			  } else {
                const data = await $api.send(this.urlCart, 'PUT', { value: 1 }, id);
  			    if (!data.error) {
  			      find.amount++;
  			    }
  			}
			}			
  			catch(err) {
  			}
			  this.value = this.itemsCart.length;
			  this.howMoney();
},
		async deleteItem(item) {
		   const { id } = item
		      try {
                const data = await $api.send(this.urlCart + `/${del}`, 'DELETE', {id});
				const find = this.itemsCart.find(cartItem => cartItem.id === id);
				const del = this.itemsCart.indexOf(find)

				this.itemsCart.splice(del, 1);
				this.value = this.itemsCart.length;
				this.howMoney();
		      } catch (err) {
		      };
		},
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
    this.value = this.itemsCart.length;
    this.howMoney();
},
};
</script>

<style>
</style>