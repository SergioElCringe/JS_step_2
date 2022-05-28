<template>
  <div class="avds">
		<div class="avds_container d-flex flex-lg-row flex-column align-items-start justify-content-between">
            <Small/>
			<Large/>
		</div>
	</div>
</template>

<script>
import Small from './adsItems/small.vue'
import Large from './adsItems/large.vue'
export default {
name : 'Ads',
components: {
    Small,
    Large
}
}
</script>

<style>

</style>