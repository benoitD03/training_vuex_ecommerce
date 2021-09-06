<template>
  <div>
    <h2>{{ oneProduct.title }}</h2>
    <h3>{{ oneProduct.author.firstName }} {{ oneProduct.author.lastName }}</h3>
    <img :src="oneProduct.image" alt="product image">
    <p>Année de publication : {{ oneProduct.year }}</p>
    <p>Prix : {{ oneProduct.price }} €</p>
    <button @click="addToCart(oneProduct)" class="btn btn-primary">
              Ajouter au panier
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
</style>