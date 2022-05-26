<template>
<div class="super_carusel">
  <v-carousel  
  :show-arrows="false"
  height="80%"
  cycle

  :interval="17000"
  >
    <v-carousel-item
      v-for="(item,i) in items"
		:light="true"
      	:key="i"
      	:src="item.src"
    ></v-carousel-item>
  </v-carousel>
  	<div class="home_slider_content_container">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="home_slider_content"  data-animation-in="fadeIn" data-animation-out="animate-out fadeOut">
						<div class="home_slider_title">A new Online Shop experience.</div>
						<div class="home_slider_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.</div>
						<div class="button button_light home_button"><a href="#">Shop Now</a></div>
					</div>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
name: 'Carusel',
 data() {
    return {
      	items: [
			{src: 'https://raw.githubusercontent.com/DeniKungurov/Sublime/Sublime_1/src/assets/img/home_slider_1.jpg'},
			{src: 'https://raw.githubusercontent.com/DeniKungurov/Sublime/Sublime_1/src/assets/img/home_slider_1.jpg'},
			{src: 'https://raw.githubusercontent.com/DeniKungurov/Sublime/Sublime_1/src/assets/img/home_slider_1.jpg'},
	 	],
    };
  },
}
</script>

<style>
.v-carousel__controls{
	background: transparent;
}
</style>