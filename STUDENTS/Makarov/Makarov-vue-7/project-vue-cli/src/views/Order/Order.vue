<template>
  <div class="super_container">
    <Header />
    <SideMenu />
	<div class="order_info">
		<div class="container">
			<div class="row">
				<div class="col">
					<!-- Column Titles -->
					<div class="order_info_columns clearfix">
						<div class="order_info_col order_info_col_product">Product</div>
						<div class="order_info_col order_info_col_price">Price</div>
						<div class="order_info_col order_info_col_quantity">Quantity</div>
						<div class="order_info_col order_info_col_total">Total</div>
					</div>
				</div>
			</div>
			<div class="row order_items_row">
				<div class="col">
                    <OrderItem v-for="item in orderItems"
                        :key="item.id"
                        :item="item"
                        @increment='incrementItemAmount'
                        @decrement='decrementItemAmount'
                    />
				</div>
			</div>
            
			<!-- <div class="row row_order_buttons">
				<div class="col">
					<div class="order_buttons d-flex flex-lg-row flex-column align-items-start justify-content-start">
						<div class="button continue_shopping_button"><a href="#">Continue shopping</a></div>
						<div class="order_buttons_right ml-lg-auto">
							<div class="button clear_order_button"><a href="#">Clear order</a></div>
							<div class="button update_order_button"><a href="#">Update order</a></div>
						</div>
					</div>
				</div>
			</div> -->
			<div class="row row_extra">
				<div class="col-lg-4">
					
					<!-- Delivery -->
					<Delivery :options="deliveryOptions"
                        @selectDelivery='selectDelivery'
                    />

					<!-- Coupon Code -->
					<!-- <div class="coupon">
						<div class="section_title">Coupon code</div>
						<div class="section_subtitle">Enter your coupon code</div>
						<div class="coupon_form_container">
							<form action="#" id="coupon_form" class="coupon_form">
								<input type="text" class="coupon_input" required="required">
								<button class="button coupon_button"><span>Apply</span></button>
							</form>
						</div>
					</div> -->
				</div>

				<div class="col-lg-6 offset-lg-2">
					<div class="order_total">
						<div class="section_title">Total</div>
						<div class="section_subtitle">Final info</div>
						<div class="order_total_container">
							<ul>
								<li class="d-flex flex-row align-items-center justify-content-start">
									<div class="order_total_title">Subtotal</div>
									<div class="order_total_value ml-auto">${{ subtotal }}</div>
								</li>
								<li class="d-flex flex-row align-items-center justify-content-start">
									<div class="order_total_title">Shipping</div>
									<div class="order_total_value ml-auto">${{ selectedDelivery.price }}</div>
								</li>
								<li class="d-flex flex-row align-items-center justify-content-start">
									<div class="order_total_title">Total</div>
									<div class="order_total_value ml-auto">${{ total }}</div>
								</li>
							</ul>
						</div>
						<div class="button checkout_button">
							<span>Proceed to checkout</span>
						</div>
					</div>
				</div>
			</div>
		</div>		
	</div>

    <Footer />
	
</div>

</template>

<script>
import Header from '@components/Header/Header.vue';
import SideMenu from '@components/SideMenu/SideMenu.vue';
import Footer from '@components/Footer/Footer.vue';
import OrderItem from './components/OrderItem.vue';
import Delivery from './components/Delivery.vue';

import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    name: 'Order',
    components: { Header, SideMenu, Footer, OrderItem, Delivery},
    methods: {
        ...mapActions({
            selectDelivery: "Order/selectDelivery",
            incrementItemAmount: 'Cart/incrementItemAmount',
            decrementItemAmount: 'Cart/decrementItemAmount',
        }),
    },
    computed: {
        ...mapGetters({
            orderItems: "Cart/getCartItems",
            deliveryOptions: "Order/deliveryOptions",
            selectedDelivery: "Order/selectedDelivery",
        }),
        subtotal() {
            return this.orderItems.reduce((acc, cur) => acc += cur.price * cur.amount, 0);
        },
        total() {
            return this.subtotal + this.selectedDelivery.price;
        }

    },
}
</script>

<style>

.order_info {
	width: 100%;
	background: #FFFFFF;
	/* padding-top: 96px; */
    margin-top: 130px;
	z-index: 2;
}
.order_info_columns {
	width: 100%;
	border-bottom: solid 2px #e3e3e3;
	padding-bottom: 7px;
}
.order_info_col {
	float: left;
	font-size: 14px;
	font-weight: 400;
	color: #1b1b1b;
}
.order_info_col_product {
	width: 63%;
}
.order_info_col_price {
	width: 10%;
}
.order_info_col_quantity {
	width: 17%;
	text-align: center;
}
.order_info_col_total {
	width: 10%;
	text-align: right;
}

.product_quantity {
	display: inline-block;
	width: 147px;
	height: 61px;
	border: solid 2px #d0d0d0;
	overflow: hidden;
	padding-left: 78px;
	vertical-align: middle;
}
.product_quantity span{
	position: absolute;
	top: 50%;
	left: 23px;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	font-size: 16px;
	font-weight: 600;
	color: #6c6a74;
}
.product_quantity b{
	display: block;
	width: 30px;
	height: 57px;
	border: none;
	outline: none;
	font-size: 16px;
	font-weight: 600;
	color: #1b1b1b;
	text-align: left;
	padding-left: 9px;
	line-height: 57px;
	float: left;
}
.quantity_buttons
{
	position: absolute;
	top: 0;
	right: 1px;
	height: 100%;
	width: 29px;
}
.quantity_inc, 
.quantity_dec{
	display: -webkit-box;
	display: -moz-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 50%;
	cursor: pointer;
}
.quantity_control i{
	font-size: 10px;
	color: #232323;
	pointer-events: none;
}
.quantity_control:active{
	border: solid 1px rgba(14, 140, 228, 0.2);
}
.quantity_inc{
	padding-bottom: 3px;
	justify-content: flex-end;
}
.quantity_inc i{
	-webkit-transform: translateY(3px);
	-moz-transform: translateY(3px);
	-ms-transform: translateY(3px);
	-o-transform: translateY(3px);
	transform: translateY(3px);
}
.quantity_dec{
	padding-top: 3px;
	justify-content: flex-start;
}
.quantity_dec i{
	-webkit-transform: translateY(-3px);
	-moz-transform: translateY(-3px);
	-ms-transform: translateY(-3px);
	-o-transform: translateY(-3px);
	transform: translateY(-3px);
}

.row_order_buttons {
	margin-top: 21px;
}
.continue_shopping_button {
	width: 261px;
}
.clear_order_button,
.update_order_button {
	display: inline-block;
}
.update_order_button {
	margin-left: 16px;
}
.row_extra {
	margin-top: 106px;
	padding-bottom: 100px;
}

.section_title {
	font-size: 24px;
	font-weight: 600;
	color: #1b1b1b;
}
.section_subtitle {
	font-size: 14px;
	font-weight: 400;
	color: #6c6a74;
	margin-top: 3px;
}

.checkmark {
	position: absolute;
	top: 0;
	left: 0;
	margin-top: 4px;
	width: 11px;
	height: 11px;
	border-radius: 50%;
	border: solid 2px #9f9f9f;
	background: #FFFFFF;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}

label {
	margin-bottom: 0;
}

.coupon {
	margin-top: 83px;
}
.coupon_form_container {
	margin-top: 42px;
	width: 100%;
}
.coupon_form {
	position: relative;
	width: 100%;
}
.coupon_input {
	width: 100%;
	height: 52px;
	border: none;
	outline: none;
	background: #f2f4f8;
	padding-left: 15px;
}
.coupon_button {
	position: absolute;
	top: 0;
	right: 0;
	width: 112px;
	height: 52px;
}
.coupon_button span {
	display: block;
	position: relative;
	font-size: 14px;
	font-weight: 500;
	color: #1b1b1b;
	z-index: 2;
}
.coupon_button:hover span {
	color: #FFFFFF;
}
.order_total_container {
	margin-top: 42px;
	padding-left: 45px;
	padding-top: 20px;
	padding-right: 44px;
	padding-bottom: 19px;
	background: #f2f4f8;
}
.order_total_container ul {
	width: 100%;
}
.order_total_container ul li {
	width: 100%;
	height: 48px;
}
.order_total_title {
	font-size: 14px;
	font-weight: 400;
	color: #1b1b1b;
}
.order_total_value {
	font-size: 14px;
	font-weight: 400;
	color: #1b1b1b;
	float: right;
}
.checkout_button {
	width: 100%;
}
.checkout_button::after {
	background: #1b1b1b;
}
@media only screen and (max-width: 991px) {
	.order_info_columns {
		display: none;
	}
	.order_items_row {
		margin-top: 0;
	}
	.order_buttons_right {
		margin-top: 15px;
	}
	.order_total {
		margin-top: 100px;
	}
}

@media only screen and (max-width: 575px) {
	.coupon_input {
		height: 41px;
	}
}

</style>