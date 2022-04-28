<template>
  <div class="home_slider_dots_container">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="home_slider_dots">
            <ul id="home_slider_custom_dots" class="home_slider_custom_dots">
              <SliderDot v-for='dot in dots'
                :key='dot'
                :num='dot.num'
                :active='dot.isActive'
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SliderDot from "./SliderDot.vue";

export default {
  name: "SliderDots",
  props: ["items"],
  components: { SliderDot },
  data: function () {
    return {
      dots: this.items,
    };
  },
};
</script>

<style>
</style>