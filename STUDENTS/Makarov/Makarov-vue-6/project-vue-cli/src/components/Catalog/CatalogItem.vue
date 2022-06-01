<template>
  <div class='product'>
    <div class='product_image'>
      <img :src='imgURLTemplate + item.imgFileName' />
    </div>
    <div
      class='product_extra'
      :class='`product_` + stickerTypes[item.sticker]'
      v-if='item.sticker'
    >
      <a :href='item.link'>{{ getStickerContent(item.sticker) }}</a>
    </div>
    <div class='product_content'>
      <div class='product_title'>
        <a :href='item.link'>{{ item.title }}</a>
      </div>
      <div class='product_price'>$ {{ item.price }}</div>
    </div>
    <button class='button_add' @click='addItem'>Add</button>
  </div>
</template>

<script>
export default {
  name: 'CatalogItem',
  props: ['item', 'stickerTypes', 'imgURLTemplate'],
  methods: {
    getStickerContent(stickerNum) {
      return (
        this.stickerTypes[stickerNum].charAt(0).toUpperCase() +
        this.stickerTypes[stickerNum].slice(1)
      );
    },
    addItem () {
      this.$emit('addItem', this.item);
    },
  },
};
</script>

<style>
</style>