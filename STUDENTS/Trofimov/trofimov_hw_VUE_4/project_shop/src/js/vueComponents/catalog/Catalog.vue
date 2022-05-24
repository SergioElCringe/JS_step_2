<template>
    <div class='catalog' v-if='ready'>
        <CatalogItem
        v-for='item in catalog'
        :key='item.id'
        :item='item'
        :stickerTypes='stickerTypes'
        :imgURLTemplate='imgURLTemplate'
        />
    </div>
</template>

<script>
import CatalogItem from './CatalogItem.vue';
export default {
    name: 'Catalog',
    components: { CatalogItem },
    data: function () {
        return {
            catalog: [],
            stickerTypes: [],
            ready: false,
            URL: '/api/lists',
            imgURLTemplate:
                'https://raw.githubusercontent.com/MikhailErnstovich/my-ftp/master/img/',
        };
    },
    methods: {
        async getData() {
            try {
                const data = await $api.send(this.URL);
                this.stickerTypes = data.catalog.stickerTypes;
                this.catalog = data.catalog.items;
            } catch (err) {
                throw err;
            } finally {
                this.ready = !!this.catalog;
            }
        },
    },
    async created() {
        try {
            await this.getData();
        } catch (err) {
            console.warn(err);
        }
    },
};
</script>

<style>
.catalog {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.button_add {
  width: 100%;
  height: 61px;
  border: 2px solid #1b1b1b;
  background-color: #fff;
  font-size: 16px;
  font-weight: 600;
  font-family: Poppins, sans-serif;
  color: #1b1b1b;
  cursor: pointer;
  transition: all 0.2s ease;
}
.button_add:hover {
  background-color: #1b1b1b;
  color: #fff;
}
.button_add:active {
  background-color: #fff;
  color: #1b1b1b;
}
</style> 