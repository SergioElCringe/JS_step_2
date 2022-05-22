<template>
  <div class="col-lg-6">
    <div class="details_image" v-if="activeImg">
      <div class="details_image_large">
        <img :src="imgApi + images" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: ['images','imgApi'],
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    changeImg(idx) {
      this.active = idx;
    }
  },
  computed: {
    activeImg() {
      return this.images[this.active] || null;
    },
  },
}
</script>

<style>
.details_image_large{
    margin-bottom: 10%;
}
</style>