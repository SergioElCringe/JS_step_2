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
            try {
                const data = await cart.getCart();
                commit('setCartItems', data);
                commit('howMoney');
            }
            catch (err) {
                console.warn(err);
            }
        },

        async addItem({ commit, state }, item) {
            const { imgUrl, name, price, id, Productvalue } = item;
            const find = this.state.Cart.items.find(cartItem => cartItem.id === id);
            try {
                if (!find) {
                    const newItem = await { imgUrl, name, price, id, amount: (!Productvalue ? 1 : Productvalue) };
                    if (imgUrl) {
                        const data = cart.getCartPost(newItem);
                        await this.state.Cart.items.push(newItem);
                    }
                } else {
                    const data = await cart.getCartPUT(item);
                    if (!data.error) {
                        if (!Productvalue) {
                            find.amount++;
                        } else {
                            find.amount = find.amount + Productvalue;
                        }
                    }
                }
            }
            catch (err) {
                console.warn(err);
            }
            commit('howMoney');
        },

        async deleteItem({ commit }, item, url) {
            const { id } = item;
            const find = this.state.Cart.items.find(cartItem => cartItem.id === id);
            const del = this.state.Cart.items.indexOf(find);
            try {
                const data = await cart.getCartDelete(item);
                const find = this.state.Cart.items.find(cartItem => cartItem.id === id);
                commit('DelCart', del);
                commit('howMoney');
            } catch (err) {
                console.warn(err);
            }
        },
    },

    mutations: {
        setCartItems(state, items) {
            state.items = items.items;
        },
        DelCart(state, del) {
            this.state.Cart.items.splice(del, 1);
        },
        async howMoney() {
            this.state.Cart.money = 0;
            await this.state.Cart.items.find((el) => {
                this.state.Cart.money += el.price * el.amount;
            });
        }
    },

    getters: {
        itemsCheck(state) {
            return state.items;
        },
        moneyCheck(state) {
            return state.money;
        }
    },
};