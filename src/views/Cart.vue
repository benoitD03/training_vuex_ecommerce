<template>
  <div>
    <h1 class="text-center my-5">Votre panier</h1>
    <div
      v-for="product in cart.products"
      :key="product.id"
      class="d-flex my-3"
    >
      <div class="d-flex">
        <button @click="incrementQuantity(product), getTotalProductSum(product)" class="btn btn-success">
          <i class="fas fa-plus-circle"></i>
        </button>
        <span class="my-auto mx-4">{{ product.quantity }}</span>
        <button
          @click="decrementQuantity(product), getTotalProductSum(product)"
          class="btn btn-warning text-light"
        >
          <i class="fas fa-minus-circle"></i>
        </button>
      </div>
      <div class="d-flex product">
        <img class="mx-5" :src="product.image" alt="" />
        <p class="my-auto">{{ product.title }}</p>
        <p class="my-auto mx-5">{{ getTotalProductSum(product) }} €</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalProductSum : 0
    }
  },
  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
  },
  methods: {
    incrementQuantity(product) {
      return this.$store.dispatch("addToCart", product);
    },
    decrementQuantity(product) {
      return this.$store.dispatch("removeFromCart", product);
    },
    getTotalProductSum(product) {
      this.totalProductSum = product.quantity * product.price;
      return this.totalProductSum.toFixed(2);
    },
    
  },
};
</script>

<style scoped>
img {
  width: 65px;
  height: 90px;
}
</style>