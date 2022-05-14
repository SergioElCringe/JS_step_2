import './style.css';

export default {
	name: 'navigation',
	data() {
		return {
			items: [],
			url: '/api/menu',
			imgApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products',
			error: null,
		}
	},
	async created() {
		try {
			const data = await this.$api.send(this.url, 'GET');
			this.items = data;
		}
		catch (err) {
			this.error = err;
			console.log('ERROR NAVIGATION');

		}
	},
	template: `
		<ul>
			<li v-for="item of items" class="hassubs">
				<a :href="item.link">{{item.text}}
					<ul v-if=item.items>
						<li v-for="subitem of item.items">
							<a :href="subitem.link">{{subitem.text}}</a>
						</li>
					</ul>
				</a>
			</li>
		</ul>
	`
}