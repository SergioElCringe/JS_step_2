<template>
  <div class="product">
    <div class="product_image">
      <img :src="imgUrl" />
      <div class="btn-add" @click="getNewItem({ item })">Add this product</div>
    </div>
    <div class="product_content">
      <div class="product_title">
        <router-link :to="`/catalog/${item.id}`">{{ item.name }}</router-link>
        <div class="product_price sale" v-if="item.category === 2">
          <span class="old-price"><s>{{ item.prevPrice }}$</s></span>
          <span class="new-price">{{ item.price }}$</span>
        </div>
        <div v-else class="product_price">{{ item.price }}$</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'CatalogItem',
  props: {
    item: {
      type: Object,
    },
  },

  data() {
    return {
      categories: {
        1: "New",
        2: "Sale",
        3: "Hot",
      },
    };
  },

  methods: {
    ...mapActions({
      getNewItem: 'Cart/addItem',
    }),
  },

  computed: {
    ...mapState({
      productApi: state => state.Catalog.productApi,
    }),

    category() {
      const { category } = this.item;
      return category ? {
        class: `product_${this.categories[category].toLowerCase()}`,
        text: this.categories[category],
      } : null;
    },

    imgUrl() {
      return this.productApi + this.item.imgUrl;
    },
  },
};
</script>