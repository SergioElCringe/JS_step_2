import instance from '@api/core';

const url = '/nav';

export const nav = {
  async getNav() {
    try {
      const data = await instance({ url });
      return data; 
    }
    catch(err) {
      throw err;
    }
  },
};