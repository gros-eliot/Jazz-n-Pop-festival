<template>
  <div class="p-page">
    <h1 class="jazznpop-h1 text-center">Artistes du festival</h1>
    <div class="my-10">
      <h2 class="jazznpop-h2">Nos figures internationales</h2>
      <artist-card-jazz class="bg-acj1" artisteDate="7 juillet 2022"></artist-card-jazz>
    </div>
  </div>
</template>

<script>
import ArtistCardJazz from "../../components/big/artists/ArtistCardJazz.vue";
import ArtistCardPop from "../../components/big/artists/ArtistCardPop.vue";
export default {
  components: {
    ArtistCardPop,
    ArtistCardJazz,
  },
};
</script>

<style></style>
