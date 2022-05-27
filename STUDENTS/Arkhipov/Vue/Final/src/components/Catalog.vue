<template>
    <div class="catalog">
      <item 
        v-for="item of items" 
        :key="item.id" 
        :item="item"
        :imgApi="imgApi"
				@addItem="addItem"
      />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import item from './items/catalogItem.vue';

export default {
  name: 'Catalog',
  components: { item },
  data() {
    return {
      url: '/api/catalog',
      imgApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products',
      error: null,
    };
  },
	computed:{
		// ...mapGetters({
			// для вывода изменененного state(геттера)
			// items: 'имя геттера',
		// },)
		//...mapState({
			//items: state => state.catalogItems,
		//}) вывести данные из state  
		...mapGetters({
      items: 'Catalog/getItems',
    })
	},
  methods:{
		...mapActions({
			getCatalog: 'Catalog/getCatalog',
		}),
		addItem(id) {
			console.log(id);
		},
	},
	async created(){
		try{
			 await this.getCatalog(this.url);
		}
		catch(err){
			console.warn(err);
		}
	},
}
</script>

<style>
	.catalog {
		max-height: 1200px !important;
		display: flex !important;
		flex-wrap: wrap !important;
		justify-content: space-between !important;
	}

	.btn-add {
		margin: 0px auto !important;
		width: 100% !important;
	}
</style>