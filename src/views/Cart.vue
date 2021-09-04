<template>
  <div>
      <h1 class="text-center my-5">Votre panier</h1>
    <div v-for="product in cart.products" :key="product.id" class="d-flex product my-3">
      <p class="my-auto">{{ product.quantity }}</p>
      <img :src="product.image" alt="" />
      <p class="my-auto">{{ product.title }}</p>
      <p class="my-auto">{{ product.price }} €</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
  },
};
</script>

<style scoped>
.product {
    justify-content: space-between;
}
img {
    width: 65px;
    height: 90px;
}
</style>