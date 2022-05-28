<template>
	<ul>
		<item 
			v-for="(item, index) of items" :key="index"
			:item="item"
		/>
	</ul>
</template>

<script>

import item from "./items/menuItem.vue";

export default {
	name: 'MenuList',
	components: { item },
		data(){
			return{
				items: [],
				url: '/api/menu',
				imgApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products',
		}
	},
	methods:{
	async getData(){
		try {
			const data = await $api.send(this.url, 'GET');
			this.items = data;
		}
		catch (err) {
			this.error = err;
			console.log('ERROR MENU');
		}
	}
	},
	
	async created(){
		this.getData();
	},
}

</script>

<style>

</style>