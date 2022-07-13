import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: [],
    cart: [],
  },

  getters: {
    cartCount: (state) => {
      if (!state.cart.length) return 0;
      return state.cart.reduce((ac, next) => ac + next.quantity, 0);
    },
    cartTotal: (state) => {
      if (!state.cart.length) return 0;
      return state.cart.reduce((ac, next) => ac + next.quantity * next.price, 0);
    },
  },

  mutations: {
    allproducts(state, fetchdata) {
      state.products = fetchdata;
    },
    addToCart(state, item) {
      const itemfound = state.cart.find((el) => el.id === item.id);
      if (itemfound) {
        itemfound.quantity += item.quantity;
      } else state.cart.push(item);
    },
    removeAllFromCart(state, item) {
      state.cart = state.cart.filter((el) => el.id !== item.id);
    },
    addOneToCart(state, item) {
      const itemfound = state.cart.find((el) => el.id === item.id);
      if (itemfound) {
        itemfound.quantity += 1;
      } else state.cart.push(item);
    },
    removeOneFromCart(state, item) {
      const index = state.cart.findIndex((el) => el.id === item.id);
      if (state.cart[index].quantity !== 1) {
        state.cart[index].quantity -= 1;
      } else {
        state.cart.splice(index, 1);
      }
    },
  },

  actions: {
    fetchData({ commit }) {
      try {
        axios.get('https://fakestoreapi.com/products/').then((res) => {
          commit('allproducts', res.data);
        });
      } catch (error) {
        alert('error'); // eslint-disable-line no-alert
      }
    },
  },
  modules: {},
});
