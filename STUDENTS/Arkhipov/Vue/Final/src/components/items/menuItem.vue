<template>
	<li v-if="item.items" class="hassubs">
		<router-link :to=" this.item.link ">
			{{item.text}}
			<ul>
				<li v-for="(item, index) of item.items" :key="index">
				<router-link :to=" item.link ">
						{{item.text}}
					</router-link>
				</li>
			</ul>
		</router-link>
	</li>
	<li v-else >
		<router-link :to="this.item.link">
			{{item.text}}
		</router-link>
	</li>

</template>


<script>

export default {
	name:'menuItem',
	
	props:{
		item: {}
		},
}
</script>

<style>
.main_nav{
	flex: 1 1 auto important;
}
</style>