<template>
  <div class="footer_overlay">
    <footer class="footer">
      <div
        class="footer_background"
        style="
          background-image: url(https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/footer.jpg);
        "
      ></div>
      <div class="container">
        <div class="row">
          <div class="col">
            <div
              class="
                footer_content
                d-flex
                flex-lg-row flex-column
                align-items-center
              "
            >
              <Logo />
              <Socials class="footer_social" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Socials from "../Socials/Socials.vue";
import Logo from "../Logo/Logo.vue";

export default {
  name: "Footer",
  components: { Socials, Logo },
};
</script>

<style>
.footer_overlay {
  width: 100%;
  height: 129px;
  background: transparent;
  z-index: 1;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;
}
.footer_background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.footer_content {
  justify-content: space-between;
  width: 100%;
  height: 129px;
}
.footer_logo {
  width: 30%;
}
.footer_logo a {
  font-size: 30px;
  line-height: 0.75;
  color: #1b1b1b;
  font-weight: 700;
}
.footer_social {
  width: 30%;
  text-align: right;
}
.footer_social ul li {
  display: inline-block;
}
.footer_social ul li:not(:last-child) {
  margin-right: 26px;
}
.footer_social ul li a i {
  font-size: 17px;
  color: #1b1b1b;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.footer_social ul li a i:hover {
  color: #ffffff;
}
@media only screen and (max-width: 991px) {
	.footer_overlay	{
		height: 200px;
	}
	.footer_content	{
		height: 200px;
    justify-content: space-around;
	}
	.footer_logo,
	.footer_social	{
		text-align: center;
		width: 100%;
	}
	.footer_social	{
		margin-top: 21px;
	}
}
@media only screen and (max-width: 575px) {
	.footer_logo a {
		font-size: 24px;
	}
}
</style>