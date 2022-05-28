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


    async getProduct(id) {
      const method = 'GET';
      const URL = `${ url }/${ id }`;
      try {
        const data = await instance({url: URL, method});
        return data;
      }
      catch(err) {
        throw err;
      }
    }
};