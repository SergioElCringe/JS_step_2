// import './styles/main_styles.css'
// import './styles/my_style.css'
// import app from './js/app'
// import RequestManager from './js/components/api';
// const request = new RequestManager();
// app(request);

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
		// getProductExtraTemplate(categoryId) {
		// 	const category = categoryId ? this.getCategory(categoryId) : null;
		// 	return category ? `
		//     <div class="product_extra ${category.className}">
		//       <a href="categories.html">${category.text}</a>
		//     </div>
		//   ` : '';
		// },
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
		console.log(this.cartItems);
	}
})
