<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/admin">Admin</router-link> 
      <span><i class="fas fa-shopping-cart"></i> Panier</span>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
span {
  float: right;
}
</style>
