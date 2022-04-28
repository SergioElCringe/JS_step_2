<template>
  <div class="product" v-if="item.category">
    <div class="product_image">
      <img :src="imgUrl" />
      <div class="btn-add" @click="$parent.$parent.$refs.cart.addItem(item)">Add this product</div>
    </div>
    <div class="product_extra" :class="category.class" v-if="item.category">
      <a href="categories.html">{{ category.text }}</a>
    </div>
    <div class="product_content">
      <div class="product_title">
        <a href="product.html" class="desprod">{{ item.name }}</a>
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
  name: "CatalogItem",
  props: {
    item: {
      type: Object,
    },
    api: {
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

<style>
    .products {
    width: 100%;
    background: #ffffff;
    padding-top: 99px;
    z-index: 2;
    }

    .product {
    width: 250px;
    transition: 0.3s;
    margin-left: 15px;
    margin-right: 15px;
    }

    .product_image {
    width: 100%;
    }

    .product_image img {
    max-width: 100%;
    }

    .product_content {
    width: 100%;
    padding-top: 36px;
    padding-bottom: 38px;
    }

    .product_title a {
    font-size: 18px;
    font-weight: 500;
    color: #1b1b1b;
    line-height: 1.1;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
    }

    .product_title a:hover {
    color: #e95a5a;
    }

    .product_price {
    font-size: 16px;
    font-weight: 500;
    color: #6c6a74;
    line-height: 0.75;
    margin-top: 13px;
    }

    .product_extra {
    position: absolute;
    top: 0;
    left: 54px;
    width: 66px;
    height: 36px;
    text-align: center;
    -webkit-transform-origin: top left;
    -moz-transform-origin: top left;
    -ms-transform-origin: top left;
    -o-transform-origin: top left;
    transform-origin: top left;
    transform: rotate(90deg);
    }

    .product_extra a {
    display: block;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    line-height: 36px;
    }

    .product_new {
    background: #6c6a74;
    }

    .product_sale {
    background: #e95a5a;
    }

    .product_hot {
    background: #1b1b1b;
    }

    .product:hover {
    transform: scale(1.03);
    }

    .product:hover .btn-add {
    display: block;
    position: absolute;
    transition: 0.3s;
    }

    .btn-add {
    position: relative;
    display: none;
    top: 201px;
    left: 0px;
    width: 250px;
    animation: fade 0.5s linear forwards;
    border: 2px solid #333;
    height: 50px;
    background-color: #333;
    transition: 0.3s;
    cursor: pointer;
    text-transform: uppercase;
    color: #fff;
    text-align: center;
    font-weight: 900;
    padding-top: 15px;
    transition: 0.3s;
    }

    .btn-add:hover {
    font-size: 15px;
    background-color: #333;
    transition: 0.3s;
    }

    .sale .old-price {
    margin-right: 15px;
    color: red;
    }

    .sale .new-price {
    color: green;
    }
</style>