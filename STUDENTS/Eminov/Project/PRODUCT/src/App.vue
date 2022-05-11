<template>
  <div class="super_container">
    <v-app>
      <Header />
        <v-main>
          <router-view/>
        </v-main>
      <Footer />
    </v-app>
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

<style>
  @import '~bootstrap/dist/css/bootstrap.css';
</style>
