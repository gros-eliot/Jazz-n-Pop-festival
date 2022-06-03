<template>
  <div class="p-page">
    <div class="flex flex-col items-center justify-center gap-3 md:flex-row md:gap-10">
      <h1 class="text-center font-abril-fatface text-5xl lg:text-6xl">Programmes</h1>
      <RouterLink to="/concert_create" class="jazznpop-add-button">
        <PlusIcon class="h-10 w-10 dark:stroke-white"><span class="sr-only">Ajouter un artiste</span></PlusIcon>
      </RouterLink>
    </div>
    <h2 class="jazznpop-h2 my-5">Les concerts disponibles</h2>
    <!--Une div par concert-->
    <div class="my-10">
      <concert-card></concert-card>
    </div>
  </div>
</template>

<script>
import ConcertCard from "../../components/big/concert/ConcertCard.vue";
import { PlusIcon } from "@heroicons/vue/solid";
export default {
  components: {
    ConcertCard,
    PlusIcon,
  },
};
</script>

<style></style>
