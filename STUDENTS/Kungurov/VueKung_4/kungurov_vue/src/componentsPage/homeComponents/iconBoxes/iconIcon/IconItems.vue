<template>
          <div class="icon_box">
            <div class="icon_box_image">
              <img  :src="img + item.imgUrl" alt=""/>
            </div> 
            <div class="icon_box_title">{{ item.text }}</div>
            <div class="icon_box_text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                a ultricies metus. Sed nec molestie.
              </p>
            </div>
          </div>
</template>

<script>
export default {
  props: ['item' , 'img'],
  name: 'IconItems',


};
</script>

<style>
</style>