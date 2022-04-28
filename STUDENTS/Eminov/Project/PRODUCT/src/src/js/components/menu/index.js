import './style.css';
import item from '../items';

export default {
    name: 'menunavigation',
    components: { item },

    data() {
        return {
            items: [],
            api: {
                menuApi: 'https://raw.githack.com/SergioElCringe/JS_step_1/main/BASE__PROJECT',
                url: '/api/menu'
            },
            actions: {
                type: 'menunavigation'
            }
        };
    },

    async created() {
        try {
            this.items = await this.$api.send(this.api.url, 'GET');
        } catch (err) {
            console.log(err);
        };
    },
    
    template: `
        <ul>
            <item 
            v-for="item of items"
            :key="item.id"
            :item="item"
            :api="api"
            :actions="actions"
            />    
        </ul>    
    `
}