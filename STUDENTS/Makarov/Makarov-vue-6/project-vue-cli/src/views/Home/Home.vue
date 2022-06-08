<template>
    <div class="super_container">
        <Header/>
        <SideMenu/>

		<div class="home">
            <Slider/>
		</div>

        <div class="avds">
			<div class="avds_container d-flex flex-lg-row flex-column align-items-start justify-content-between">
				<SmallAdvert/>
                <LargeAdvert/>
			</div>
		</div>

		<div class="products">
			<div class="container">
				<div class="row">
					<div class="col">
						<Catalog/>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="avds_xl">
		<div class="container">
			<div class="row">
				<div class="col">
                    <ExtraLargeAdvert/>
				</div>
			</div>
		</div>
	</div>
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
import Slider from './components/Slider/Slider.vue';
import NewsLetter from '@components/NewsLetter/NewsLetter.vue';

export default {
    name: 'Home',
    components: { Cart, Catalog, SmallAdvert, LargeAdvert, ExtraLargeAdvert, SideMenu, Header, Footer, IconGroup, Slider, NewsLetter }
}
</script>

<style>
	
</style>