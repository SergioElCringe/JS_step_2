export default {
  el: '#app',
  data: {
    itemsCatalog: null,
    itemsCart: [],
    urlCatalog: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_2/init/PROJECT/SERVER_7/src/db/catalog.json',
    productsApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products/',
    open: false,
  },
  methods: {
    addItem(item) {
      const { imgUrl, name, price, id, amount = 1 } = item;
      const find = this.itemsCart.find(cartItem => cartItem.id === id);

      if (!find) {
        const newItem = { imgUrl, name, price, id, amount: 1 };
        this.itemsCart.push(newItem);
      } else {
        find.amount++;
      }
      console.log(this.itemsCart);
    },

    deleteItem(item) {
      const { id, amount = 1 } = item;
      const find = this.itemsCart.find(cartItem => cartItem.id === id);
      if (find.amount > 1) {
        find.amount--;
      }
      else {
        this.itemsCart = this.itemsCart.filter(el => el.id !== id);
      }
    },

    getCategory(category) {
      let className, text;

      switch (category) {
        case 1: {
          className = 'product_new';
          text = 'New';
          break;
        }

        case 2: {
          className = 'product_hot';
          text = 'Hot';
          break;
        }

        default: {
          className = 'product_sale';
          text = 'Sale';
        }
      };
      return { className, text };
    },

    toggleCart() {
      this.open = !this.open;
    }
  },
  async created() {
    try {
      const catalog = await fetch(this.urlCatalog).then(d => d.json());
      this.itemsCatalog = catalog;
    } catch (err) {
      console.warn(err);
    };
  }
}





