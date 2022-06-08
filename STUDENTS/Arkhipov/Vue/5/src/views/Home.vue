<template>
<div>
	<div class="menu menu_mm trans_300">
			<div class="menu_container menu_mm">
				<div class="page_menu_content">
					<div class="page_menu_search menu_mm">
						<form action="#">
							<input type="search" class="page_menu_search_input menu_mm" placeholder="Search for products...">
						</form>
					</div>
					<ul class="page_menu_nav menu_mm">
						<li class="page_menu_item has-children menu_mm">
							<a href="index.html">Home<i class="fa fa-angle-down"></i></a>
							<ul class="page_menu_selection menu_mm">
								<li class="page_menu_item menu_mm"><a href="categories.html">Categories<i
											class="fa fa-angle-down"></i></a></li>
								<li class="page_menu_item menu_mm"><a href="product.html">Product<i class="fa fa-angle-down"></i></a>
								</li>
								<li class="page_menu_item menu_mm"><a href="cart.html">Cart<i class="fa fa-angle-down"></i></a></li>
								<li class="page_menu_item menu_mm"><a href="checkout.html">Checkout<i class="fa fa-angle-down"></i></a>
								</li>
								<li class="page_menu_item menu_mm"><a href="contact.html">Contact<i class="fa fa-angle-down"></i></a>
								</li>
							</ul>
						</li>
						<li class="page_menu_item has-children menu_mm">
							<a href="categories.html">Categories<i class="fa fa-angle-down"></i></a>
							<ul class="page_menu_selection menu_mm">
								<li class="page_menu_item menu_mm"><a href="categories.html">Category<i
											class="fa fa-angle-down"></i></a></li>
								<li class="page_menu_item menu_mm"><a href="categories.html">Category<i
											class="fa fa-angle-down"></i></a></li>
								<li class="page_menu_item menu_mm"><a href="categories.html">Category<i
											class="fa fa-angle-down"></i></a></li>
								<li class="page_menu_item menu_mm"><a href="categories.html">Category<i
											class="fa fa-angle-down"></i></a></li>
							</ul>
						</li>
						<li class="page_menu_item menu_mm"><a href="index.html">Accessories<i class="fa fa-angle-down"></i></a></li>
						<li class="page_menu_item menu_mm"><a href="#">Offers<i class="fa fa-angle-down"></i></a></li>
						<li class="page_menu_item menu_mm"><a href="contact.html">Contact<i class="fa fa-angle-down"></i></a></li>
					</ul>
				</div>
			</div>
			<div class="menu_close"><i class="fa fa-times" aria-hidden="true"></i></div>
			<div class="menu_social">
				<ul>
					<li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
					<li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
					<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
					<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
				</ul>
			</div>
	</div>
	<!-- <Slider/> -->
	<Avds/>
	<!-- Products -->
	<div class="products">
		<div class="container">
			<div class="row">
				<div class="col">
					<!-- Каталог -->
					<Catalog/>
				</div>
			</div>
		</div>
	</div>
	<AmazingDevices/>
	<IconBox/>
	<!-- <NewsLetter/> -->
	</div>
</template>

<script>
import Catalog from '@/components/Catalog.vue';
import Slider from '@/components/Slider.vue';
import Avds from '../components/Avds.vue';
import AmazingDevices from '../components/AmazingDevices.vue';
import IconBox from '../components/IconBox.vue';
// import NewsLetter from '../components/NewsLetter.vue';
export default {
    name: "Home",
    components: { Catalog, Slider, Avds, AmazingDevices, IconBox },
}
</script>

<style lang="scss">

</style>