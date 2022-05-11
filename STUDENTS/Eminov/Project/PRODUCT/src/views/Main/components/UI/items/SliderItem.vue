<template>
  <v-carousel-item
    reverse-transition="fade-transition"
    transition="fade-transition"
  >
    <v-sheet
      height="100%"
      tile
    >
      <div class="home-slider" :class="slide.name">
        <div class="home-slider_content">
          <div class="home-slider_title">{{ slide.title }}</div>
          <div class="home-slider_subtitle">{{ slide.body }}</div>
          <div class="button button_light home_button"><router-link to="/Categories">Shop Now</router-link></div>
        </div>
      </div>
    </v-sheet>
  </v-carousel-item>   
</template>

<script>
export default {
  name: 'SliderItem',
  props: {
    slide: {
      type: Object,
      default: () => {},
    },
  },
};
</script>