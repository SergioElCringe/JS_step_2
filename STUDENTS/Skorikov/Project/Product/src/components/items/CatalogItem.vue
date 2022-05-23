<template>
  <div class="product" v-if="hasCategory ? item.category : true">
    <div class="product_image">
      <img :src="imgUrl" />
      <div class="btn-add">Add this product</div>
    </div>
    <div class="product_extra" :class="category.class" v-if="item.category">
      <a href="categories.html">{{ category.text }}</a>
    </div>
    <div class="product_content">
      <div class="product_title">
        <router-link :to="`/product/${item.id}`">{{ item.name }}</router-link>
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
export default {
  name: 'CatalogItem',
  props: {
    item: {
      type: Object,
    },
    api: {
      type: Object,
    },
    hasCategory: {
      type: Boolean,
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

  computed: {
    category() {
      const { category } = this.item;
      return category
        ? {
            class: `product_${this.categories[category].toLowerCase()}`,
            text: this.categories[category],
          }
        : null;
    },

    imgUrl() {
      return this.api.productApi + this.item.imgUrl;
    },
  },
};
</script>