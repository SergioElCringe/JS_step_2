<template>
  <div>
		<button class="btn__cart" @click="toggleCart">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 489 489" style="enable-background:new 0 0 489 489;" xml:space="preserve">
					<g>
							<!-- <path d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3 c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1 C440.2,423.5,440.2,423.1z,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462 H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41 c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z"/> -->
					</g>
				</svg>
				<div>
					Cart 
					<span>
						({{counter}})
					</span>
				</div>
				<div class="cart__total" >$ {{ total }}</div>
		</button>
		<div class="cart__content" v-bind:class="{active: showCart}">
			<item 
				v-for="item of items" 
				:key="item.id"
				:item="item"
				:imgApi="imgApi"
				@changeItem="changeItem($event)"
			/>
		</div>
	</div>
</template>

<script>
import item from './items/cartItem.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Cart',
  components: { item },
  
  data() {
    return {
      items: [],
			total: null,
			counter: null,
      url: '/api/cart',
      imgApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products',
      showCart: false,
			interval: null,
    };
  },
  computed:{
		...mapGetters({
			data: 'Cart/getData',
		}),
		calcTotalSumm(){
			this.total = this.items.reduce((acc, item)=>{
				acc += item.amount * item.price;
				return acc;
			},0);
		},
	},
  methods: {
		...mapActions({
			getCart: 'Cart/getCart',
		}),
		async changeItem(pl){
			const {id, amount} = pl;
			const find = this.items.find((item)=> item.id == id);
			try{
				const data = await $api.send(this.url, 'PUT', { amount }, id);
				find.amount += amount;
				this.calcTotalSumm;
			}
			catch(err){
				console.log('changeItem ERROR');
				console.warn(err);
			}
			
		},		
		deleteItemAll(){
			console.log(' delete All');
		},
		countAmount() {
			this.counter = this.items.reduce((acc, item) => {
				acc += item.amount;
				return acc;
			}, 0);
		},
		toggleCart() {
			this.showCart = !this.showCart;
		},
		async getCartData(){
			try {
				await this.getCart(this.url);
				this.items = this.data.items;
				this.total = this.data.total;
			}
			catch (err) {
				this.error = err;
				console.warn('ERROR CART');
			}
			finally {
			this.countAmount();
			}
		},
  },
	created() {
		this.getCartData();
		this.interval = setInterval(()=>{
			this.getCartData();
		}, 1000000)
	},
	beforeUnmount(){
		window.clearInterval(this.interval);
		this.interval = null;
	},
}
</script>

<style>
.btn__cart {
	border: none;
	background: none;
	display: flex;
	align-items: center;
	font-size: 16px;
	font-weight: 600;
	cursor: pointer;
}
.btn__cart svg {
	width: 30px;
	margin: 0px 10px 0px 0px;
}
.cart__total {
	font-size: 20px;
	height: 40px;
	padding: 0px 10px;
	text-align: right;
	justify-self: end;
}
.cart__content {
	position: absolute;
	display: flex;
	width: 300px;
	min-height: 200px;
	border-radius: 5px;
	background: #ddf;
	left: 1900px;
	/* left: -200px; */
	top: 95px;
	flex-direction: column;
	justify-content: space-between;
	color: black;
	transition: left 0.3s ease 0s;
}

.active {
	left: -100px;
}
</style>