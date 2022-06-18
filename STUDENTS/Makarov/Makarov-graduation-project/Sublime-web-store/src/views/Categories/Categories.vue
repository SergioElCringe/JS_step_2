<template>
    <div class="super_container">
    <Header/>
    <SideMenu/>
    <Banner/>
    <Catalog :pagination="this.pagination"/>
    <IconGroup/>
    <NewsLetter/>
    <Footer/>
  </div>
</template>

<script>
import SideMenu from "@components/SideMenu/SideMenu.vue";
import Header from "@components/Header/Header.vue";
import Footer from "@components/Footer/Footer.vue";
import NewsLetter from "@components/NewsLetter/NewsLetter.vue";
import IconGroup from "@components/IconGroup/IconGroup.vue";
import Catalog from "@/components/Catalog/Catalog.vue";
import Banner from "./components/Banner/Banner.vue";

export default {
  name: "Categories",
  components: { SideMenu, Header, Footer, NewsLetter, IconGroup, Banner, Catalog },
  data() {
    return {
      pagination: true,
    }
  },
}
</script>

<style>

</style>
