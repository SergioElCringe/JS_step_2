<template>
  	<div class="icon_boxes">
		<div class="container">
			<div class="row icon_box_row">
                <IconBox v-for='item in items'
                    :key='item'
                    :item='item'
                    :template='URLtemplate'
                />
				<!-- <div class="col-lg-4 icon_box_col">
					<div class="icon_box">
						<div class="icon_box_image">
							<img
								src="https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/BASE__PROJECT/images/icon_2.svg">
						</div>
						<div class="icon_box_title">Free Returns</div>
						<div class="icon_box_text">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus.
								Sed nec molestie.
							</p>
						</div>
					</div>
				</div>

				<div class="col-lg-4 icon_box_col">
					<div class="icon_box">
						<div class="icon_box_image">
							<img
								src="https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/BASE__PROJECT/images/icon_3.svg">
						</div>
						<div class="icon_box_title">24h Fast Support</div>
						<div class="icon_box_text">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus.
								Sed nec molestie.
							</p>
						</div>
					</div>
				</div> -->

			</div>
		</div>
	</div>
</template>

<script>
import IconBox from './IconBox.vue';

export default {
    name: 'IconGroup',
    components: { IconBox },
    data: function() {
        return {
            URLtemplate: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/BASE__PROJECT/images',
            items: [
                {
                    link: '/icon_1.svg',
                    title: 'Free Shipping Worldwide',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.'
                },
                                {
                    link: '/icon_2.svg',
                    title: 'Free Shipping Worldwide',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.'
                },
                                {
                    link: '/icon_3.svg',
                    title: 'Free Shipping Worldwide',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.'
                },
            ],
        }
    }
}
</script>

<style>

</style>