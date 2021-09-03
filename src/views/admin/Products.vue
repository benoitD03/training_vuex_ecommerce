<template>
  <div class="container mt-5">
    <ProductList />
    <ProductAdd />
  </div>
</template>

<script>
import ProductList from "../../components/admin/ProductList";
import ProductAdd from './productAdd';
export default {
  components: {
    ProductList,
    ProductAdd
  },
};
</script>

<style>
</style>