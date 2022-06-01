<template>
   <div class="owl-item home_slider_item">
      <div class="home_slider_background"
        style="background-image: url('https://raw.githubusercontent.com/MikhailErnstovich/my-ftp/master/img/home_slider_1.jpg');">
      </div>
      <div class="home_slider_content_container">
        <div class="container">
          <div class="row">
            <div class="col">
              <div
                class="home_slider_content"
                data-animation-in="fadeIn"
                data-animation-out="animate-out fadeOut"
              >
                <div class="home_slider_title">{{ item.title }}</div>
                <div class="home_slider_subtitle">{{ item.subtitle }}</div>
                <div class="button button_light home_button">
                  <a href="#">{{ item.linkText }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'SliderItem',
    props: ['item','template']
}
</script>

<style>

</style>