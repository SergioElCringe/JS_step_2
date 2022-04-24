export default({

    el: '#app',

    data: {
       itemsCatalog: null,
	   itemsCart:    [],
	   click:        false,
       urlCatalog:   '/api/catalog',
	   urlCart:      '/api/cart',
	   productsApi:  'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products/',
	   value:        0,
	   money:        0,
    },


    methods: {
		async createCart() {
			this.click = !this.click;
		},

		
		async addItem(item) {
  			const { imgUrl, name, price, id } = item;
  			const find = this.itemsCart.find(cartItem => cartItem.id === id);
  			try {
  			  if (!find) {
  			    const newItem = await { imgUrl, name, price, id, amount: 1 };
  			    if(imgUrl){
  			    const data = await fetch(this.urlCart, {
  			      method: 'POST',
  			      headers: { "Content-Type": "application/json" },
  			      body: JSON.stringify(newItem),
  			    }).then(d => d.json());
  			    if (!data.error) {
  			      this.itemsCart.push(newItem);
  			    }
  			  }
  			  } else {
  			    const data = await fetch(this.urlCart + `/${ id }`, { 
  			      method: 'PUT',
  			      headers: { "Content-Type": "application/json" },
  			      body: JSON.stringify({value: 1}),
  			    }).then(d => d.json());
  			    if (!data.error) {
  			      find.amount++;
  			    }
  			}
			}			
  			catch(err) {
  			}
			  this.value = this.itemsCart.length;
			  this.howMoney();
},
		async deleteItem(item) {
		   const { id } = item
		      try {
		          const data = fetch(this.urlCart + `/${id}`, {
		              method: 'DELETE',
		              headers: { "Content-Type": "application/json" },
		              body: JSON.stringify({ id })
		          }).then(d => d.json());
				const find = this.itemsCart.find(cartItem => cartItem.id === id);
				const del = this.itemsCart.indexOf(find)

				this.itemsCart.splice(del, 1);
				this.value = this.itemsCart.length;
				this.howMoney();
		      } catch (err) {
		      };
		},
		async howMoney() {
			this.money = 0;
			await this.itemsCart.find((el) => {
					this.money += el.price * el.amount;
				});
		}
},
	async created() {
                const catalog = await fetch(this.urlCatalog).then(d => d.json());
                this.itemsCatalog = catalog;
				const cart = await fetch(this.urlCart).then(d => d.json());
				this.itemsCart = cart.items;
				this.value = this.itemsCart.length;
				this.howMoney();
            }
}); 