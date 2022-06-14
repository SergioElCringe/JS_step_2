<template>
  <div class="col-lg-4 icon_box_col">
    <div class="icon_box">
      <div class="icon_box_image">
        <img :src="item.url" />
      </div>
      <div class="icon_box_title">{{ item.title }}</div>
      <div class="icon_box_text">
        <p>{{ item.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IconBoxsItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style>
</style>