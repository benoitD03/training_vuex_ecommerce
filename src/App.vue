<template>
  <div id="app">
    <nav class="navbar navbar-light bg-dark py-3">
      <div id="nav" class="container">
        <router-link class="navLink" to="/">Home</router-link>
        <router-link class="navLink" to="/contact">Contact</router-link>
        <router-link class="navLink" to="/admin">Admin</router-link>
        <span>
          <router-link class="navLink" to="/cart">
            <i class="fas fa-shopping-cart"></i> Panier
            {{ numberProductsInCart }}
          </router-link>
        </span>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
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
</style>
