<template>
  <div class="p-page">
    <h1 class="jazznpop-h1 text-center">Artistes du festival</h1>
    <div class="my-10">
      <h2 class="jazznpop-h2">Nos figures internationales</h2>
      <div class="md: m-5 grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2">
        <artist-card-jazz
          class="bg-acj1"
          artisteDate="7 juillet 2022"
          artisteNom="Melody Gardot"
          artisteLink="artiste_view"
        ></artist-card-jazz>
        <artist-card-pop class="bg-acp4" artisteDate="9 juillet 2022" artisteNom="Coldplay" artisteLink=""></artist-card-pop>
        <artist-card-jazz
          class="bg-acj5 bg-center"
          artisteDate="10 juillet 2022"
          artisteNom="Peter Cincotti"
          artisteLink=""
        ></artist-card-jazz>
        <artist-card-pop class="bg-acp5 bg-center" artisteDate="14 juillet 2022" artisteNom="James Blunt" artisteLink=""></artist-card-pop>
        <artist-card-jazz
          class="bg-acj4 bg-center"
          artisteDate="7 juillet 2022"
          artisteNom="Jean-Michel Blais"
          artisteLink=""
        ></artist-card-jazz>
        <artist-card-pop class="bg-acp6 bg-center" artisteDate="9 juillet 2022" artisteNom="Kungs" artisteLink=""></artist-card-pop>
      </div>
    </div>
    <div class="my-10">
      <h2 class="jazznpop-h2">Nos autres grands partenaires</h2>
      <categorie-name :orangeCategory="true" NameCategory="Jazz" class="my-6"></categorie-name>

      <div class="md: my-5 grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-3">
        <artist-little-card artisteNom="Daïda" artisteDate="7 juillet 2022"></artist-little-card>
        <artist-little-card artisteNom="Stacey Ryan" artisteDate="7 juillet 2022"></artist-little-card>
        <artist-little-card artisteNom="Asaf Avidan" artisteDate="8 juillet 2022"></artist-little-card>
        <artist-little-card artisteNom="Trio Viret" artisteDate="11 juillet 2022"></artist-little-card>
      </div>

      <categorie-name :redCategory="true" NameCategory="Pop" class="my-6"></categorie-name>

      <div class="md: my-5 grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-3">
        <artist-little-card artisteNom="Woodkid" artisteDate="7 juillet 2022"></artist-little-card>
        <artist-little-card artisteNom="Alicia Moffet" artisteDate="10 juillet 2022"></artist-little-card>
        <artist-little-card artisteNom="Bastille" artisteDate="14 juillet 2022"></artist-little-card>
        <artist-little-card artisteNom="Alan Walker" artisteDate="14 juillet 2022"></artist-little-card>
      </div>
    </div>
  </div>
</template>

<script>
import ArtistCardJazz from "../../components/big/artists/ArtistCardJazz.vue";
import ArtistCardPop from "../../components/big/artists/ArtistCardPop.vue";
import ArtistLittleCard from "../../components/big/artists/ArtistLittleCard.vue";
import CategorieName from "../../components/categories/CategorieName.vue";
export default {
  components: {
    ArtistCardPop,
    ArtistCardJazz,
    CategorieName,
    ArtistLittleCard,
  },
};
</script>

<style></style>
