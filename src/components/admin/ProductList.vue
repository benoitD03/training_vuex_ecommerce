<template>
  <div>
    <table class="table">
      <thead>
        <tr class="head">
          <th scope="col">#id</th>
          <th scope="col">Couverture</th>
          <th scope="col">Titre</th>
          <th scope="col">Auteur</th>
          <th scope="col">Edition</th>
          <th scope="col">Année</th>
          <th scope="col">Prix</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <th scope="row">{{ product.id }}</th>
          <td>
            <img :src="product.image" />
          </td>
          <td>{{ product.title }}</td>
          <td>{{ product.author.firstName }} {{ product.author.lastName }}</td>
          <td>{{ product.publisher }}</td>
          <td>{{ product.year }}</td>
          <td>{{ product.price }} €</td>
          <td>
            <button
              type="button"
              class="btn btnModify"
              data-bs-toggle="modal"
              data-bs-target="#examplModal"
              @click="getOneProduct(product.id)"
            >
              <i class="fas fa-tools"></i>
            </button>
            <div
              class="modal fade"
              id="examplModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Modification d'un produit
                    </h5>
                    <button
                      type="button"
                      class="btn btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <ModifyForm :oneProduct="oneProduct" />
                  </div>
                </div>
              </div>
            </div>
            <button @click="deleteProduct(product.id)" class="btn btn-danger">
              <i class="fas fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ModifyForm from "./modifyForm";
export default {
  components: {
    ModifyForm,
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
    deleteProduct(product) {
      const confirmation = confirm(
        "Voulez vous supprimer cet article de la boutique ?"
      );
      if (confirmation) {
        this.$store.dispatch("deleteProduct", product);
        window.location.href = "/admin";
      }
    },
    getOneProduct(id) {
      this.$store.dispatch("getOneProduct", id);
    },
  },
};
</script>

<style scoped>
img {
  width: 50px;
  height: 80px;
}
.head {
  background-color: #42b983;
}
.btnModify {
  background: #333;
  color: #f1f1f1;
  margin-right: 5px;
}
.btnModify:hover {
  color: #42b983;
}
.modal-header {
  background: #42b983;
}
</style>