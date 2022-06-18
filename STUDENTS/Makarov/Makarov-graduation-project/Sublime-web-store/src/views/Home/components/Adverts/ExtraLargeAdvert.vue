<template>
  <div class="avds_xl">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="avds_xl_container clearfix">
            <div
              class="avds_xl_background"
              style="
                background-image: url(https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/avds_xl.jpg);
              "
            ></div>
            <div class="avds_xl_content">
              <div class="avds_title">Amazing Devices</div>
              <div class="avds_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                a ultricies metus.
              </div>
              <div class="avds_link avds_xl_link">
                <a href="" @click.prevent="$router.push('/categories')">See More</a>
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
  name: "ExtraLargeAdvert",
};
</script>

<style>
.avds_xl {
  width: 100%;
  background: #ffffff;
  z-index: 2;
}
.avds_xl_container {
  width: 100%;
  height: 345px;
  padding-top: 34px;
  padding-right: 35px;
  padding-bottom: 30px;
  padding-left: 30px;
}
.avds_xl_background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.avds_xl_content {
  width: 391px;
  height: 100%;
  background: #e95a5a;
  float: right;
  padding-top: 28px;
  padding-left: 42px;
  padding-right: 30px;
}
.avds_xl_link {
  margin-top: 18px;
}

@media only screen and (max-width: 767px){
  .avds_xl_container {
    padding: 30px;
  }
  .avds_xl_content {
    width: 100%;
  }
}
@media only screen and (max-width: 479px) {
  .avds_xl_content {
    padding: 30px;
  }
}
</style>