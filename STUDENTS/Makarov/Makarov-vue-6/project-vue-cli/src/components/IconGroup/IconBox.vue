<template>
  <div class="col-lg-4 icon_box_col">
    <div class="icon_box">
      <div class="icon_box_image">
        <img :src="imgLink" />
      </div>
      <div class="icon_box_title">{{ item.title }}</div>
      <div class="icon_box_text">
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IconBox',
  props: ['item', 'template'],
  computed: {
    imgLink() {
      return this.template + this.item.link;
    },
  },
};
</script>

<style>
</style>