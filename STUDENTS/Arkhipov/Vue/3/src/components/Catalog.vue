<template>
    <div class="catalog">
      <item 
        v-for="item of items" 
        :key="item.id" 
        :item="item"
        :imgApi="imgApi"
      />
    </div>
</template>

<script>
import item from './items/catalogItem.vue';

export default {
  name: 'Catalog',
  components: { item },
  data() {
    return {
      items: [],
      url: '/api/catalog',
      imgApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products',
      error: null,
    };
  },

  async created() {
    try {
      const data = await $api.send(this.url, 'GET');
      this.items = data;
    }
    catch(err) {
      this.error = err;
    }
  },
}
</script>

<style>
	.catalog {
		height: 1200px !important;
		display: flex !important;
		flex-wrap: wrap !important;
		justify-content: space-between !important;
	}

	.btn-add {
		margin: 0px auto !important;
		width: 100% !important;
	}
</style>