<template>
  <div class="allCards d-flex flex-wrap">
    <div
      v-for="product in products"
      :key="product.id"
      class="card m-3 mb-5"
      style="width: 18rem"
    >
      <div class="card-body text-center">
        <h5 class="card-title">{{ product.title }}</h5>
        <img :src="product.image" class="img-fluid rounded-start mt-3" />
        <p class="card-text mt-3">
          <b>{{ product.price }} €</b>
        </p>
        
        <div class="buttonsCard">
        <button
          type="button"
          class="btn oneProductBtn mb-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          @click="getOneProduct(product.id)"
        >
          <i class="fas fa-file-alt"></i> Détails
        </button>

        <button @click="addToCart(product)" class="btn addCartBtn">
          <i class="fas fa-shopping-cart"></i> Ajouter au panier
        </button>

        </div>
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
                <h5 class="modal-title text-center" id="exampleModalLabel">Informations supplémentaires</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <OneProduct :oneProduct="oneProduct" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OneProduct from "../components/OneProduct";

export default {
  components: {
    OneProduct,
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
    },
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
  width: 100px;
  height: 150px;
}
.card {
  border-radius: 10px;
  box-shadow:2px 2px 2px rgba(51, 51, 51, 0.363);

}
.allCards {
  justify-content: center;
}
.buttonsCard {
  display: flex;
  flex-direction: column;
}
.oneProductBtn {
  background: #333;
  font-weight: bold;
  color: #f1f1f1;
}
.oneProductBtn:hover {
  color: #42b983;
}
.addCartBtn {
  background: #42b983;
  font-weight: bold;
}
.addCartBtn:hover {
  color: #f1f1f1;
}
.modal-header {
  background: #42b983;;
}
</style>