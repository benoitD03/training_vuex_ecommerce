<template>
  <div class="home">
    <h1 class="text-center my-5">Notre sélection de livres</h1>
    <Products />
  </div>
</template>

<script>
import Products from './Products';
export default {
  name: "Home",
  components: {
    Products
  },
};
</script>
