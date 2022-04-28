<template>
  <div>
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

  mounted() {
    // console.log(this);
    // console.log(this.$parent.$refs.cart.data);
    // this.$parent.hello();
    console.log(this.$root);

  },
  methods: {
    addItem(item) {
      this.$parent.$refs.cart.addItem(item);
    },
  }
}
</script>

<style>

</style>