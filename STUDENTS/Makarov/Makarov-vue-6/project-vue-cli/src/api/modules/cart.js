import instance from '@api/core';

export const cart = {
    async getCart() {
        try {
            const data = await instance({ url:'/cart' });
            return data;
        }
        catch (err) {
            throw err;
        }
    },

    async removeItem(id) {
        try {
            const data = await instance({ method: 'DELETE', url:`/cart/${id}` });
            return data;
        }
        catch (err) {
            throw err;
        }
    },

    async addItem(idObj) {
        try {
            const data = await instance({ method: 'POST', url: `/catalog/${idObj.id}`, data: idObj});
            return data;
        }
        catch (err) {
            throw err;
        }
    },

    async incrementAmount(id, body) {
        try {
            const data = await instance({ method: 'PUT', url: `/cart/${id}`, data: body });
            return data;
        }
        catch (err) {
            throw err;
        }
    },

    async decrementAmount(id, body) {
        try {
            const data = await instance({ method: 'PUT', url: `/cart/${id}`, data: body });
            return data;
        }
        catch (err) {
            throw err;
        }
    }
}