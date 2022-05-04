<template>
  <header class="header" :class="isScrolled">
    <div class="header_container">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="header_content d-flex flex-row align-items-center justify-content-start">
              <div class="logo"><router-link to="/">Sublime.</router-link></div>
              <nav class="main_nav">
                  <MenuNavigation />
              </nav>
              <div class="header_extra ml-auto">
                <Cart v-if="cartAvailable" />
                <div class="search">
                  <div class="search_icon" @click="showSearchPanel = !showSearchPanel">
                    <img src="../../assets/img/search.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SearchPanel v-show="showSearchPanel" />
    <Social />
  </header>
</template>

<script>
import MenuNavigation from '@components/MenuNavigation.vue';
import Cart from '@components/Cart.vue';
import SearchPanel from '@components/pages/UI/SearchPanel.vue';
import Social from '@components/pages/UI/Social.vue';

export default {
  name: 'Header',
  components: { MenuNavigation, Cart, SearchPanel, Social },
  data() {
    return {
      showSearchPanel: false,
      scrolled: false,
    };
  },

  methods: {
    handleScroll() {
      if (window.scrollY > 100) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      };
    }, 
  },

  computed: {
    cartAvailable() {
      return this.$route.path !== '/Cart'; 
    },

    isScrolled() {
      return this.scrolled ? 'scrolled' : '';
    },
  },

  created() {
    window.addEventListener('scroll', this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>