import Vue from "vue";
import Vuex from "vuex";
import productService from '../services/productService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    GET_PRODUCTS(state, allProducts) {
      state.products = allProducts;
    },
    CREATE_PRODUCT(state, product) {
      state.products = [product, ...state.products];
    }
  },
  actions: {
    getProducts({ commit }) {
      productService.getProduct()
        .then(res => {
          commit("GET_PRODUCTS", res.data)
        })
        .catch(err => console.log(err))
    },
    createProduct({ commit }, product) {
      productService.createProduct(product)
        .then(() => {
          commit("CREATE_PRODUCT", product)
        })
    }
  },
});
