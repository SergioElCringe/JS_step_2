<template>
	<div class="product_details">
		<div class="container" v-if="!loading">
			<div class="row details_row">
				<!-- Product Image -->
				<Gallery :images="[]" />
				<!-- Product Content -->
				<div class="col-lg-6">
					<div class="details_content">
						<div class="details_name">Smart Phone</div>
						<div class="details_discount">$890</div>
						<div class="details_price">$670</div>
						<!-- In Stock -->
						<div class="in_stock_container">
							<div class="availability">Availability:</div>
							<span>In Stock</span>
						</div>
						<div class="details_text">
							<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.</p>
						</div>
						<!-- Product Quantity -->
						<div class="product_quantity_container">
							<div class="product_quantity clearfix">
								<span>Qty</span>
								<input id="quantity_input" type="text" pattern="[0-9]*" value="1">
								<div class="quantity_buttons">
									<div id="quantity_inc_button" class="quantity_inc quantity_control" data-qty="1"><i class="fa fa-chevron-up" aria-hidden="true"></i></div>
									<div id="quantity_dec_button" class="quantity_dec quantity_control" data-qty="-1"><i class="fa fa-chevron-down" aria-hidden="true"></i></div>
								</div>
							</div>
							<div class="button cart_button"><a href="#">Add to cart</a></div>
						</div>
						<!-- Share -->
						<div class="details_share">
							<span>Share:</span>
							<ul>
								<li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
								<li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
								<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
								<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="row description_row">
				<div class="col">
					<div class="description_title_container">
						<div class="description_title">Description</div>
						<div class="reviews_title"><a href="#">Reviews <span>(1)</span></a></div>
					</div>
					<div class="description_text">
						<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.</p>
					</div>
				</div>
			</div>
		</div>
    <div class="container" v-else>
      <div class="row details_row">
        <h1>ВЖУХ...</h1>
      </div>
    </div>
	</div>
</template>

<script>
import Gallery from './components/Gallery.vue';
import {mapActions} from 'vuex';

export default {
	name: 'Product',
	components: {
		Gallery
	},
	data() {
    return {
      loading: false,
			// product: null,
    };
  },
	async created() {
    this.loading = true;
    try { 
			await this.getProduct(this.$route.params.id);
    } 
    catch(err) {
      throw err;
    } 
    finally {
      this.loading = false;
    }
  },
	methods: {
    ...mapActions({
      'getProduct': 'Catalog/getProduct'
    }),
  },
}
</script>

<style>

</style>