import "./style.css";
import catalog__item from "./catalog__item";

export default {
    name: "catalog",
    components: { catalog__item },
    data: function () {
        return {
            catalog: [],
            stickerTypes: [],
            ready: false,
            URL: "/api/lists",
            imgURLTemplate: "https://raw.githubusercontent.com/MikhailErnstovich/my-ftp/master/img/"
        }
    },
    methods: {
        async getData() {
            try {
                const data = await this.$api.send(this.URL);
                this.stickerTypes = data.catalog.stickerTypes;
                this.catalog = data.catalog.items;
            } catch (err) {
                throw err;
            } finally {
                this.ready = !!this.catalog;
            }
        },
    },
    template: `
        <div class="catalog" v-if="ready">
            <catalog__item
                v-for="item in catalog"
                :key="item.id"
                :item="item"
                :stickerTypes="stickerTypes"
                :imgURLTemplate="imgURLTemplate"
            />
        </div>
    `,
    async created() {
        try {
            await this.getData();
        } catch (err) {
            console.warn(err);
        }
    }
}

