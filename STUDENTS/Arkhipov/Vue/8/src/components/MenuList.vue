<template>
	<ul>
		<item 
			v-for="(item, index) of items" :key="index"
			:item="item"
		/>
	</ul>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import item from "./items/menuItem.vue";

export default {
	name: 'MenuList',
	components: { item },
		data(){
			return{
				url: '/api/menu',
				imgApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products',
		}
	},
	methods:{
	...mapActions({
		getMenu:'Menu/getMenu',
	})
	},
	computed:{
		...mapGetters({
			items: 'Menu/getItems',
		})
	},
	
	async created(){
	try{
		await this.getMenu(this.url);
	}
	catch(err){
			console.warn(err);
	}
	},
}

</script>

<style>

</style>