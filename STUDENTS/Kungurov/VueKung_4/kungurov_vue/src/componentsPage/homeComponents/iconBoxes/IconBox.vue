<template>
  <div class="iconBox">
          <div class="icon_boxes">
            <IconItems
              v-for="item of items"
              :key="item.id"
              :item="item"
              :img="img"
            />
    </div>
    	<div class="newsletter">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="newsletter_border"></div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-8 offset-lg-2">
					<div class="newsletter_content text-center">
						<div class="newsletter_title">Subscribe to our newsletter</div>
						<div class="newsletter_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros</p></div>
						<div class="newsletter_form_container">
							<form action="#" id="newsletter_form" class="newsletter_form">
								<input type="email" class="newsletter_input" required="required">
								<button class="newsletter_button trans_200"><span>Subscribe</span></button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
import IconItems from "./iconIcon/IconItems.vue";
export default {
  components: { IconItems },
  name: "IconBox",
  data() {
    return {
      img: "https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/BASE__PROJECT/images",
      items: [
        {
          imgUrl: "/icon_1.svg",
          text: "Free Shipping Worldwide",
        },
        {
          imgUrl: "/icon_2.svg",
          text: "Free Returns",
        },
        {
          imgUrl: "/icon_3.svg",
          text: "24h Fast Support",
        },
      ],
    };
  },
};
</script>

<style>
.icon_boxes {
  display: flex;
}
.newsletter{
  margin-bottom: 6%;
}
</style>