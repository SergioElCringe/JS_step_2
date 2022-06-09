import { catalog } from '@api';

export default {
    namespaced: true,
    state: () => ({
        catalogItems: [],
        suggestionItems: [],
        stickers: [],
    }),
    actions: {
        async getCatalog({ commit }) {
            try {
                const data = await catalog.getCatalog();
                commit('writeCatalog', data);
            }
            catch (err) {
                throw err;
            }
        },
        async getHomeSuggestion({ commit }) {
            try {
                const data = await catalog.getHomeSuggestion();
                commit('writeSuggestion', data);
            } 
            catch (err) {
                throw err;
            }
        },
        async getProduct({ commit }, id) {
            try {
                const data = await catalog.getProduct(id);
                commit('writeProduct', data);
            } 
            catch (err) {
                throw err;
            }
        }
    },
    mutations: {
        writeCatalog(state, data) {
            state.catalogItems = data.items;
            state.stickers = data.stickerTypes;
        },
        writeProduct(state, data) {
            state.productData = data;
        },
        writeSuggestion(state, data) {
            state.suggestionItems = data.items;
            state.stickers = data.stickerTypes;
        }
    },
    getters: {
        getItems(state) {
            return state.catalogItems; 
        },
        getSuggestion(state) {
            return state.suggestionItems; 
        },
        getStickers(state) {
            return state.stickers;
        },
        getProduct(state) {
            return state.productData;
        }
    }
}
