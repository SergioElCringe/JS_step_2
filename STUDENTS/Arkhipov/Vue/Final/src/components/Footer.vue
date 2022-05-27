<template>
		<footer class="footer">
			<div class="footer_background"
				style="background-image:url('https://raw.githubusercontent.com/SergioElCringe/JS_step_2/init/PROJECT/BASE__PROJECT/images/footer.jpg')">
			</div>
			<div class="container">
				<div class="row">
					<div class="col">
						<div
							class="footer_content d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
							<div class="footer_logo"><a href="#">Sublime.</a></div>
							<div class="footer_social ml-lg-auto">
								<ul>
									<li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
									<li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
									<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
									<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
</template>

<script>
export default {
	name: 'Footer'
}
</script>

<style>

.footer{
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	z-index: 1;
}

.footer_overlay{
	width: 100%;
	height: 129px;
	background: transparent;
	z-index: 1;
}

.footer_background{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
}

.footer_content{
	width: 100%;
	height: 129px;
}

.footer_logo{
	width: 30%;
}

.footer_logo a{
	font-size: 30px;
	line-height: 0.75;
	color: #1b1b1b;
	font-weight: 700;
}

.copyright{
	width: 40%;
	text-align: center;
	font-size: 14px;
	font-weight: 400;
	color: #1b1b1b;
}

.footer_social{
	width: 30%;
	text-align: right;
}

.footer_social ul li{
	display: inline-block;
}

.footer_social ul li:not(:last-child){
	margin-right: 26px;
}

.footer_social ul li a i{
	font-size: 17px;
	color: #1b1b1b;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}

.footer_social ul li a i:hover{
	color: #FFFFFF;
}

</style>