<template>
	<li v-if="item.items" class="hassubs">
		<router-link :to=" this.item.link ">
			{{item.text}}
			<ul>
				<li v-for="(item, index) of item.items" :key="index">
					<a :href="item.link">
						{{item.text}}
					</a>
				</li>
			</ul>
		</router-link>
	</li>
	<li v-else >
		 <a :href="item.link">
			{{item.text}}
		</a>
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

</style>