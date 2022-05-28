<template>
  <div class="super_container">
    <!-- Header -->
    <Header />
    <!-- Home -->
    
    <router-view />

    <!-- Footer -->
    <Footer />
    
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  components: {
    Header,
    Footer
  },
  // data() {
  //   return {
  //   }
  // },
  // created() {
  // },
};
</script>

<style lang="scss">
</style>
