<template>
  <div>
    <table class="table">
      <thead>
        <tr class="table-primary">
          <th scope="col">#id</th>
          <th scope="col">Titre</th>
          <th scope="col">Auteur</th>
          <th scope="col">Edition</th>
          <th scope="col">Année</th>
          <th scope="col">Couverture</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product) in products" :key="product.id">
          <th scope="row">{{ product.id }}</th>
          <td>{{ product.title }}</td>
          <td>{{ product.author.firstName }} {{ product.author.lastName }}</td>
          <td>{{ product.publisher }}</td>
          <td>{{ product.year }}</td>
          <td>
            <img
              :src="product.image"
            />
          </td>
        </tr>
      </tbody>
    </table>
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
    }
  }
};
</script>

<style scoped>
img {
  width: 50px;
  height: 80px;
}
</style>