import instance from '@api/core';

export const cart = {
    url: '/cart',
    async getCart() {
        try {
            return await instance({ url: this.url });
        } catch (err) {
            throw err;
        };
    },

    async addItem(params) {
        const method = 'POST';
        try {
            return await instance({ url: this.url, method, params });
        } catch (err) {
            throw err;
        };
    },

    async incrementAmount(params) {
        const method = 'PUT';
        try {
            return await instance({ url: this.url, method, params });
        } catch (err) {
            throw err;
        };
    },

    async deleteItem(params) {
        const method = 'DELETE';
        try {
            return await instance({ url: this.url, method, params });
        } catch (err) {
            throw err;
        };
    },
};