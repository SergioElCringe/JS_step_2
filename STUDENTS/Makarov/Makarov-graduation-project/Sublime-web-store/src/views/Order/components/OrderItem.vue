<template>
  <div class="order_item">
    <div class="order_item_image">
        <img :src="imgURLTemplate + item.images[0]">
    </div>
    <span class="order_item_name" 
      @click="$router.push(`/catalog/${item.id}`)"
    >
      {{ item.title }}
    </span>
    <div class="product_quantity">
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
    <div class="order_item_cost">
      <div class="order_item_price">
        <span class="price-caption">Price: </span>
        ${{ item.price }}
      </div>
      <div class="order_item_total">
        <span class="total-caption">Total: </span>
        ${{ item.amount * item.price }}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "OrderItem",
  props: ["item"],
  data() {
    return {
      imgURLTemplate: "https://raw.githubusercontent.com/MikhailErnstovich/my-ftp/master/img/",
    }
  },
  methods: {
    increment() {
      this.$emit("increment", this.item);
    },
    decrement() {
      this.$emit("decrement", this.item);
    }
  }
}
</script>

<style>
.order_item {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-top: 33px;
  padding-bottom: 33px;
  height: 300px;
}

.order_item_price,
.order_item_total {
  margin: 20px 0;
  font-size: 14px;
  font-weight: 400;
  color: #1b1b1b;
}

.order_item_image {
  width: 60%;
  height: 163px;
}
.order_item_image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: left bottom;
}
.order_item_name {
  text-align: left;
  width: 60%;
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

.order_item_name:hover {
  color: #e95a5a;
}

.product_quantity {
  display: block;
  width: 40%;
  height: 61px;
  border: solid 2px #d0d0d0;
  overflow: hidden;
  padding-left: 78px;
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
@media only screen and (min-width: 991px) {
  .order_item {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
  .order_item_image {
    width: 30%;
  }
  .order_item_name {
    display: inline-block;
    width: 30%;
  }
  .order_item_cost {
    width: 20%;
  }
  .order_item_price,
  .order_item_total {
    display: inline-block;
    width: 50%;
  }
  .order_item_total {
    text-align: right;
  }
  .price-caption,
  .total-caption {
    display: none;
  }
}
</style>