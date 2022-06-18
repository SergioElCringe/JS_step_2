import instance from '@api/core';

const url = '/catalog';

export const catalog = {
  async getCatalog() {
    try {
      const data = await instance({ url });
      return data; 
    }
    catch(err) {
      throw err;
    }
  },
  async getProduct(id) {
    try {
      const data = await instance({ url: url + '/' + id });
      return data; 
    }
    catch(err) {
      throw err;
    }
  },
  async getHomeSuggestion() {
    try {
      const data = await instance({ url: '/suggestion' });
      return data; 
    }
    catch(err) {
      throw err;
    }
  },
  async getPagination(num, size, category) {
    try {
      const data = await instance({ url: `/page/${num}/${size}/${category}` });
      return data; 
    }
    catch(err) {
      throw err;
    }
  },
};