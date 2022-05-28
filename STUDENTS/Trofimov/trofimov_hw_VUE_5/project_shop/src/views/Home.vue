<template>

	<Carusel/>

    <Ads/>

    <Catalog/>

	<Ad/>

	<IconBox/>
</template>

<script>
import Catalog from '../components/Catalog.vue'
import Ads from '../componentsPage/homeComponents/Ads/ads.vue'
import Carusel from '../componentsPage/homeComponents/Carusel/carusel.vue'
import Ad from '../componentsPage/homeComponents/ad/ad.vue'
import IconBox from '../componentsPage/homeComponents/iconBoxes/IconBox.vue'
export default {
    name: 'Home', 
    components: {
        Catalog,
        Ads,
        Carusel,
        Ad,
        IconBox
    }
}
</script>

<style>

</style>