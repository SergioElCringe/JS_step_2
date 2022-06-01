<template>
	<li v-if="item.items" class="hassubs">
		<a :href="item.link">
			{{item.text}}
			<ul>
				<li v-for="(item, index) of item.items" :key="index">
					<a :href="item.link">
						{{item.text}}
					</a>
				</li>
			</ul>
		</a>
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