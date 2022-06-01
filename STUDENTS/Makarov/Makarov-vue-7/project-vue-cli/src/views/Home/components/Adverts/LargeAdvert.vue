<template>
  <div class="avds_large">
    <div
      class="avds_background"
      style="
        background-image: url(https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/avds_large.jpg);
      "
    ></div>
    <div class="avds_large_container">
      <div class="avds_large_content">
        <div class="avds_title">Professional Cameras</div>
        <div class="avds_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
          ultricies metus. Sed nec molestie eros. Sed viver ra velit venenatis
          fermentum luctus.
        </div>
        <div class="avds_link avds_link_large">
          <a href="categories.html">See More</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LargeAdvert",
};
</script>

<style>
.avds_large {
  width: calc((100% * 0.608) - 15px);
  height: 100%;
}
.avds_large_container {
  width: 100%;
  height: 100%;
  padding-top: 39px;
  padding-left: 32px;
  padding-bottom: 44px;
}
.avds_large_content {
  max-width: 567px;
  height: 100%;
  background: rgba(0, 0, 0, 0.63);
  padding-right: 130px;
  padding-left: 30px;
  padding-top: 51px;
  padding-bottom: 30px;
}
.avds_link_large {
  margin-top: 40px;
}
@media only screen and (max-width: 991px) {
	.avds_large	{
		width: 100%;
		height: 490px;
		margin-top: 30px;
	}
}
@media only screen and (max-width: 575px) {
	.avds_large_content {
		max-width: calc(100% - 30px);
    padding-right: 30px;
	}
}

</style>