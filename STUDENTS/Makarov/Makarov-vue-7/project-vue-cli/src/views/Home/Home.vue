<template>
    <div class="super_container">
        <Header/>
        <SideMenu/>
        <CarouselSlider/>
        <div class="avds">
			<div class="avds_container d-flex flex-lg-row flex-column align-items-start justify-content-between">
				<SmallAdvert/>
                <LargeAdvert/>
			</div>
		</div>

		<Catalog :suggestion="true"/>

	</div>


    <ExtraLargeAdvert/>

    <IconGroup/>
	
	<NewsLetter />

    <Footer/>
</template>

<script>
import Cart from '@components/Cart/Cart.vue';
import Catalog from '@components/Catalog/Catalog.vue';
import SmallAdvert from './components/Adverts/SmallAdvert.vue';
import LargeAdvert from './components/Adverts/LargeAdvert.vue'
import ExtraLargeAdvert from './components/Adverts/ExtraLargeAdvert.vue';
import SideMenu from '@components/SideMenu/SideMenu.vue';
import Header from '@components/Header/Header.vue';
import Footer from '@components/Footer/Footer.vue';
import IconGroup from '@components/IconGroup/IconGroup.vue';
import NewsLetter from '@components/NewsLetter/NewsLetter.vue';
import CarouselSlider from '@components/Carousel/CarouselSlider.vue';

export default {
    name: 'Home',
    components: { Cart, Catalog, SmallAdvert, LargeAdvert, ExtraLargeAdvert, SideMenu, Header, Footer, IconGroup, NewsLetter, CarouselSlider}
}
</script>

<style>
	
</style>