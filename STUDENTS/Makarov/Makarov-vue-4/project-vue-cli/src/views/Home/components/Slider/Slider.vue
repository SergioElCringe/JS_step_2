<template>
  <div class="home_slider_container">
    <div class="owl-carousel owl-theme home_slider">
      <SliderItem
        v-for="item in items"
        :key="item"
        :template="URLtemplate"
        :item="item"
      />
    </div>
    <SliderDots :items="items" />
  </div>
</template>

<script>
import SliderDots from "./SliderDots.vue";
import SliderItem from "./SliderItem.vue";

export default {
  name: "Slider",
  components: { SliderDots, SliderItem },
  data: function () {
    return {
      URLtemplate:
        "https://raw.githubusercontent.com/MikhailErnstovich/my-ftp/master/img/",
      items: [
        {
          title: " A new Online Shop experience.",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.",
          linkText: "Shop Now",
          imgLink: "/home_slider_1.jpg",
          num: "1",
          isActive: true,
        },
        {
          title: " A new Online Shop experience.",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.",
          linkText: "Shop Now",
          imgLink: "/home_slider_2.jpg",
          num: "2",
          isActive: false,
        },
        {
          title: " A new Online Shop experience.",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.",
          linkText: "Shop Now",
          imgLink: "/home_slider_3.jpg",
          num: "3",
          isActive: false,
        },
      ],
    };
  },
};
</script>

<style>
</style>