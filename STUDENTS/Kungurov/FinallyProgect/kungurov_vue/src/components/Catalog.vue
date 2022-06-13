<template>
  <div class="product_grid" id="catalog">
    <catalogItem v-for="item of items" :key="item.id" :item="item" :imgApi="imgApi" />
    <Paginaton :onPage="3" @paginate="query.page = $event"/>
  </div>
</template>

<script>
import catalogItem from '../components/items/catalogItem.vue'
import PaginatonVue from './Paginaton.vue';
import { mapGetters , mapActions } from 'vuex';
import Paginaton from './Paginaton.vue';


export default {
  name: 'Catalog',
  components: { catalogItem, PaginatonVue, Paginaton },
  props: {query: {
      type: Object,
      default: () => null
  }},
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
      items: 'Catalog/items'
    })
  },

  watch: {
    query: {
      deep: true,
      async handler() {
        await this.getCatalog(this.query)
      }
    }
  },
   async created() {
     try {
       await this.getCatalog(this.query)
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
  justify-content: center;
  flex-flow: column wrap;
  align-items: center;
  flex-direction: row
}
</style>