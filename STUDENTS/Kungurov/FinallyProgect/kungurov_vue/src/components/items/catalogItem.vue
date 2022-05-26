<template>
  <a class="product">
    <div class="product_image" @click.prevent="$router.push('/catalog/' + item.id)"><img :src="imgApi + item.imgUrl" alt="" /></div>

    <div class="product_content">
      <div class="product_title">
        <a href="product.html">{{ item.name }}</a>
      </div>
      <div class="product_price">$ {{ item.price }}</div>
    </div>
    <div class="button button_custom btn-add" id="item.id" @click="addItem(item)">
      <span>Add</span>
    </div>
  </a>
</template>

<script>
import { mapState, mapGetters , mapActions} from 'vuex';
export default {
    name: 'CatalogItem',
    props: ['item', 'imgApi' , 'id' ],
    data() {
      return {
        categories: {
          '1': 'New',
          '2': 'Hot',
          '3': 'Sale'
        },
      };
    },
  
    methods: {
    ...mapActions({
      addItem: 'Cart/addItem'
    }),
  },
  
    computed: {
        category() {
            const { category } = this.item;
            return !category ? null : {
              class: 'product_' + this.categories[category].toLowerCase(),
              text: this.categories[category],
            };
          },
        },
};
</script>


<style>
.product{
  display: flex;
    margin-right : 5%;
    flex-wrap: wrap;
    justify-content: space-around;
    z-index: 6;
}
.product_image{
  width: 350px;
}

</style>