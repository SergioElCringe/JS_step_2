import instance from '@api/core';

export const catalog = {
    url: '/catalog',
    async increment(params = {}) {
        try {
            return await instance({ url: this.url, params });
        } catch (err) {
            throw err;
        };
    },
};