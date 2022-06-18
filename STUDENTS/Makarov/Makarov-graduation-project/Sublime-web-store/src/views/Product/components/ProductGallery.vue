<template>
  <div class="details_image">
    <div class="details_image_large">
      <img :src="mainImgURL">
      <div 
        class="product_extra"
        :class="`product_` + stickerTypes[item.sticker]"
        v-if="item.sticker"
      >
        <a href="" @click.prevent="$router.push(`/categories/${item.sticker}`)">{{ getStickerContent(item.sticker) }}</a>
      </div>
    </div>
    <div class="details_image_thumbnails d-flex flex-row align-items-start justify-content-between">
      <div class="details_image_thumbnail" 
        :class="selectedImgIndex === i ? 'active' : ''"
        v-for="(img, i) in item.images"
        :key="i"
        @click="setMainImg(i, $event)"
      >
        <img :src="`${imgURLTemplate}/${img}`">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductGallery",
  props: ["item", "stickerTypes"],
  data() {
    return {
      imgURLTemplate: "https://raw.githubusercontent.com/MikhailErnstovich/my-ftp/master/img/",
      selectedImgIndex: 0,
    }
  },
  methods: {
    setMainImg(i) {
      this.selectedImgIndex = i;
    },
    getStickerContent(stickerNum) {
      return (
        this.stickerTypes[stickerNum].charAt(0).toUpperCase() +
        this.stickerTypes[stickerNum].slice(1)
      );
    },
  },
  computed: { 
    mainImgURL() {
      return this.imgURLTemplate + "/" + this.item.images[this.selectedImgIndex];
    },
  },
}
</script>

<style>

.details_image_large {
  width: 100%;
}
.details_image_large img {
  max-width: 100%;
}
.details_image_thumbnails {
  margin-top: 17px;
}
.details_image_thumbnail {
  width: calc((100% - 51px) / 4);
  cursor: pointer;
}
.details_image_thumbnail::after {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 2px #1b1b1b;
  content: "";
  background: transparent;
  pointer-events: none;
  visibility: hidden;
  opacity: 0;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.details_image_thumbnail.active::after,
.details_image_thumbnail:hover::after {
  visibility: visible;
  opacity: 1;
}
.details_image_thumbnail img {
  max-width: 100%;
}
</style>