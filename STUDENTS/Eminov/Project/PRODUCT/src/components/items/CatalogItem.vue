<template>
  <div class="product">
    <div class="product_image">
      <img :src="imgUrl" />
      <div class="btn-add" @click="addItem({ item })">Add this product</div>
    </div>
    <div class="product_extra" :class="category.class" v-if="item.category">
      <router-link :to="`/categories/${category.text.toLowerCase()}`">{{ category.text }}</router-link>
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
export default {
  name: 'CatalogItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },

    productApi: {
      type: String,
      default: () => '',
    },

    categories: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    addItem(val) {
      this.$emit('addItem', val);
    },
  },

  computed: {
    category() {
      const { category } = this.item;
      return category ? {
        class: `product_${this.categories[category].toLowerCase()}`,
        text: this.categories[category],
      } : null;
    },

    imgUrl() {
      return this.productApi + this.item.imgUrl[0];
    },
  },
};
</script>