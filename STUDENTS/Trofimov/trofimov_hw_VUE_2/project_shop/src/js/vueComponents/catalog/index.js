import './style.css';
import item from '../catalogItem';

export default {
    name: 'Catalog',
    components: { item },
    
    data() {
        return {
            items: [],
            url: '/api/catalog',
            imgApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products',
            error: null,
        };
    },

    async created() {
        try {
            const data = await this.$api.send(this.url, 'GET');
            this.items = data;
        } catch(err) {
            this.error = err;
        }
    },

    template: 
        `
            <div>
                <item 
                    v-for="item of items"
                    :key="item.id" 
                    :item="item"
                    :imgApi="imgApi"
                />
            </div>
        `,
}; 