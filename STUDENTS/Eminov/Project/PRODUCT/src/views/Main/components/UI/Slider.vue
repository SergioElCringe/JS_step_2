<template>

</template>

<script>
import SliderItem from './items/SliderItem.vue';

export default {
  name: 'Slider',
  components: { SliderItem },
  data() {
    return {
      sliders: [
        {
          id: 1,
          title: 'A new Online Shop experience.',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.',
        },
        {
          id: 2,
          title: 'A new Online Shop experience.',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.',
        },
        {
          id: 3,
          title: 'A new Online Shop experience.',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.',
        },
      ],
    };
  },
};
</script>

<style scoped>
  .carousel-item {
    height: 790px !important;
  }
</style>