<template>
  <div class="product">
    <a class="product_image" @click="$router.push(`/catalog/${item.id}`)">
      <img :src="imgURLTemplate + item.images[0]" />
    </a>
    <div
      class="product_extra"
      :class="`product_` + stickerTypes[item.sticker]"
      v-if="item.sticker"
    >
      <a href="" @click.prevent="$router.push(`/categories/${item.sticker}`)">{{ getStickerContent(item.sticker) }}</a>
    </div>
    <div class="product_content">
      <div class="product_title">
        <span @click="$router.push(`/catalog/${item.id}`)">{{ item.title }}</span>
      </div>
      <div class="product_price">$ {{ item.price }}</div>
    </div>
    <button class="catalog-button" @click="addItem">
      <span>Add to cart</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "CatalogItem",
  props: ["item", "stickerTypes", "imgURLTemplate"],
  methods: {
    getStickerContent(stickerNum) {
      return (
        this.stickerTypes[stickerNum].charAt(0).toUpperCase() +
        this.stickerTypes[stickerNum].slice(1)
      );
    },
    addItem() {
      this.$emit("addItem", this.item);
    },
  },
};
</script>

<style>
.product {
  width: calc((100% - 90px) / 4);
  margin-bottom: 59px;
}
.product:hover .product_extra {
  width: 100px;
  padding-left: 34px;
}
.product_image {
  display: block;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
}
.product_image img {
  width: 100%;
}
.product_content {
  width: 100%;
  padding-top: 36px;
  padding-bottom: 38px;
}
.product_title span {
  font-size: 18px;
  font-weight: 500;
  color: #1b1b1b;
  line-height: 1.1;
  cursor: pointer;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.product_title span:hover {
  color: #e95a5a;
}
.product_price {
  font-size: 16px;
  font-weight: 500;
  color: #6c6a74;
  line-height: 0.75;
  margin-top: 13px;
}
.product_extra {
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
  transition: all 0.3s ease;
}
.product_extra a {
  display: block;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  line-height: 36px;
}
.product_new {
  background: #6c6a74;
}
.product_sale {
  background: #e95a5a;
}
.product_hot {
  background: #1b1b1b;
}
.catalog-button {
  position: relative;
  width: 100%;
  height: 61px;
  border: solid 2px #1b1b1b;
  background: #ffffff;
  cursor: pointer;
  overflow: hidden;
}
.catalog-button span {
  display: block;
  position: relative;
  z-index: 10;
  font-size: 16px;
  font-weight: 600;
  color: #1b1b1b;
  background: none;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.catalog-button::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 150%;
  height: 100%;
  background: #1b1b1b;
  z-index: 0;
  opacity: 0;
  -webkit-transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
  transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
  -webkit-transform-origin: 0% 100%;
  transform-origin: 0% 100%;
  -webkit-transition: -webkit-transform 0.3s, opacity 0.3s,
    background-color 0.3s;
  transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
}
.catalog-button:hover::after {
  opacity: 1;
  -webkit-transform: rotate3d(0, 0, 1, 0deg);
  transform: rotate3d(0, 0, 1, 0deg);
  -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}
.catalog-button:hover span {
  color: #ffffff;
}

@media only screen and (max-width: 991px) {
	.product	{
		width: calc((100% - 30px) / 2);
	}
}

@media only screen and (max-width: 575px) {
	.product {
		width: 100%;
	}
    .catalog-button {
    height: 41px;
  }
  .catalog-button span {
    font-size: 13px;
  }
}
</style>