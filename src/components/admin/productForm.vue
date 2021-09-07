<template>
  <form @submit.prevent="create">
  <div class="mb-3">
    <label for="id" class="form-label">identifiant</label>
    <input type="number" class="form-control" id="id" v-model="book.id" required>
  </div>

  <div class="mb-3">
    <label for="image" class="form-label">URL de l'image</label>
    <input type="text" class="form-control" id="image" v-model="book.image">
  </div>

  <div class="mb-3">
    <label for="title" class="form-label">Titre</label>
    <input type="text" class="form-control" id="title" v-model="book.title" required>
  </div>

  <div class="mb-3">
    <label for="authorFirstName" class="form-label">Prénom auteur</label>
    <input type="text" class="form-control" id="authorFirstName" v-model="book.author.firstName" required>
  </div>
  
  <div class="mb-3">
    <label for="authorLastName" class="form-label">Nom Auteur</label>
    <input type="text" class="form-control" id="authorLastName" v-model="book.author.lastName" required>
  </div>
  
  <div class="mb-3">
    <label for="publisher" class="form-label">Edition</label>
    <input type="text" class="form-control" id="publisher" v-model="book.publisher">
  </div>

  <div class="mb-3">
    <label for="year" class="form-label">Année de publication</label>
    <input type="text" class="form-control" id="year" v-model="book.year">
  </div>

  <div class="mb-3">
    <label for="price" class="form-label">Prix</label>
    <input type="number" class="form-control" id="price" v-model="book.price" required>
  </div>
 
 
  <button type="submit" class="btn submitButton">Valider</button>

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

<style scoped>
.submitButton {
  background: #333;
  font-weight: bold;
  color: #f1f1f1;
}
.submitButton:hover {
  color: #42b983;
}
</style>