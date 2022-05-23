<template>
  <div class="banner">
    <div class="banner_container">
      <div class="banner_background" style="background-image: url(https://raw.githubusercontent.com/MikhailErnstovich/my-ftp/master/img/categories.jpg);"></div>
      <div class="banner_content_container">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="banner_content">
                <div class="banner_title">Smart Phones<span>.</span></div>
                <div class="banner_text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam a ultricies metus. Sed nec molestie eros. Sed viverra
                    velit venenatis fermentum luctus.
                  </p>
                </div>
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
    name: 'Banner',
    
};
</script>

<style>
.banner {
	width: 100%;
	height: 625px;
	background: #FFFFFF;
	z-index: 2;
	padding-top: 130px;
	padding-left: 60px;
	padding-right: 60px;
}
.banner_container {
	width: 100%;
	height: 100%;
}
.banner_background {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
}
.banner_content_container {
	position: absolute;
	top: 50%;
	left: 0;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	width: 100%;
}
.banner_content {
	width: 580px;
}
.banner_title {
	font-size: 60px;
	font-weight: 600;
	color: #FFFFFF;
	line-height: 1.2;
}
.banner_title span {
	color: #e95a5a;
}
.banner_text {
	margin-top: 7px;
}
.banner_text p {
	color: #FFFFFF;
}

@media only screen and (max-width: 991px) {
	.banner	{
		padding-left: 30px;
		padding-right: 30px;
	}
	.banner_title	{
		font-size: 48px;
	}
}

@media only screen and (max-width: 767px) {
	.banner_content	{
		width: 100%;
	}
	.banner_title	{
		font-size: 36px;
	}
}

@media only screen and (max-width: 575px) {
	.banner	{
		height: 350px;
		padding-top: 80px;
		padding-left: 0;
		padding-right: 0;
	}
	.banner_title	{
		font-size: 24px;
	}
	.banner_button	{
		margin-top: 32px;
	}
}

</style>