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
      <a :href="item.link">{{ getStickerContent(item.sticker) }}</a>
    </div>
    <div class="product_content">
      <div class="product_title">
        <span @click="$router.push(`/catalog/${item.id}`)">{{ item.title }}</span>
      </div>
      <div class="product_price">$ {{ item.price }}</div>
    </div>
    <button class="button_add" @click="addItem">Add</button>
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
.product_image {
  width: 100%;
  cursor: pointer;
}
.product_image img {
  max-width: 100%;
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
@media only screen and (max-width: 991px) {
	.product	{
		width: calc((100% - 30px) / 2);
	}
}
@media only screen and (max-width: 575px) {
	.product {
		width: 100%;
	}
}
</style>