<template>
	<!-- Cart Info -->
	<div class="cart_info">
		<div class="container">
			<div class="row">
				<div class="col">
					<!-- Column Titles -->
					<div class="cart_info_columns clearfix">
						<div class="cart_info_col cart_info_col_product">Product</div>
						<div class="cart_info_col cart_info_col_price">Price</div>
						<div class="cart_info_col cart_info_col_quantity">Quantity</div>
						<div class="cart_info_col cart_info_col_total">Total</div>
					</div>
				</div>
			</div>
			<div class="row cart_items_row">
				<div class="col">

					<!-- Cart Item -->
					<div class="cart_item d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
						<!-- Name -->
						<div class="cart_item_product d-flex flex-row align-items-center justify-content-start">
							<div class="cart_item_image">
								<div>
									<img src="https://raw.githubusercontent.com/SergioElCringe/JS_step_2/init/PROJECT/BASE__PROJECT/images/cart_1.jpg" alt="">
								</div>
							</div>
							<div class="cart_item_name_container">
								<div class="cart_item_name"><a href="#">Smart Phone Deluxe Edition</a></div>
								<div class="cart_item_edit"><a href="#">Edit Product</a></div>
							</div>
						</div>
						<!-- Price -->
						<div class="cart_item_price">$790.90</div>
						<!-- Quantity -->
						<div class="cart_item_quantity">
							<div class="product_quantity_container">
								<div class="product_quantity clearfix">
									<span>Qty</span>
									<input id="quantity_input" type="text" pattern="[0-9]*" value="1">
									<div class="quantity_buttons">
										<div id="quantity_inc_button" class="quantity_inc quantity_control"><i class="fa fa-chevron-up" aria-hidden="true"></i></div>
										<div id="quantity_dec_button" class="quantity_dec quantity_control"><i class="fa fa-chevron-down" aria-hidden="true"></i></div>
									</div>
								</div>
							</div>
						</div>
						<!-- Total -->
						<div class="cart_item_total">$790.90</div>
					</div>

				</div>
			</div>
			<div class="row cart_items_row">
				<div class="col">

					<!-- Cart Item -->
					<div class="cart_item d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
						<!-- Name -->
						<div class="cart_item_product d-flex flex-row align-items-center justify-content-start">
							<div class="cart_item_image">
								<div>
									<img src="https://raw.githubusercontent.com/SergioElCringe/JS_step_2/init/PROJECT/BASE__PROJECT/images/cart_1.jpg" alt="">
								</div>
							</div>
							<div class="cart_item_name_container">
								<div class="cart_item_name"><a href="#">Smart Phone Deluxe Edition</a></div>
								<div class="cart_item_edit"><a href="#">Edit Product</a></div>
							</div>
						</div>
						<!-- Price -->
						<div class="cart_item_price">$790.90</div>
						<!-- Quantity -->
						<div class="cart_item_quantity">
							<div class="product_quantity_container">
								<div class="product_quantity clearfix">
									<span>Qty</span>
									<input id="quantity_input" type="text" pattern="[0-9]*" value="1">
									<div class="quantity_buttons">
										<div id="quantity_inc_button" class="quantity_inc quantity_control"><i class="fa fa-chevron-up" aria-hidden="true"></i></div>
										<div id="quantity_dec_button" class="quantity_dec quantity_control"><i class="fa fa-chevron-down" aria-hidden="true"></i></div>
									</div>
								</div>
							</div>
						</div>
						<!-- Total -->
						<div class="cart_item_total">$790.90</div>
					</div>

				</div>
			</div>
			<div class="row row_cart_buttons">
				<div class="col">
					<div class="cart_buttons d-flex flex-lg-row flex-column align-items-start justify-content-start">
						<div class="button continue_shopping_button"><a href="#">Continue shopping</a></div>
						<div class="cart_buttons_right ml-lg-auto">
							<div class="button clear_cart_button"><a href="#">Clear cart</a></div>
							<div class="button update_cart_button"><a href="#">Update cart</a></div>
						</div>
					</div>
				</div>
			</div>
			<div class="row row_extra">
				<div class="col-lg-4">
					
					<!-- Delivery -->
					<div class="delivery">
						<div class="section_title">Shipping method</div>
						<div class="section_subtitle">Select the one you want</div>
						<div class="delivery_options">
							<label class="delivery_option clearfix">Next day delivery
								<input type="radio" name="radio">
								<span class="checkmark"></span>
								<span class="delivery_price">$4.99</span>
							</label>
							<label class="delivery_option clearfix">Standard delivery
								<input type="radio" name="radio">
								<span class="checkmark"></span>
								<span class="delivery_price">$1.99</span>
							</label>
							<label class="delivery_option clearfix">Personal pickup
								<input type="radio" checked="checked" name="radio">
								<span class="checkmark"></span>
								<span class="delivery_price">Free</span>
							</label>
						</div>
					</div>

					<!-- Coupon Code -->
					<div class="coupon">
						<div class="section_title">Coupon code</div>
						<div class="section_subtitle">Enter your coupon code</div>
						<div class="coupon_form_container">
							<form action="#" id="coupon_form" class="coupon_form">
								<input type="text" class="coupon_input" required="required">
								<button class="button coupon_button"><span>Apply</span></button>
							</form>
						</div>
					</div>
				</div>

				<div class="col-lg-6 offset-lg-2">
					<div class="cart_total">
						<div class="section_title">Cart total</div>
						<div class="section_subtitle">Final info</div>
						<div class="cart_total_container">
							<ul>
								<li class="d-flex flex-row align-items-center justify-content-start">
									<div class="cart_total_title">Subtotal</div>
									<div class="cart_total_value ml-auto">$790.90</div>
								</li>
								<li class="d-flex flex-row align-items-center justify-content-start">
									<div class="cart_total_title">Shipping</div>
									<div class="cart_total_value ml-auto">Free</div>
								</li>
								<li class="d-flex flex-row align-items-center justify-content-start">
									<div class="cart_total_title">Total</div>
									<div class="cart_total_value ml-auto">$790.90</div>
								</li>
							</ul>
						</div>
						<div class="button checkout_button"><a href="#">Proceed to checkout</a></div>
					</div>
				</div>
			</div>
		</div>		
	</div>
</template>

<script>
export default {
	name:'Cart'
}
</script>

<style>

.cart_info
{
	width: 100%;
	background: #FFFFFF;
	padding-top: 96px;
	z-index: 2;
}
.cart_info_columns
{
	width: 100%;
	border-bottom: solid 2px #e3e3e3;
	padding-bottom: 7px;
}
.cart_info_col
{
	float: left;
	font-size: 14px;
	font-weight: 400;
	color: #1b1b1b;
}
.cart_info_col_product
{
	width: 63%;
}
.cart_info_col_price
{
	width: 10%;
}
.cart_info_col_quantity
{
	width: 17%;
	text-align: center;
}
.cart_info_col_total
{
	width: 10%;
	text-align: right;
}
.cart_item
{
	padding-top: 33px;
	padding-bottom: 33px;
}
.cart_item_product
{
	width: 63%;
}
.cart_item_price
{
	width: 10%;
}
.cart_item_quantity
{
	width: 17%;
	text-align: center;
}
.cart_item_total
{
	width: 10%;
	text-align: right;
}
.cart_item_image div
{
	width: 183px;
	height: 163px;
}
.cart_item_image div img
{
	max-width: 100%;
}
.cart_item_name_container
{
	padding-left: 36px;
}
.cart_item_name a
{
	font-size: 18px;
	font-weight: 500;
	color: #1b1b1b;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.cart_item_name a:hover
{
	color: #e95a5a;
}
.cart_item_edit
{
	margin-top: 3px;
}
.cart_item_edit a
{
	font-size: 14px;
	font-weight: 500;
	color: #6c6a74;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.cart_item_edit a:hover
{
	color: #1b1b1b;
}
.cart_item_price
{
	font-size: 14px;
	font-weight: 400;
	color: #1b1b1b;
}
.product_quantity_container
{
	
}
.product_quantity
{
	display: inline-block;
	width: 147px;
	height: 61px;
	border: solid 2px #d0d0d0;
	overflow: hidden;
	padding-left: 78px;
	vertical-align: middle;
}
.product_quantity span
{
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
.product_quantity input
{
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
	line-height: 39px;
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
.quantity_dec
{
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
.quantity_control i
{
	font-size: 10px;
	color: #232323;
	pointer-events: none;
}
.quantity_control:active
{
	border: solid 1px rgba(14, 140, 228, 0.2);
}
.quantity_inc
{
	padding-bottom: 3px;
	justify-content: flex-end;
}
.quantity_inc i
{
	-webkit-transform: translateY(3px);
	-moz-transform: translateY(3px);
	-ms-transform: translateY(3px);
	-o-transform: translateY(3px);
	transform: translateY(3px);
}
.quantity_dec
{
	padding-top: 3px;
	justify-content: flex-start;
}
.quantity_dec i
{
	-webkit-transform: translateY(-3px);
	-moz-transform: translateY(-3px);
	-ms-transform: translateY(-3px);
	-o-transform: translateY(-3px);
	transform: translateY(-3px);
}
.cart_item_total
{
	font-size: 14px;
	font-weight: 400;
	color: #1b1b1b;
}
.row_cart_buttons
{
	margin-top: 21px;
}
.continue_shopping_button
{
	width: 261px;
}
.clear_cart_button,
.update_cart_button
{
	display: inline-block;
}
.update_cart_button
{
	margin-left: 16px;
}
.row_extra
{
	margin-top: 106px;
	padding-bottom: 100px;
}
.delivery
{
	width: 100%;
}
.section_title
{
	font-size: 24px;
	font-weight: 600;
	color: #1b1b1b;
}
.section_subtitle
{
	font-size: 14px;
	font-weight: 400;
	color: #6c6a74;
	margin-top: 3px;
}
.delivery_options
{
	margin-top: 38px;
}
.delivery_option
{
	display: block;
	position: relative;
	padding-left: 36px;
	cursor: pointer;
	-webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 14px;
    font-weight: 400;
    color: #1b1b1b;
}
.delivery_option:not(:last-child)
{
	margin-bottom: 27px;
}
.delivery_option input
{
	position: absolute;
	opacity: 0;
	visibility: hidden;
}
.checkmark
{
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
.delivery_option input:checked ~ .checkmark
{
	background: #e95a5a;
	border: solid 2px #e95a5a;
}
.delivery_option input:hover ~ .checkmark
{
	background: #e95a5a;
}
label
{
	margin-bottom: 0;
}
.delivery_price
{
	float: right;
}
.coupon
{
	margin-top: 83px;
}
.coupon_form_container
{
	margin-top: 42px;
	width: 100%;
}
.coupon_form
{
	position: relative;
	width: 100%;
}
.coupon_input
{
	width: 100%;
	height: 52px;
	border: none;
	outline: none;
	background: #f2f4f8;
	padding-left: 15px;
}
.coupon_button
{
	position: absolute;
	top: 0;
	right: 0;
	width: 112px;
	height: 52px;
}
.coupon_button span
{
	display: block;
	position: relative;
	font-size: 14px;
	font-weight: 500;
	color: #1b1b1b;
	z-index: 2;
}
.coupon_button:hover span
{
	color: #FFFFFF;
}
.cart_total_container
{
	margin-top: 42px;
	padding-left: 45px;
	padding-top: 20px;
	padding-right: 44px;
	padding-bottom: 19px;
	background: #f2f4f8;
}
.cart_total_container ul
{
	width: 100%;
}
.cart_total_container ul li
{
	width: 100%;
	height: 48px;
}
.cart_total_title
{
	font-size: 14px;
	font-weight: 400;
	color: #1b1b1b;
}
.cart_total_value
{
	font-size: 14px;
	font-weight: 400;
	color: #1b1b1b;
	float: right;
}
.checkout_button
{
	width: 100%;
}
</style>