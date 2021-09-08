import Vue from "vue";
import Vuex from "vuex";
import productService from '../services/productService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    errors: [],
    cart: [],
    oneProduct : []
  },
  mutations: {
    GET_PRODUCTS(state, allProducts) {
      state.products = allProducts;
    },
    GET_ONE_PRODUCT(state, product) {
      state.oneProduct = product;
    },
    GET_ERROR(state, error) {
      state.errors = [error, ...state.errors];
    },
    CREATE_PRODUCT(state, product) {
      state.products = [product, ...state.products];
    },
    MODIFY_PRODUCT(state, product) {
      state.products = [product, ...state.products];
    },
    DELETE_PRODUCT(state, product) {
      const index = state.products.findIndex(item => item.id === product.id);
      state.products = state.products.splice(state.products[index], 1);
    },
    ADD_TO_CART(state, cartLocalStorage) {
      state.cart = cartLocalStorage;
    },
    GET_CART(state, cartLocalStorage) {
      state.cart = cartLocalStorage;
    },
    REMOVE_FROM_CART(state, cartLocalStorage) {
      state.cart = cartLocalStorage;
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
    getOneProduct({ commit }, id) {
      productService.getOneProduct(id)
        .then(res => {
          commit ("GET_ONE_PRODUCT", res.data)
          console.log(res.data);
        })
        .catch(err => console.log(err))
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
    },
    modifyProduct({ commit }, product) {
      productService.modifyProduct(product, product.id)
        .then(() => {
          commit("MODIFY_PRODUCT", product)
        })
        .catch(err => console.log(err))
    },
    deleteProduct({ commit }, id) {
      productService.deleteProduct(id)
        .then(res => {
          commit("DELETE_PRODUCT", res.data)
        })
        .catch(err => console.log(err))
    },
    addToCart({ commit }, product) {
      productService.addToCart(product)
        .then(() => {
          commit("ADD_TO_CART", JSON.parse(localStorage.getItem("vuex-training-cart")))
        })
        .catch(err => {
         console.log(err);
        })
    },
    getCart({ commit }) {
      commit("GET_CART", JSON.parse(localStorage.getItem("vuex-training-cart")));
    },
    removeFromCart({ commit }, product) {
      productService.removeFromCart(product)
        .then(() => {
          commit("REMOVE_FROM_CART", JSON.parse(localStorage.getItem("vuex-training-cart")))
        })
        .catch(err => {
          console.log(err);
         })
    }
  },
  getters: {
    getCart(state) {
      return state.cart;
    },
    getNumberProductsInCart(state) {
      if (!state.cart.products) return 0;
      //Sur chaque élément de state.cart.products, on prend sa propriété quantity et on l'ajoute dans numberProducts.
      const numberProducts = state.cart.products.reduce((acc, curr) => {
        return acc + curr.quantity;
      },0);
      return numberProducts;
    },
    getTotalPrice(state) {
      if (!state.cart.products) return 0;
      const products = state.cart.products;
            let totalPrice = products.reduce((acc, curr) => {
              return acc + (curr.quantity * curr.price);
            }, 0);
            console.log(totalPrice);
            return totalPrice.toFixed(2);
    }
  }
});
