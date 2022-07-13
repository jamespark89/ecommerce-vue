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
  },

  actions: {
    fetchData({ commit }) {
      try {
        axios.get('https://fakestoreapi.com/products/').then((res) => {
          commit('allproducts', res.data);
          console.log(res.data);
        });
      } catch (error) {
        alert('error'); // eslint-disable-line no-alert
      }
    },
  },
  modules: {},
});
