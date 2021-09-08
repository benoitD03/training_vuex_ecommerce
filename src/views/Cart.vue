<template>
  <div class="container">
    <h1 class="text-center my-5">Votre panier</h1>

    <table class="table">
      <thead>
        <tr class="head">
          <th scope="col">Quantité</th>
          <th scope="col">Couverture</th>
          <th scope="col">Titre</th>
          <th scope="col">Prix</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in cart.products" :key="product.id">
          <!-- <th scope="row">{{ product.id }}</th> -->
          <td>
            <div class="d-flex quantity mt-4">
              <button
                @click="incrementQuantity(product)"
                class="btn"
              >
                <i class="fas fa-plus-circle"></i>
              </button>
              <p class="my-auto">{{ product.quantity }}</p>
              <button
                @click="decrementQuantity(product)"
                class="btn"
              >
                <i v-if="product.quantity > 1" class="fas fa-minus-circle"></i>
                <i v-else class="fas fa-trash-alt"></i>
              </button>
            </div>
          </td>
          <td>
            <img :src="product.image" />
          </td>
          <td>{{ product.title }}</td>
          <td>{{ product.price }} €</td>
        </tr>
      </tbody>
    </table>
    <h4 v-if="totalPrice === 0" class="text-center">
      Il n'y a aucun article dans votre panier
    </h4>
    <h4 v-else class="text-center">Prix total ({{ numberProductsInCart }} articles) : {{ totalPrice }} €</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalProductSum: 0,
    };
  },
  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
    totalPrice() {
      return this.$store.getters.getTotalPrice;
    },
    numberProductsInCart() {
      return this.$store.getters.getNumberProductsInCart;
    },
  },
  methods: {
    incrementQuantity(product) {
      return this.$store.dispatch("addToCart", product);
    },
    decrementQuantity(product) {
      return this.$store.dispatch("removeFromCart", product);
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
  width: 42px;
  border-radius: 50%;
  background: #333;
  color: #f1f1f1;
  border: 2px solid #333;
}
.btn:hover {
  color: #42b983;
}
.quantity p{
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  padding: 6px 15px;
  margin-left: -5px;
  margin-right: -5px;
}
</style>