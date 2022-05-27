<template>
	<div>
	<!-- <Slider/> -->
	<Avds/>
	<div class="products">
		<div class="container">
			<div class="row">
				<div class="col">
					<!-- Каталог -->
					<Catalog/>
				</div>
			</div>
		</div>
	</div>
	<AmazingDevices/>
	<IconBox/>
	</div>
</template>

<script>
import Catalog from '@/components/Catalog.vue';
import Slider from '@/components/Slider.vue';
import Avds from '../../components/Avds.vue';
import AmazingDevices from '../../components/AmazingDevices.vue';
import IconBox from '../../components/IconBox.vue';


export default {
    name: "Home",
    components: {
    Catalog,
    Slider,
    Avds,
    AmazingDevices,
    IconBox,
    Slider
},
}
</script>

<style lang="scss">

</style>