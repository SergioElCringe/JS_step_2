import './style.css';
import item from '../items';

export default {
    name: 'categories',
    components: { item },
    data() {
        return {
            items: [],
            api: {
                productApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products',
                url: '/api/catalog'
            },
            actions: {
                type: 'catalog'
            }
        };
    },
    
    async created() {
        try {
            this.items = await this.$api.send(this.api.url, 'GET');
        } catch (err) {
            console.warn(err);
        };
    },

    template: `
        <div class="product_grid">
            <item v-for="item of items"
            :key="item.key"
            :item="item"
            :api="api"
            :actions="actions"/>
        </div>
    `
}