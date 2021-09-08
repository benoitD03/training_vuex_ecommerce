<template>
  <div>
    <h1 class="text-center my-5">Notre sélection de livres</h1>
    <div class="text-center my-5">
      <input
        v-model="searchKey"
        type="search"
        id="search"
        placeholder="Rechercher..."
        autocomplete="off"
      />
      <span v-if="searchKey && filteredList.length >= 1" class="ml-2">
        {{ filteredList.length }} Résultat<span v-if="filteredList.length >= 2"
          >s</span
        >
      </span>
    </div>

    <div class="allCards d-flex flex-wrap">
      <div
        v-for="product in filteredList"
        :key="product.id"
        class="card m-3 mb-5"
        style="width: 18rem"
      >
        <div class="card-body text-center">
          <h5 class="card-title">
            {{ product.title }} <span v-if="product.top">⭐️</span>
          </h5>
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
                  <h5 class="modal-title text-center" id="exampleModalLabel">
                    Informations supplémentaires
                  </h5>
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
  </div>
</template>

<script>
import OneProduct from "../components/OneProduct";

export default {
  components: {
    OneProduct,
  },
  data() {
    return {
      searchKey: "",
    };
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
    filteredList() {
      return this.products.filter(product => {
        return product.title.toLowerCase().includes(this.searchKey.toLowerCase());
      });
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
  box-shadow: 2px 2px 2px rgba(51, 51, 51, 0.363);
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
  background: #42b983;
}
#search {
  width: 75%;
  height: 50px;
  padding: 0 15px;
  border-radius: 12px;
  border: 2px solid rgba(51, 51, 51, 0.835);
}
#search:focus {
  outline: none;
  border: 2px solid #42b983;
}
</style>