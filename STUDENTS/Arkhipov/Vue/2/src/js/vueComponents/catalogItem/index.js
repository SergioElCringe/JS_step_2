import './style.css';

export default {
  name: 'CatalogItem',
  props: ['item', 'imgApi'],
  data() {
    return {
      categories: {
        '1': 'New',
        '2': 'Hot',
        '3': 'Sale'
      },
    };
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

  template: `
    <div class="product">
      <div class="product_image"><img :src="imgApi + item.imgUrl" alt=""></div>
      <div 
        v-if="category"
        class="product_extra" 
        :class="category.class"
        >
          <a href="categories.html">{{ category.text }}</a>
      </div>
      <div class="product_content">
        <div class="product_title"><a href="product.html">{{ item.name }}</a></div>
        <div class="product_price">$ {{ item.price }}</div>
      </div>
      <div 
        class="button button_custom btn-add"
      >
        <span>Add</span>
      </div>
    </div>
  `,
};