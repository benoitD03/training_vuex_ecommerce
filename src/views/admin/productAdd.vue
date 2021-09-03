<template>
  <div>
    
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Ajouter un produit
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
            <h5 class="modal-title" id="exampleModalLabel">Ajout d'un produit</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <ProductForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductForm from "../../components/admin/productForm";
export default {
  components: {
    ProductForm,
  },
};
</script>

<style>
</style>