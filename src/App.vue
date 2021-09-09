<template>
  <div id="app">
    <nav class="navbar navbar-light bg-dark py-3">
      <div id="nav" class="container">
        <router-link class="navLink" to="/">Home</router-link>
        <router-link class="navLink" to="/contact">Contact</router-link>
        <router-link class="navLink" to="/admin">Admin</router-link>
        <span>
          <router-link class="navLink" to="/cart">
            <i class="fas fa-shopping-cart"></i> Panier ({{
              numberProductsInCart
            }})
          </router-link>
        </span>
      </div>
    </nav>
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <router-view />
    </transition>
    <footer class="bg-dark text-light text-center text-lg-start">
      <div class="text-center p-5" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2021
        <a class="text-light" href="https://benoit-durand.fr" target="_blank">Benoit Durand</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getCart");
  },
  computed: {
    numberProductsInCart() {
      return this.$store.getters.getNumberProductsInCart;
    },
  },
};
</script>
<style scoped>
span {
  float: right;
}
#nav {
  padding: 30px;
}

#nav {
  font-weight: bold;
}
.navLink {
  text-decoration: none;
  color: #f1f1f1;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
a {
  text-decoration: none;
}
</style>
