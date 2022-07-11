import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: [],
  },
  getters: {
    getProducts: (state) => state.products,
  },
  mutations: {
    allproducts(state, fetchdata) {
      state.products = fetchdata;
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
