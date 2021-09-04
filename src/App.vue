<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/admin">Admin</router-link> 
      <span><router-link to="/cart"><i class="fas fa-shopping-cart"></i> Panier {{ numberProductsInCart }}</router-link></span>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    numberProductsInCart() {
      return this.$store.getters.getNumberProductsInCart;
    }
  }
}
</script>
<style scoped>
span {
  float: right;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
