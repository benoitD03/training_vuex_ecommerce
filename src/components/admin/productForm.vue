<template>
  <form @submit.prevent="create">
  <div class="mb-3">
    <label for="id" class="form-label">identifiant</label>
    <input type="number" class="form-control" id="id" v-model="book.id">
  </div>

  <div class="mb-3">
    <label for="image" class="form-label">URL de l'image</label>
    <input type="text" class="form-control" id="image" v-model="book.image">
  </div>

  <div class="mb-3">
    <label for="title" class="form-label">Titre</label>
    <input type="text" class="form-control" id="title" v-model="book.title">
  </div>

  <div class="mb-3 d-flex">
    <label for="authorFirstName" class="form-label">Prénom Auteur</label>
    <input type="text" class="form-control" id="authorFirstName" v-model="book.author.firstName">
    <label for="authorLastName" class="form-label">Nom Auteur</label>
    <input type="text" class="form-control" id="authorLastName" v-model="book.author.lastName">
  </div>

  <div class="mb-3">
    <label for="publisher" class="form-label">Edition</label>
    <input type="text" class="form-control" id="publisher" v-model="book.publisher">
  </div>

  <div class="mb-3">
    <label for="year" class="form-label">Année</label>
    <input type="text" class="form-control" id="year" v-model="book.year">
  </div>

  <div class="mb-3">
    <label for="price" class="form-label">Prix</label>
    <input type="text" class="form-control" id="price" v-model="book.price">
  </div>
 
 
  <button type="submit" class="btn btn-primary">Valider</button>

</form>
</template>

<script>
export default {
    data() {
    return {
      book: {
        title: "",
        author: {
          firstName: "",
          lastName: "",
        },
        publisher: "",
        year: "",
        price: "",
        image: "",
      },
    };
  },
    methods: {
        create() {
            console.log(this.book);
            this.$store.dispatch("createProduct", this.book);
            window.location.href="http://localhost:8080/admin";
        }
    }
}
</script>

<style>

</style>