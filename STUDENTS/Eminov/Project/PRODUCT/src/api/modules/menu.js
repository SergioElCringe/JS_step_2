import instance from '@api/core';

export const menu = {
    url: '/menu',
    async increment() {
        try {
            return await instance({ url: this.url });
        } catch (err) {
            throw err;
        };
    },
};