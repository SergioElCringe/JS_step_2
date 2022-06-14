<template>
  <a  class="product">
    <div class="product_image">
			<img 
				:src="imgApi + item.imgUrl" 
				@click.prevent="$router.push('/catalog/' + item.id)"
				alt=""
			>
		</div>
    <div 
      v-if="category"
      class="product_extra" 
      :class="category.class"
		>
      <a href="categories.html">
				{{ category.text }}
			</a>
    </div>
    <div class="product_content">
      <div class="product_title"><a href="product.html">{{ item.name }}</a></div>
      <div class="product_price">$ {{ item.price }}</div>
    </div>
    <div 
      class="button button_custom btn-add"
      @click.self="$emit('addItem', item.id)"
		>
      <span>Add</span>
    </div>
  </a>
</template>

<script>
export default {
  name: 'CatalogItem',
  props: ['item', 'imgApi'],
  data() {
    return {
      categories: {
        '1': 'New',
        '2': 'Hot',
        '3': 'Sale'
      },
    };
  },

  computed: {
    category() {
      const { category } = this.item;
      return !category ? null : {
        class: 'product_' + this.categories[category].toLowerCase(),
        text: this.categories[category],
      };
    },
  },

  methods: {
  }
}
</script>

<style>
.products
{
	width: 100%;
	background: #FFFFFF;
	z-index: 2;
	padding-top: 89px;
}
.products_title
{
	font-size: 30px;
	font-weight: 500;
	color: #1b1b1b;
}
.product_grid
{
	margin-top: 88px;
}
.product
{
	width: calc((100% - 90px) / 4);
	margin-bottom: 59px;
}
.product_image
{
	width: 100%;
}
.product_image img
{
	max-width: 100%;
}
.product_content
{
	width: 100%;
	padding-top: 36px;
	padding-bottom: 38px;
}
.product_title a
{
	font-size: 18px;
	font-weight: 500;
	color: #1b1b1b;
	line-height: 1.1;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.product_title a:hover
{
	color: #e95a5a;
}
.product_price
{
	font-size: 16px;
	font-weight: 500;
	color: #6c6a74;
	line-height: 0.75;
	margin-top: 13px;
}
.product_extra
{
	position: absolute;
	top: 0;
	left: 54px;
	width: 66px;
	height: 36px;
	text-align: center;
	-webkit-transform-origin: top left;
	-moz-transform-origin: top left;
	-ms-transform-origin: top left;
	-o-transform-origin: top left;
	transform-origin: top left;
	transform: rotate(90deg);
}
.product_extra a
{
	display: block;
	font-size: 16px;
	font-weight: 500;
	color: #FFFFFF;
	line-height: 36px;
}
.product_new
{
	background: #6c6a74;
}
.product_sale
{
	background: #e95a5a;
}
.product_hot
{
	background: #1b1b1b;
}
</style>