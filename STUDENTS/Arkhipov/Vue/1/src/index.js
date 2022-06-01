const app = new Vue({
	el: '#app',

	data: {
		PRODUCT_API: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products',

		catalogItems: null,
		catalogUrl: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_2/init/PROJECT/SERVER_7/src/db/catalog.json',

		menuItems: null,
		menuUrl: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_2/init/PROJECT/SERVER_7/src/db/menu.json',

		cartItems: null,
		cartUrl: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_2/init/PROJECT/SERVER_7/src/db/cart.json',

	},

	methods: {
		async getData(url) {
			try {
				const data = await fetch(url).then(res => res.json());
				return data;
			}
			catch (err) {
				console.log('ERROR = ' + err);
				throw err;
			}
		},
		getCategory(categoryId) {
			let className, text;

			switch (categoryId) {
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
	},

	async created() {
		this.catalogItems = await this.getData(this.catalogUrl);
		this.menuItems = await this.getData(this.menuUrl);
		this.cartItems = await this.getData(this.cartUrl);
	}
})
