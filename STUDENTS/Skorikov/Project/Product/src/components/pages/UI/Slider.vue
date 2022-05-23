<template>
  <div class="home">
    <div class="home_slider_container">

      <div class="owl-carousel owl-theme home_slider">
        <SliderItem 
          v-for="item of sliderOptions"
          :key="item.id"
          :item="item"
        />  
      </div>

      <div class="home_slider_dots_container">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="home_slider_dots">
                <ul id="home_slider_custom_dots" class="home_slider_custom_dots">
                  <li class="home_slider_custom_dot active mr-3">1.</li>
                  <li class="home_slider_custom_dot mr-3">2.</li>
                  <li class="home_slider_custom_dot">3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SliderItem from './items/SliderItem.vue';

export default {
  name: 'Slider',
  components: { SliderItem },
  data() {
    return {
      sliderOptions: [
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

<style>
</style>