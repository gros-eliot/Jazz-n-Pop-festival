<template>
  <div class="p-page">
    <h1 class="jazznpop-h1 text-center">Melody Gardot</h1>
    <div>
      <img src="../../assets/artistes/jazz/melody_gardot.jpg" alt="Melody Gardot" />
      <categorie-name :blackCategory="true" NameCategory="Internationale"></categorie-name>
    </div>
  </div>
</template>

<script>
import CategorieName from "../../components/categories/CategorieName.vue";
export default {
  components: { CategorieName },
};
</script>

<style></style>
