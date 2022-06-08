<template>
	<div class="checkout">
		<div class="container">
			<div class="row">
				<!-- Billing Info -->
				<div class="col-lg-6">
					<div class="billing checkout_section">
						<div class="section_title">Billing Address</div>
						<div class="section_subtitle">Enter your address info</div>
						<div class="checkout_form_container">
							<form action="#" id="checkout_form" class="checkout_form">
								<div class="row">
									<div class="col-xl-6">
										<!-- Name -->
										<label for="checkout_name">First Name*</label>
										<input type="text" id="checkout_name" class="checkout_input" required="required">
									</div>
									<div class="col-xl-6 last_name_col">
										<!-- Last Name -->
										<label for="checkout_last_name">Last Name*</label>
										<input type="text" id="checkout_last_name" class="checkout_input" required="required">
									</div>
								</div>
								<div>
									<!-- Company -->
									<label for="checkout_company">Company</label>
									<input type="text" id="checkout_company" class="checkout_input">
								</div>
								<div>
									<!-- Country -->
									<label for="checkout_country">Country*</label>
									<select name="checkout_country" id="checkout_country" class="dropdown_item_select checkout_input" require="required">
										<option></option>
										<option>Lithuania</option>
										<option>Sweden</option>
										<option>UK</option>
										<option>Italy</option>
									</select>
								</div>
								<div>
									<!-- Address -->
									<label for="checkout_address">Address*</label>
									<input type="text" id="checkout_address" class="checkout_input" required="required">
									<input type="text" id="checkout_address_2" class="checkout_input checkout_address_2" required="required">
								</div>
								<div>
									<!-- Zipcode -->
									<label for="checkout_zipcode">Zipcode*</label>
									<input type="text" id="checkout_zipcode" class="checkout_input" required="required">
								</div>
								<div>
									<!-- City / Town -->
									<label for="checkout_city">City/Town*</label>
									<select name="checkout_city" id="checkout_city" class="dropdown_item_select checkout_input" require="required">
										<option></option>
										<option>City</option>
										<option>City</option>
										<option>City</option>
										<option>City</option>
									</select>
								</div>
								<div>
									<!-- Province -->
									<label for="checkout_province">Province*</label>
									<select name="checkout_province" id="checkout_province" class="dropdown_item_select checkout_input" require="required">
										<option></option>
										<option>Province</option>
										<option>Province</option>
										<option>Province</option>
										<option>Province</option>
									</select>
								</div>
								<div>
									<!-- Phone no -->
									<label for="checkout_phone">Phone no*</label>
									<input type="phone" id="checkout_phone" class="checkout_input" required="required">
								</div>
								<div>
									<!-- Email -->
									<label for="checkout_email">Email Address*</label>
									<input type="phone" id="checkout_email" class="checkout_input" required="required">
								</div>
								<div class="checkout_extra">
									<div>
										<input type="checkbox" id="checkbox_terms" name="regular_checkbox" class="regular_checkbox" checked="checked">
										<label for="checkbox_terms"><img src="images/check.png" alt=""></label>
										<span class="checkbox_title">Terms and conditions</span>
									</div>
									<div>
										<input type="checkbox" id="checkbox_account" name="regular_checkbox" class="regular_checkbox">
										<label for="checkbox_account"><img src="images/check.png" alt=""></label>
										<span class="checkbox_title">Create an account</span>
									</div>
									<div>
										<input type="checkbox" id="checkbox_newsletter" name="regular_checkbox" class="regular_checkbox">
										<label for="checkbox_newsletter"><img src="images/check.png" alt=""></label>
										<span class="checkbox_title">Subscribe to our newsletter</span>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>

				<!-- Order Info -->

				<div class="col-lg-6">
					<div class="order checkout_section">
						<div class="section_title">Your order</div>
						<div class="section_subtitle">Order details</div>

						<!-- Order details -->
						<div class="order_list_container">
							<div class="order_list_bar d-flex flex-row align-items-center justify-content-start">
								<div class="order_list_title">Product</div>
								<div class="order_list_value ml-auto">Total</div>
							</div>
							<ul class="order_list">
								<li class="d-flex flex-row align-items-center justify-content-start">
									<div class="order_list_title">Cocktail Yellow dress</div>
									<div class="order_list_value ml-auto">$59.90</div>
								</li>
								<li class="d-flex flex-row align-items-center justify-content-start">
									<div class="order_list_title">Subtotal</div>
									<div class="order_list_value ml-auto">$59.90</div>
								</li>
								<li class="d-flex flex-row align-items-center justify-content-start">
									<div class="order_list_title">Shipping</div>
									<div class="order_list_value ml-auto">Free</div>
								</li>
								<li class="d-flex flex-row align-items-center justify-content-start">
									<div class="order_list_title">Total</div>
									<div class="order_list_value ml-auto">$59.90</div>
								</li>
							</ul>
						</div>

						<!-- Payment Options -->
						<div class="payment">
							<div class="payment_options">
								<label class="payment_option clearfix">Paypal
									<input type="radio" name="radio">
									<span class="checkmark"></span>
								</label>
								<label class="payment_option clearfix">Cach on delivery
									<input type="radio" name="radio">
									<span class="checkmark"></span>
								</label>
								<label class="payment_option clearfix">Credit card
									<input type="radio" name="radio">
									<span class="checkmark"></span>
								</label>
								<label class="payment_option clearfix">Direct bank transfer
									<input type="radio" checked="checked" name="radio">
									<span class="checkmark"></span>
								</label>
							</div>
						</div>

						<!-- Order Text -->
						<div class="order_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra temp or so dales. Phasellus sagittis auctor gravida. Integ er bibendum sodales arcu id te mpus. Ut consectetur lacus.</div>
						<div class="button order_button"><a href="#">Place Order</a></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style>

.checkout
{
	width: 100%;
	padding-top: 98px;
	padding-bottom: 99px;
	background: #FFFFFF;
	z-index: 2;
}
.checkout_section
{
	width: 100%;
	padding-top: 44px;
}
.billing
{
	
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
.checkout_form_container
{
	width: 100%;
	margin-top: 46px;
}
.checkout_form > div:not(:last-child)
{
	margin-bottom: 14px;
}
.checkout_form label
{
	font-size: 14px;
	font-weight: 400;
	color: #6c6a74;
}
.checkout_input
{
	width: 100%;
	height: 52px;
	background: #f2f4f8;
	border: none;
	outline: none;
	padding-left: 15px;
}
.dropdown_item_select
{
	-webkit-appearance:none;
    -moz-appearance:none;
    -ms-appearance:none;
    -o-appearance:none;
    appearance:none;
	-webkit-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
	-webkit-user-select: none;
	/* background-image: url(../images/down.png); */
	background-position: center right;
	background-repeat: no-repeat;
	margin: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	cursor: pointer;
	font-size: 14px;
	font-weight: 400;
	color: #1b1b1b !important;
}
.dropdown_item_select::-ms-expand
{
    display: none;
}
.checkout_address_2
{
	margin-top: 16px;
}
.checkout_extra
{
	margin-top: 33px;
}
.checkout_extra > div:not(:last-child)
{
	margin-bottom: 8px;
}
.checkout_extra label
{
	display: inline-block;
}
.regular_checkbox
{
	display: none;
}
.regular_checkbox + label
{
	position: relative;
	-webkit-appearance: none;
	-moz-appearance: none;
	-ms-appearance: none;
	-o-appearance: none;
	appearance: none;
	width: 13px;
    height: 13px;
	background: #f2f4f8;
	cursor: pointer;
	vertical-align: middle;
	margin-bottom: 0;
}
.regular_checkbox + label img
{
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
}
.regular_checkbox + label img
{
	display: none;
}
.regular_checkbox:checked + label img
{
	display: block;
}
.checkbox_title
{
	display: inline-block;
	vertical-align: middle;
	padding-left: 12px;
}
.order
{
	width: 100%;
	padding-left: 60px;
	background: #f2f4f8;
	padding-bottom: 53px;
	padding-right: 58px;
}
.order_list_container
{
	margin-top: 46px;
}
.order_list_bar
{
	margin-bottom: 59px;
}
.order_list_title,
.order_list_value
{
	font-size: 14px;
	font-weight: 400;
	color: #1b1b1b;
}
.order_list li:not(:last-child)
{
	margin-bottom: 53px;
}
.payment_options
{
	margin-top: 80px;
}
.payment_option
{
	display: block;
	position: relative;
	padding-left: 31px;
	cursor: pointer;
	-webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 14px;
    font-weight: 400;
    color: #1b1b1b;
}
.payment_option:not(:last-child)
{
	margin-bottom: 19px;
}
.payment_option input
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
	width: 13px;
	height: 13px;
	border-radius: 50%;
	border: solid 2px #6c6a74;
	background: transparent;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.payment_option input:checked ~ .checkmark
{
	border: solid 2px #e95a5a;
}
.payment_option input:hover ~ .checkmark
{
	border: solid 2px #e95a5a;
}
.order_text
{
	font-size: 12px;
	font-weight: 400;
	font-style: italic;
	color: #6c6a74;
	margin-top: 70px;
}
.order_button
{
	width: 100%;
	margin-top: 83px;
}
</style>