<template>
  <div class="header">
		<div class="header_container">
			<div class="container">
				<div class="row">
					<div class="col">
						<div class="header_content d-flex flex-row align-items-center justify-content-start">
							<div class="logo"><router-link to="/">Sublime.</router-link></div>
							<nav class="main_nav">
								<ul>
									<li class="hassubs active">
										<router-link to="/">Home</router-link>
										<ul>
											<li><router-link to="/cart">Cart</router-link></li>
											<li><router-link to="/checkout">Checkout</router-link></li>
											<li><router-link to="/contact">Contact</router-link></li>
										</ul>
									</li>
									<li><a href="#">Accessories</a></li>
									<li><a href="#">Offers</a></li>
									<li><router-link to="/contact">Contact</router-link></li>
								</ul>
							</nav>
							<div class="header_extra ml-auto">
								<div class="shopping_cart">
                  					<Cart ref="cart" v-if="$route.path !== '/cart'"/>
								</div>
								<div class="hamburger"><i class="fa fa-bars" aria-hidden="true"></i></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  </div>
		
</template>

<script>
import Cart from './Cart.vue'
export default {
  name: 'Header',
   components: {
    Cart
  },

}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.header_container{
  height: 80px;
  display: flex;
  align-items: center;
}
</style>
