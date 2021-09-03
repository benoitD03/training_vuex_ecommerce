<template>
  <div class="d-flex flex-wrap">
    <div
      v-for="product in products"
      :key="product.id"
      class="card m-3"
      style="max-width: 540px; width: 500px"
    >
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="product.image" class="img-fluid rounded-start" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-title">
              {{ product.author.firstName }} + {{ product.author.lastName }}
            </p>
            <p class="card-title">{{ product.year }}</p>
            <p class="card-title">{{ product.price }} €</p>
            <button class="btn btn-primary">Ajouter au panier</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>

<style scoped>
img {
    width: 200px;
    height: 250px;
}
</style>