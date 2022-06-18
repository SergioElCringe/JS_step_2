<template>
  <header class="header" v-header-resize="handleScroll">
    <div class="header_container">
      <div class="container">
        <div class="row">
          <div class="col">
            <div
              id="header"
              class="
                header_content
                d-flex
                flex-row
                align-items-center
                justify-content-start
              "
            >
              <Logo />
              <Nav />
              <div class="header_extra ml-auto">
                <Cart />
                <SearchIcon />
                <Hamburger />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SearchPanel />
    <Socials class="header_social" />
  </header>
</template>

<script>
import Nav from "../Nav/Nav.vue";
import Cart from "../Cart/Cart.vue";
import SearchIcon from "../SearchIcon/SearchIcon.vue";
import Hamburger from "../Hamburger/Hamburger.vue";
import Socials from "../Socials/Socials.vue";
import Logo from "../Logo/Logo.vue";
import SearchPanel from "../SearchPanel/SearchPanel.vue";

export default {
  name: "Header",
  components: { Nav, Cart, SearchIcon, Hamburger, Socials, Logo, SearchPanel },
  methods: {
    handleScroll(evt, el) {
      if (window.scrollY > 100) {
        el.classList.add("scrolled");
      } else {
		    el.classList.remove("scrolled");
	    }
    },
  },
  directives: {
    headerResize: {
      mounted(el, binding) {
        window.addEventListener("scroll", evt => binding.value(evt, el));
      },
    },
  },
};
</script>

<style>
.header {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
.header_container {
  width: 100%;
  z-index: 1;
  background: #ffffff;
}
.header_content {
  width: 100%;
  height: 130px;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.header.scrolled .header_content {
  height: 70px;
}

.header.scrolled .logo a {
  font-size: 24px;
}

.header_social {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 60px;
  z-index: 1;
  margin-right: -5px;
}
.header_social ul li {
  display: inline-block;
}
.header_social ul li:not(:last-child) {
  margin-right: 18px;
}
.header_social ul li a i {
  font-size: 16px;
  color: #b5b5b5;
  padding: 5px;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.header_social ul li a i:hover {
  color: #1b1b1b;
}

@media only screen and (max-width: 1600px) {
  .header_social {
    display: none;
  }
}

@media only screen and (max-width: 1199px) {
  .header_container {
    padding-left: 45px;
    padding-right: 45px;
  }
  .header_container .container {
    max-width: 100%;
  }
}

@media only screen and (max-width: 991px) {
  .header_container {
    padding-left: 15px;
    padding-right: 15px;
  }
  .header_social {
    display: none;
  }
}

@media only screen and (max-width: 575px) {
  .header_container {
    padding-left: 0px;
    padding-right: 0px;
  }
  .header_content {
    height: 70px;
  }
  .header.scrolled .logo a {
    font-size: 18px;
  }
}
</style>