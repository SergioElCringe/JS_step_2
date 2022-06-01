<template>
    <div class="order_item d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
        <!-- Name -->
        <div class="order_item_product d-flex flex-row align-items-center justify-content-start">
            <div class="order_item_image">
                <div>
                    <img :src="imgURLTemplate + item.images[0]">
                </div>
            </div>
            <div class="order_item_name_container">
                <div class="order_item_name">
                    <span @click="$router.push(`/catalog/${item.id}`)">{{ item.title }}</span>
                </div>
            </div>
        </div>
        <!-- Price -->
        <div class="order_item_price">${{ item.price }}</div>
        <!-- Quantity -->
        <div class="order_item_quantity">
            <div class="product_quantity_container">
                <div class="product_quantity clearfix">
                    <span>Qty</span>
                    <b>{{ item.amount }}</b>
                    <div class="quantity_buttons">
                        <div id="quantity_inc_button" class="quantity_inc quantity_control" @click="increment">
                            <i class="fa fa-chevron-up"></i>
                        </div>
                        <div id="quantity_dec_button" class="quantity_dec quantity_control" @click="decrement">
                            <i class="fa fa-chevron-down"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Total -->
        <div class="order_item_total">${{ item.amount * item.price }}</div>
    </div>
</template>

<script>
export default {
    name: 'OrderItem',
    props: ['item'],
    data() {
        return {
            imgURLTemplate: 'https://raw.githubusercontent.com/MikhailErnstovich/my-ftp/master/img/',
        }
    },
    methods: {
        increment() {
            this.$emit('increment', this.item);
        },
        decrement() {
            this.$emit('decrement', this.item);
        }
    }
}
</script>

<style>
.order_item {
	padding-top: 33px;
	padding-bottom: 33px;
}
.order_item_product {
	width: 63%;
}
.order_item_price {
	width: 10%;
}
.order_item_quantity {
	width: 17%;
	text-align: center;
}
.order_item_total {
	width: 10%;
	text-align: right;
}
.order_item_image div {
	width: 183px;
	height: 163px;
}
.order_item_image div img {
	max-width: 100%;
}
.order_item_name_container {
	padding-left: 36px;
}
.order_item_name span{
	font-size: 18px;
	font-weight: 500;
	color: #1b1b1b;
	cursor: pointer;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.order_item_name span:hover {
	color: #e95a5a;
}
.order_item_price{
	font-size: 14px;
	font-weight: 400;
	color: #1b1b1b;
}
.order_item_total {
	font-size: 14px;
	font-weight: 400;
	color: #1b1b1b;
}
@media only screen and (max-width: 991px) {
	.order_item:first-child {
		padding-top: 0;
	}
	.order_item:not(:last-child) {
		border-bottom: solid 2px #e3e3e3;
	}
	.order_item_product,
	.order_item_price,
	.order_item_quantity,
	.order_item_total {
		width: 100%;
		text-align: left;
	}
	.order_item_price,
	.order_item_quantity,
	.order_item_total {
		margin-top: 25px;
	}
}
</style>