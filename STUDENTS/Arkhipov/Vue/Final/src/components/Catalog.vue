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
	props:{
		query: {
			type: Object,
			default: () => null,
			}
	},
  data() {
    return {
      url: '/api/catalog',
      imgApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products',
      error: null,
    };
  },
	computed:{
		...mapGetters({
      items: 'Catalog/items',
    })
	},
	 watch: {
    query: {
      deep: true,
      async handler() {
        await this.getCatalog(this.query);
      },
    }
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
			 await this.getCatalog(this.query);
		}
		catch(err){
			console.warn(err);
		}
	},
}
</script>

<style>
	.catalog {
		/* min-height: 1200px !important; */
		max-width: 1400px !important;
		display: flex !important;
		flex-wrap: wrap !important;
		justify-content: space-between !important;
		padding: 0px 50px;
		margin: 0px auto;
	}

	.btn-add {
		margin: 0px auto !important;
		width: 100% !important;
	}
</style>