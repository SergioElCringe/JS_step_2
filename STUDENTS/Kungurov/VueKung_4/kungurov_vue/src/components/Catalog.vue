<template>
  <div class="product_grid" id="catalog">
    <catalogItem v-for="item of items" :key="item.id" :item="item" :imgApi="imgApi" />
  </div>
</template>

<script>
import catalogItem from '../components/items/catalogItem.vue'
import { mapState, mapGetters , mapActions} from 'vuex';


export default {
name: 'Catalog',
  components: { catalogItem },
  data() {
    return {
      url: '/api/catalog',
      imgApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products',
      error: null,
    };
  },
  
  methods: {
    ...mapActions({
      getCatalog: 'Catalog/getCatalog',
    }),
  },

  computed: {
    ...mapGetters({
      items: 'Catalog/itemsMain'
    })
  },

   async created() {
     try {
       await this.getCatalog(this.url)
     }
     catch(err) {
       console.warn(err)
     }
   }
};
</script>

<style>
.product_grid{
  display: flex;
  justify-content: space-between;
  flex-flow: column wrap;
  align-items: center;
  flex-direction: row
}
</style>