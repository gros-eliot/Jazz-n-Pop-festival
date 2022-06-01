<template>
  <div class="p-page">
    <h1 class="jazznpop-h1 text-center">Artistes du festival</h1>
    <div class="my-10">
      <firebase-big-artist-card></firebase-big-artist-card>
    </div>

    <div class="my-5">
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
export default {
  components: {
    ArtistCardPop,
    ArtistCardJazz,
    CategorieName,
    FirebaseArtistCard,
    FirebaseBigArtistCard,
  },
};
</script>

<style></style>
