<template>
  <header class="header">
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
                <Cart ref="cart" />
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
import MenuNavigation from '../MenuNavigation.vue';
import Cart from '../Cart.vue';
import SearchPanel from '../pages/UI/SearchPanel.vue';
import Social from '../pages/UI/Social.vue';

export default {
  name: 'Header',
  components: { MenuNavigation, Cart, SearchPanel, Social },
  data() {
    return {
      showSearchPanel: false,
    };
  },
};
</script>