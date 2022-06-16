<template>
    <div class="avds_small">
        <div class="avds_background"
            style="background-image:url(https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/avds_small.jpg)">
        </div>
        <div class="avds_small_inner">
            <div class="avds_discount_container">
                <img
                    src="https://raw.githubusercontent.com/MikhailErnstovich/my-ftp/master/img/discount.png">
                <div>
                    <div class="avds_discount">
                        <div>20<span>%</span></div>
                        <div>Discount</div>
                    </div>
                </div>
            </div>
            <div class="avds_small_content">
                <div class="avds_title">Smart Phones</div>
                <div class="avds_link">
                    <a href="categories.html">See More</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SmallAdvert',
}
</script>

<style>
.avds_small {
	width: calc((100% * 0.391) - 15px);
	height: 100%;
	padding: 30px;
}
.avds_small_inner {
	width: 100%;
	height: 100%;
	border: solid 2px #FFFFFF;
}
.avds_small_content {
	max-width: 250px;
	padding-top: 57px;
	padding-left: 31px;
	padding-right: 30px;
}
@media only screen and (max-width: 991px) {
	.avds_small	{
		width: 100%;
		height: 490px;
	}
}
</style>