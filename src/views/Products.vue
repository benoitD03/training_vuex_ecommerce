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
          <div class="card-body text-center">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-title">
              {{ product.author.firstName }} + {{ product.author.lastName }}
            </p>
            <p class="card-title">{{ product.year }}</p>
            <p class="card-title">{{ product.price }} €</p>
            <button @click="addToCart(product)" class="btn btn-primary">
              Ajouter au panier
            </button>
            <!-- <router-link to="/oneproduct"><button @click="getOneProduct(product.id)" class="btn btn-success">Voir +</button></router-link> -->
            <button
        type="button"
        class="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        @click="getOneProduct(product.id)"
      >
        Voir +
      </button>
    
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Détails :</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <OneProduct :oneProduct="oneProduct"/>
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OneProduct from '../components/OneProduct';

export default {

  components: {
    OneProduct
  },

  created() {
    this.$store.dispatch("getProducts");
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
    oneProduct() {
      return this.$store.state.oneProduct;
    }
  },

  methods: {
    addToCart(product) {
      this.$store.dispatch("addToCart", product);
    },
    getOneProduct(id) {
      this.$store.dispatch("getOneProduct", id);
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