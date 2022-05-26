<template>
<div class="super_container">
  <v-app>
    <Header />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
  </div>
      <Footer/>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue'

export default {
  name: 'App',
   components: { Header, Footer },
  data: () => ({
    //
  }),
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>