<template>
  <div>
    <h2>{{ oneProduct.title }}</h2>
    <img :src="oneProduct.image" alt="product image">
    <p>Année de publication : {{ oneProduct.year }}</p>
    <p>Prix : {{ oneProduct.price }} €</p>
    <button @click="addToCart(oneProduct)" class="btn">
              <i class="fas fa-shopping-cart"></i> Ajouter au panier
            </button>
  </div>
</template>

<script>
export default {
  
  props: ['oneProduct'],
  methods: {
    addToCart(oneProduct) {
      this.$store.dispatch("addToCart", oneProduct);
      alert("Ajouté au panier !");
    }
  }
};
</script>

<style scoped>
img {
  width: 400px;
}
.btn {
  background: #42b983;
  font-weight: bold;
}
.btn:hover {
  color: #f1f1f1;
}
</style>