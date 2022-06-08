<template>
  <div class="icon_boxes">
    <div class="container">
      <div class="row icon_box_row">
        <IconBox
          v-for="item in items"
          :key="item"
          :item="item"
          :template="URLtemplate"
        />
      </div>
    </div>
  </div>
</template>

<script>
import IconBox from "./IconBox.vue";

export default {
  name: "IconGroup",
  components: { IconBox },
  data: function () {
    return {
      URLtemplate:
        "https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/BASE__PROJECT/images",
      items: [
        {
          link: "/icon_1.svg",
          title: "Free Shipping Worldwide",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.",
        },
        {
          link: "/icon_2.svg",
          title: "Free Shipping Worldwide",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.",
        },
        {
          link: "/icon_3.svg",
          title: "Free Shipping Worldwide",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.",
        },
      ],
    };
  },
};
</script>

<style>
.icon_boxes {
  width: 100%;
  padding-top: 99px;
  padding-bottom: 99px;
  background: #ffffff;
  z-index: 2;
}

</style>