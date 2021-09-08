<template>
 <div class="containerTopProduct text-center mx-auto"> 
     <h3 class="my-4">Meilleurs Ventes ⭐️</h3>
     <div v-for="product in products" :key="product.id">
         <div class="topProduct text-center my-5 mx-auto" v-if="product.top">
             <h5>{{ product.title }}</h5>
             <img class="mx-auto mb-2" :src="product.image" alt="product.title">
             <button @click="addToCart(product)" class="btn mx-auto mb-2"><i class="fas fa-cart-plus"></i></button>
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

  methods: {
    addToCart(product) {
      this.$store.dispatch("addToCart", product);
    },
  },
};
</script>

<style scoped>
img {
    width: 100px;
    height: 150px;
}
.containerTopProduct {
    border: 1px solid rgba(51, 51, 51, 0.26);
    box-shadow: 2px 2px 2px rgba(51, 51, 51, 0.226);
    border-radius: 12px;
    width: 300px;
    background: #ecf8f3;
}
.topProduct {
    box-shadow: 2px 2px 2px 2px rgba(51, 51, 51, 0.226);
    border-radius: 12px;
    width: 200px;
    display: flex;
    flex-direction: column;
}
.btn {
  background: #42b983;
  font-weight: bold;
  width: 100px;
}
.btn:hover {
  color: #f1f1f1;
}

</style>