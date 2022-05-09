import { cart } from "@/api";

export default {
  namespaced: true,
  state: () => ({
    items: [],
    urlCart: '/api/cart',
    money: 0,
  }),

  actions: {
      async getCart({ commit }, url) {
          try{
            const data = await cart.getCart();
          commit('setCartItems', data);
          console.log(this.state.Cart.items)
          }
          catch(err) {
              console.log(err)
          }
      },

//getCartPost
      async addItem({ commit }, item ) {
          const { imgUrl, name, price, id } = item;
          const find = this.state.Cart.items.find(cartItem => cartItem.id === id);
          try {
            if (!find) {
              const newItem = await { imgUrl, name, price, id, amount: 1 };
              if(imgUrl){
                const data = await cart.getCartPost(newItem);
            //const data = await $api.send(this.state.Cart.urlCart, 'POST', newItem);
              if (!data.error) {
                  this.state.Cart.items.push(newItem);
              }
            }
            } else {
            const data = await $api.send(this.state.Cart.urlCart, 'PUT', { value: 1 }, id);
              if (!data.error) {
                find.amount++;
              }
          }
        }			
          catch(err) {
              console.warn(err)
          }
          commit('howMoney');
      },

      async deleteItem({ commit }, item) {
          const { id } = item
          const find = this.state.Cart.items.find(cartItem => cartItem.id === id);
    const del = this.state.Cart.items.indexOf(find)
             try {
               const data = await $api.send(this.state.Cart.urlCart + `/${del}`, 'DELETE', {id});
               const find = this.state.Cart.items.find(cartItem => cartItem.id === id);
               commit('DelCart' , del);
               commit('howMoney');
             } catch (err) {
             };
       },
  }, 

  mutations: {
      setCartItems(state, items) {
          state.items = items.items;
        },
      DelCart(state , del) {
          this.state.Cart.items.splice(del,1)
      },
      async howMoney() {
    this.state.Cart.money = 0;
    await this.state.Cart.items.find((el) => {
              this.state.Cart.money += el.price * el.amount;
              console.log(this.state.Cart.money)
      });
  }
  },

  getters: {
      itemsCheck(state) {
          return state.items
      },
      moneyCheck(state) {
          return state.money
      }
  },
}