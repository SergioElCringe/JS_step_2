import instance from '@api/core';
const url = '/cart';

export const cart = {
    async getCart() {
        try {
            const data = await instance({ url });
            return data;
        }
        catch (err) {
            throw err;
        }
    },
    async getCartPost(obj, method = 'POST') {
        try {
            const data = await instance({ url, obj, method });
            return data;

        }
        catch (err) {
            throw err;
        }
    },
    async getCartPUT(obj, method = 'PUT') {
        try {
            const data = await instance({ url: '/cart/:id', method, obj });
            return data;
        }
        catch (err) {
            throw err;
        }
    },
    async getCartDelete(obj, method = 'DELETE') {
        try {
            const data = await instance({ url: '/cart/:id', method, obj });
            return data;
        }
        catch (err) {
            throw err;
        }
    }
}; 