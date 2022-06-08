<template>
  <div class="home">
    <div class="home_slider_container">
        <carousel class="home_slider" 
          :items-to-show="1"
          :autoplay="3000" 
          :pauseAutoplayOnHover="true" 
          :wrapAround="true"
          :transition="1000"
        >
        <slide v-for="slide in items" :key="slide">
            <div class="home_slider_background"
              style="background-image: url('https://raw.githubusercontent.com/MikhailErnstovich/my-ftp/master/img/home_slider_1.jpg');">
            </div>
            <div class="home_slider_content">
                <div class="home_slider_title">{{ slide.title }}</div>
                <div class="home_slider_subtitle">{{ slide.subtitle }}</div>
                <div class="button button_light home_button">
                  <span>{{ slide.linkText }}</span>
                </div>
            </div>
        </slide>
        <template #addons>
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "CarouselSider",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data: function () {
    return {
      items: [
        {
          title: " A new Online Shop experience.",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.",
          linkText: "Shop Now",
          imgLink: "/home_slider_1.jpg",
          num: "1",
          isActive: true,
        },
        {
          title: " A new Online Shop experience.",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.",
          linkText: "Shop Now",
          imgLink: "/home_slider_2.jpg",
          num: "2",
          isActive: false,
        },
        {
          title: " A new Online Shop experience.",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.",
          linkText: "Shop Now",
          imgLink: "/home_slider_3.jpg",
          num: "3",
          isActive: false,
        },
      ],
    };
  },
};
</script>

<style>
.home {
  width: 100%;
  height: calc(100vh - 65px);
  background: #ffffff;
  z-index: 2;
}
.home_slider_container {
  width: 100%;
  height: 100%;
  padding-left: 60px;
	padding-right: 60px;
  margin-top: 130px;
}

.home_slider_background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.home_slider_content {
    display: flex;
    max-width: 580px;
    height: calc(100vh - 130px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.home_slider_title {
  font-size: 60px;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.2;
}
.home_slider_subtitle {
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  line-height: 2.14;
  margin-top: 22px;
}
.home_button {
  margin-top: 40px;
}
.carousel__pagination {
    display: flex;
    justify-content: center;
    list-style: none;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 10;
    width: 100%;
    padding-left: 60px;
    padding-right: 60px;
}
.carousel__pagination-button{
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid #000;
}

.carousel__pagination-button--active {
  box-shadow: 0px 0px 0px 1px #fff;
}

@media only screen and (max-width: 991px) {
  .home_slider_container {
    padding: 0 30px;
  }
  .home_slider_title {
    font-size: 48px;
  }
}
@media only screen and (max-width: 767px) {
  .home_slider_content {
    max-width: 100%;
    padding: 0 20px;
  }
  .home_slider_container {
    padding-left: 0px;
    padding-right: 0px;
  }
}
@media only screen and (max-width: 575px) {
  .home {
    height: 100vh;
    margin-bottom: 30px;
  }
  .home_slider_container {
    padding: 0;
    margin-top: 70px;
  }
  .home_slider_content {
    height: 100vh;
  }
  .home_slider_title {
    font-size: 24px;
  }
  .home_slider_subtitle {
    font-size: 13px;
    margin-top: 15px;
  }
  .button {
    width: 148px;
    height: 41px;
  }
  .button span {
    font-size: 13px;
    line-height: 37px;
  }
  .home_button {
    margin-top: 32px;
  }
}
</style>