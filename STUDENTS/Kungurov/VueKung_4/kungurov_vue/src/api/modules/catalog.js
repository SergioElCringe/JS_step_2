import instance  from '@api/core';
const url = '/catalog';
export const catalog  = {
    async getCatalog() {
        try{
            const data = await instance({url});
            return data;
        }
        catch(err) {
            throw err;
        }
    },
};