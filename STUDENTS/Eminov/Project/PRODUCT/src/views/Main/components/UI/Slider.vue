<template>
 <v-carousel
    cycle
    height="100vh"
    show-arrows="hover"
  >
    <SliderItem 
      v-for="(slide, index) of slides"
      :key="index"
      :slide="slide"
    />
  </v-carousel>
</template>

<script>
import SliderItem from './items/SliderItem.vue';

export default {
  name: 'Slider',
  components: { SliderItem },
  data() {
    return {
      slides: [
        {
          name: 'slider1',
          title: 'A new Online Shop experience.',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.',
        },
        {
          name: 'slider2',
          title: 'A new Online Shop experience.',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.',
        },
        {
          name: 'slider3',
          title: 'A new Online Shop experience.',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.',
        },
      ],
    };
  },
};
</script>

<style scoped>
  .v-btn {
    color: #fff !important;
  }
</style>