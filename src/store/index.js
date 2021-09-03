import Vue from "vue";
import Vuex from "vuex";
import productService from '../services/productService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    errors: []
  },
  mutations: {
    GET_PRODUCTS(state, allProducts) {
      state.products = allProducts;
    },
    GET_ERROR(state, error) {
      state.errors = [error, ...state.errors];
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
        .catch(err => {
          const error = {
            date : new Date(),
            message: `Récupération des produits échouée : ${err.message}`
          }
          commit("GET_ERROR", error);
        })
    },
    createProduct({ commit }, product) {
      productService.createProduct(product)
        .then(() => {
          commit("CREATE_PRODUCT", product)
        })
        .catch(err => {
          const error = {
            date : new Date(),
            message: `Récupération des produits échouée : ${err.message}`
          }
          commit("GET_ERROR", error);
        })
    }
  },
});
