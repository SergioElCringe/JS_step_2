<template>
  	<div class="super_container">
		<Header/>
        <SideMenu/>
		<Banner/>
		<Products/>
		<IconGroup/>
		<NewsLetter/>
		<Footer/>
	</div>
</template>

<script>
import SideMenu from '@components/SideMenu/SideMenu.vue';
import Header from '@components/Header/Header.vue';
import Footer from '@components/Footer/Footer.vue';
import NewsLetter from '@components/NewsLetter/NewsLetter.vue';
import IconGroup from '@components/IconGroup/IconGroup.vue';
import Products from './components/Products/Products.vue';
import Banner from './components/Banner/Banner.vue';

export default {
  components: { SideMenu, Header, Footer, NewsLetter, IconGroup, Banner, Products },

}
</script>

<style>

</style>
