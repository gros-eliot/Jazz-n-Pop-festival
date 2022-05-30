<template>
  <div class="ml-auto mr-auto flex h-[20rem] w-11/12 rounded-3xl bg-[url('src/assets/pictos/map.jpg')] bg-cover bg-center">
    <div class="flex w-full items-end">
      <div class="flex w-full flex-row items-center justify-between gap-1 rounded-b-3xl bg-gray-900 p-5 text-yellow-400">
        <h3 class="text-3xl font-bold">Places d'Armes, Belfort (90)</h3>
        <ArrowBouton :orangeVersion="true" contenuTextBouton="Visiter" />
      </div>
    </div>
  </div>
</template>

<script>
import ArrowBouton from "../boutons/ArrowBouton.vue";
export default {
  components: {
    ArrowBouton,
  },
};
</script>

<style></style>
