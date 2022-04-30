import instance from '@api/core';

export const catalog = {
    url: '/catalog',
    async getCatalog() {
        try {
            return await instance({ url: this.url });
        } catch (err) {
            throw err;
        };
    },
};