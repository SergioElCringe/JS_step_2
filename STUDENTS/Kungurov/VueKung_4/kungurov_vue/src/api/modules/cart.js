import instance  from '@api/core';

const url = '/cart';
export const cart  = {
    async getCart() {
        try{
            const data = await instance({url});
            return data;
        }
        catch(err) {
            throw err;
        }
    },
    async getCartPost(obj , method= 'POST') {
        try{
            const data = await instance({url} , obj);
            console.log(obj)
            return data;
        }
        catch(err) {
            throw err;
        }
    },
};