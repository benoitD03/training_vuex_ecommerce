<template>
  <div class="home">
    <div class="row">
      <div class="col-12 col-lg-9">
        <Products />
      </div>
      <div class="col-12 col-lg-2 mt-5">
        <TopProduct />
      </div>
    </div>
  </div>
</template>

<script>
import Products from "./Products";
import TopProduct from "../components/topProduct";
export default {
  name: "Home",
  components: {
    Products,
    TopProduct,
  },
};
</script>
