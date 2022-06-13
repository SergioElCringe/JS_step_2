<template>

	<Carusel/>

    <Ads/>

    <Catalog :query="query"/>

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
        IconBox,
    },
    data() {
        return {
            query: {
            filter: 'category',
            page: 1,
            show: 3,
            sort: 'ad',
        }
        }
    }
}
</script>

<style>

</style>