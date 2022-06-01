<template>
  <div class="product_details">
		<div class="container" v-if="!loading">
			<div class="row details_row">

				<!-- Product Image -->
				<Gallery :images="pr.imgUrl" :imgApi="imgApi"/>

				<!-- Product Content -->
				<div class="col-lg-6">
					<div class="details_content">
						<div class="details_name">{{pr.name}}</div>
						<div class="details_discount">{{pr.prevPrice}}$</div>
						<div class="details_price">{{pr.price}}$</div>

						<!-- In Stock -->
						<div class="in_stock_container">
							<div class="availability">Availability:</div>
							<span>In Stock</span>
						</div>
						<div class="details_text">
							<p>{{ pr.aboutProgect }}</p>
						</div>

						<!-- Product Quantity -->
						<div class="product_quantity_container">
							<div class="product_quantity clearfix">
								<span>Qty</span>
								<input id="quantity_input" type="text" pattern="[0-9]*"><span class="inputSpan">{{valueProduct}}</span>
								<div class="quantity_buttons">
									<div id="quantity_inc_button" class="quantity_inc quantity_control" @click="upValue"><i class="fa fa-chevron-up" aria-hidden="true"></i></div>
									<div id="quantity_dec_button" class="quantity_dec quantity_control" @click="downValue"><i class="fa fa-chevron-down" aria-hidden="true"></i></div>
								</div>
							</div>
							<div class="button cart_button" @click="addItem(pr)"><a href="#">Add to cart</a></div>
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
						<p>{{ pr.description }}</p>
					</div>
				</div>
			</div>
		</div>
    <div class="container" v-else>
      <div class="row details_row">
        <h1>LOADING...</h1>
      </div>
    </div>
	</div>
</template>

<script>
import Gallery from './components/Gallery.vue';
import { mapActions, mapState } from 'vuex';
export default {
  name: 'Product',
  components: { Gallery },
  data() {
    return {
      loading: false,
      imgApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products',
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
      'getProduct': 'Catalog/getProduct',
	  'upValue': 'Catalog/upValue',
	  'downValue': 'Catalog/downValue',
      'addItem': 'Cart/addItem',
    })
  },
    computed: {
    ...mapState({
	  pr: state => state.Catalog.product,
	  valueProduct: state => state.Catalog.valueProduct
    }),
  },
}
</script>

<style>
.product_details{
    margin-top: 12%;
    margin-bottom: 12%;
}
.inputSpan{
	margin-left: 43%;
}
</style>