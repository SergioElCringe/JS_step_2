<template>
  <div class="super_container">
    <Header />
    <div class="view-container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/pages/Header.vue';
import Footer from './components/pages/Footer.vue';

export default {
  name: 'app',
  components: { Header, Footer }, 
};
</script>

<style lang="scss" scoped>
  .view-container {
    margin-top: 130px;
  }
</style>