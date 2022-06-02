<template>
  <div class="p-page">
    <div class="flex flex-col items-center justify-center gap-3 md:flex-row md:gap-10">
      <h1 class="jazznpop-h1 text-center">Artistes du festival</h1>
      <RouterLink to="/artiste_create" class="jazznpop-add-button">
        <PlusIcon class="h-10 w-10 dark:stroke-white"><span class="sr-only">Ajouter un artiste</span></PlusIcon>
      </RouterLink>
    </div>
    <div class="my-10">
      <!-- Utilisation de flex (dans les cardes suivantes) à la place de grid 
      à cause d'un bug qui affichait des cases de grilles
      vides.-->
      <firebase-big-artist-card></firebase-big-artist-card>

      <firebase-artist-card></firebase-artist-card>
    </div>
  </div>
</template>

<script>
import ArtistCardJazz from "../../components/big/artists/ArtistCardJazz.vue";
import ArtistCardPop from "../../components/big/artists/ArtistCardPop.vue";
import FirebaseArtistCard from "../../components/big/artists/FirebaseArtistCard.vue";
import FirebaseBigArtistCard from "../../components/big/artists/FirebaseBigArtistCard.vue";
import CategorieName from "../../components/categories/CategorieName.vue";
import { PlusIcon } from "@heroicons/vue/outline";
export default {
  components: {
    ArtistCardPop,
    ArtistCardJazz,
    CategorieName,
    FirebaseArtistCard,
    FirebaseBigArtistCard,
    PlusIcon,
  },
};
</script>

<style></style>
