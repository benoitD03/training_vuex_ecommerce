<template>
  <div>
    <h1 class="text-center my-5">Votre panier</h1>
    <div
      v-for="product in cart.products"
      :key="product.id"
      class="container d-flex my-5 pb-5"
    >
      <div class="d-flex quantity my-auto">
        <button @click="incrementQuantity(product), getTotalProductSum(product)" class="btn">
          <i class="fas fa-plus-circle"></i>
        </button>
        <span class="my-auto mx-4">{{ product.quantity }}</span>
        <button
          @click="decrementQuantity(product), getTotalProductSum(product)"
          class="btn"
        >
          <i v-if="product.quantity > 1" class="fas fa-minus-circle"></i>
          <i v-else class="fas fa-trash-alt"></i>
        </button>
      </div>
      <!-- <div class="d-flex product"> -->
        <p class="my-auto">{{ product.title }}</p>
        <img class="mx-5" :src="product.image" alt="" />
        <p class="my-auto mx-5">{{ getTotalProductSum(product) }} €</p>
      <!-- </div> -->
    </div>
    <h4 v-if="totalPrice === 0" class="text-center">Il n'y a aucun article dans votre panier</h4>
    <h4 v-else class="text-center">Prix total : {{ totalPrice }} €</h4>
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
    totalPrice() {
      return this.$store.getters.getTotalPrice;
    }
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
.btn {
  height: 42px;
  border-radius: 12px;
  background: #333;
  color: #f1f1f1;
  border: 2px solid #333;
}
.btn:hover {
  color: #42b983;
}
.container {
  border-bottom: 1px solid #333;
  justify-content: space-between;
}
.quantity {
  border: 1px solid #333;
  height: 42px;
  border-radius: 13px;
}
</style>