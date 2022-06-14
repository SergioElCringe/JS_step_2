<template>
	<!-- Home -->
		<div class="home">
			<div class="home_slider_container">
				<!-- Home Slider -->
				<div class="owl-carousel owl-theme home_slider">
					<!-- Slider Item -->
					<div class="owl-item home_slider_item">
						<div class="home_slider_background"
							style="background-image:url('https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/home_slider_1.jpg')">
						</div>
						<div class="home_slider_content_container">
							<div class="container">
								<div class="row">
									<div class="col">
										<div class="home_slider_content" data-animation-in="fadeIn"
											data-animation-out="animate-out fadeOut">
											<div class="home_slider_title">A new Online Shop experience.</div>
											<div class="home_slider_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
												elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis
												fermentum luctus.</div>
											<div class="button button_light home_button"><a href="#">Shop Now</a></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Slider Item -->
					<div class="owl-item home_slider_item">
						<div class="home_slider_background"
							style="background-image:url('https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/home_slider_1.jpg')">
						</div>
						<div class="home_slider_content_container">
							<div class="container">
								<div class="row">
									<div class="col">
										<div class="home_slider_content" data-animation-in="fadeIn"
											data-animation-out="animate-out fadeOut">
											<div class="home_slider_title">A new Online Shop experience.</div>
											<div class="home_slider_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
												elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis
												fermentum luctus.</div>
											<div class="button button_light home_button"><a href="#">Shop Now</a></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Slider Item -->
					<div class="owl-item home_slider_item">
						<div class="home_slider_background"
							style="background-image:url('https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/home_slider_1.jpg')">
						</div>
						<div class="home_slider_content_container">
							<div class="container">
								<div class="row">
									<div class="col">
										<div class="home_slider_content" data-animation-in="fadeIn"
											data-animation-out="animate-out fadeOut">
											<div class="home_slider_title">A new Online Shop experience.</div>
											<div class="home_slider_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
												elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis
												fermentum luctus.</div>
											<div class="button button_light home_button"><a href="#">Shop Now</a></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Home Slider Dots -->
				<div class="home_slider_dots_container">
					<div class="container">
						<div class="row">
							<div class="col">
								<div class="home_slider_dots">
									<ul id="home_slider_custom_dots" class="home_slider_custom_dots">
										<li class="home_slider_custom_dot active">01.</li>
										<li class="home_slider_custom_dot">02.</li>
										<li class="home_slider_custom_dot">03.</li>
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
export default {
	name: 'Slider',
}
</script>

<style>
.home
{
	width: 100%;
	height: 950px;
	background: #FFFFFF;
	z-index: 2;
}
.home_slider_container
{
	width: 100%;
	height: 100%;
	padding-top: 130px;
	padding-left: 60px;
	padding-right: 60px;
	padding-bottom: 30px;
}
.home_slider_background
{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
}
.home_slider_content_container
{
	position: absolute;
	left: 0;
	top: 32.3%;
	width: 100%;
}
.home_slider_content
{
	max-width: 580px;
}
.home_slider_title
{
	font-size: 60px;
	font-weight: 600;
	color: #FFFFFF;
	line-height: 1.2;
}
.home_slider_subtitle
{
	font-size: 14px;
	font-weight: 400;
	color: #FFFFFF;
	line-height: 2.14;
	margin-top: 22px;
}
.home_button
{
	margin-top: 40px;
}
.home_slider_dots_container
{
	display: inline-block;
	position: absolute;
	left: 0;
	bottom: 0;
	z-index: 10;
	width: 100%;
	padding-left: 60px;
	padding-right: 60px;
}
.home_slider_dots
{
	position: absolute;
	left: 15px;
	bottom: 56px;
}
.home_slider_custom_dot
{
	display: inline-block;
	position: relative;
	color: #FFFFFF;
	cursor: pointer;
	font-size: 14px;
	font-weight: 600;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.home_slider_custom_dot:hover
{
	color: #e95a5a;
}
.home_slider_custom_dot.active
{
	color: #e95a5a;
}
.owl-theme .owl-dots
{
	display: none;
}
.fadeIn
{
	animation-delay: 1000ms;
}
</style>