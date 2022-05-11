<template>
    <div class="col-lg-6">
      <div class="details_image">
        <div class="details_image_large">
          <img :src="mainImg" />
        </div>
        <div class="details_image_thumbnails d-flex flex-row align-items-start justify-content-between">
            <div class="details_image_thumbnail" 
                v-for="(img, idx) of images"
                :key="idx"
                :class="active === idx ? 'active' : ''"
                @click="changeImg(idx)"
            >
                <img :src="productApi + img">
            </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Gallery',
    props: {
        images: {
            type: Array,
            default: () => [],
        },

        productApi: {
            type: String,
            default: () => '',
        },
    },

    data() {
        return {
            active: 0,
        };
    },

    methods: {
        changeImg(idx) {
           this.active = idx;
        },
    },

    computed: {
        mainImg() {
            return this.productApi + this.images[this.active];
        },
    },
};
</script>

<style>

</style>