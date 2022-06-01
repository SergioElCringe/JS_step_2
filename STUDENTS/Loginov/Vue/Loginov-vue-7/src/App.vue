<template>
  <div class="super_container">
    <!-- Header -->
    <Header />
    <!-- Home -->
    <div class="view-container">
      <router-view />
    </div>
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
  .view-container {
    margin-top: 130px;
  }
</style>
