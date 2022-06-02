<template>
  		<div class="menu menu_mm trans_300">
			<div class="menu_container menu_mm">
				<div class="page_menu_content">

					<div class="page_menu_search menu_mm">
						<form action="#">
							<input type="search" required="required" class="page_menu_search_input menu_mm"
								placeholder="Search for products...">
						</form>
					</div>
					<ul class="page_menu_nav menu_mm">
						<li class="page_menu_item has-children menu_mm">
							<a href="index.html">Home<i class="fa fa-angle-down"></i></a>
							<ul class="page_menu_selection menu_mm">
								<li class="page_menu_item menu_mm">
									<a href="categories.html">Categories<i class="fa fa-angle-down"></i></a>
								</li>
								<li class="page_menu_item menu_mm">
									<a href="product.html">Product<i class="fa fa-angle-down"></i></a>
								</li>
								<li class="page_menu_item menu_mm">
									<a href="cart.html">Cart<i class="fa fa-angle-down"></i></a>
								</li>
								<li class="page_menu_item menu_mm">
									<a href="checkout.html">Checkout<i class="fa fa-angle-down"></i></a>
								</li>
								<li class="page_menu_item menu_mm">
									<a href="contact.html">Contact<i class="fa fa-angle-down"></i></a>
								</li>
							</ul>
						</li>
						<li class="page_menu_item has-children menu_mm">
							<a href="categories.html">Categories<i class="fa fa-angle-down"></i></a>
							<ul class="page_menu_selection menu_mm">
								<li class="page_menu_item menu_mm">
									<a href="categories.html">Category<i class="fa fa-angle-down"></i></a>
								</li>
								<li class="page_menu_item menu_mm">
									<a href="categories.html">Category<i class="fa fa-angle-down"></i></a>
								</li>
								<li class="page_menu_item menu_mm">
									<a href="categories.html">Category<i class="fa fa-angle-down"></i></a>
								</li>
								<li class="page_menu_item menu_mm">
									<a href="categories.html">Category<i class="fa fa-angle-down"></i></a>
								</li>
							</ul>
						</li>
						<li class="page_menu_item menu_mm">
							<a href="index.html">Accessories<i class="fa fa-angle-down"></i></a>
						</li>
						<li class="page_menu_item menu_mm">
							<a href="#">Offers<i class="fa fa-angle-down"></i></a>
						</li>
						<li class="page_menu_item menu_mm">
							<a href="contact.html">Contact<i class="fa fa-angle-down"></i></a>
						</li>
					</ul>
				</div>
			</div>

			<CloseBtn
                :type="btnType"
                :key="btnType"
            />

            <Socials class="menu_social" />
		</div>
</template>

<script>
import CloseBtn from './CloseBtn.vue';
import Socials from '../Socials/Socials.vue'

export default {
    name: 'SideMenu',
    components: { CloseBtn, Socials },
    data: function() {
        return {
            btnType: 'menu_close'
        }
    }
}
</script>

<style>

</style>