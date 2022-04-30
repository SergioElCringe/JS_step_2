<template>
  <div class="icon_boxes">
    <div class="container">
      <div class="row icon_box_row">
        <IconBoxsItem 
          v-for="item of boxsOptions"
          :key="item.title"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import IconBoxsItem from './items/IconBoxsItem.vue';

export default {
  name: 'IconBoxs',
  components: { IconBoxsItem },
  data() {
    return {
      boxsOptions: [
        {
          url: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_2/init/PROJECT/1/src/assets/img/icon_1.svg',
          title: 'Free Shipping Worldwide',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.',
        },
        {
          url: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_2/init/PROJECT/1/src/assets/img/icon_2.svg',
          title: 'Free Returns',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.',
        },
        {
          url: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_2/init/PROJECT/1/src/assets/img/icon_3.svg',
          title: '24h Fast Support',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.',
        }
      ],
    };
  },
};
</script>