import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from '../views/Contact.vue';
import Products from "../views/admin/Products.vue";
import Cart from '../views/Cart.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/admin",
    name: "Products",
    component: Products
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  }
  // {
  //   path: "/admin/product-add",
  //   name: "productAdd",
  //   component: productAdd
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
