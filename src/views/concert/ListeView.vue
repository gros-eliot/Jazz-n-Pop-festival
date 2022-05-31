<template>
  <div class="p-page">
    <h1 class="text-center font-abril-fatface text-5xl lg:text-6xl">Programmes</h1>
    <div class="my-10">
      <h2 class="jazznpop-h2">Les concerts disponibles</h2>
      <!--Une div par concert-->
      <div class="my-10">
        <concert-card
          concertNom="Jazzy Stage"
          concertDate="7 juillet 2022 et 8 juillet 2022 - 20h à 2h"
          concertLink="concert_view"
          class="bg-concert1"
        ></concert-card>
        <div class="m-5 flex flex-col items-center justify-center gap-10 md:flex-row md:justify-around">
          <ArtistCircularCard artisteNom="Daïda" artisteImageSrc="src/assets/artistes/jazz/daida.jpg" />
          <RouterLink to="artiste_view">
            <ArtistCircularCard artisteNom="Melody Gardot" artisteImageSrc="src/assets/artistes/jazz/melody_gardot.jpg" />
          </RouterLink>
        </div>
        <hr class="m-5 mt-10 border-2 border-black p-0 dark:border-white" />
      </div>
      <!--Une div par concert-->
      <div class="my-10">
        <concert-card
          concertNom="Pop of dreams"
          concertDate="9 juillet 2022 et 10 juillet 2022 - 22h à 3h"
          concertLink=""
          class="bg-concert2"
        ></concert-card>
        <div class="m-5 flex flex-col items-center justify-center gap-10 md:flex-row md:justify-around">
          <ArtistCircularCard artisteNom="Coldplay" artisteImageSrc="src/assets/artistes/pop/coldplay.jpg" />

          <ArtistCircularCard artisteNom="Kungs" artisteImageSrc="src/assets/artistes/pop/kungs.jpg" />
        </div>
        <hr class="m-5 mt-10 border-2 border-black p-0 dark:border-white" />
      </div>
      <!--Une div par concert-->
      <div class="my-10">
        <concert-card
          concertNom="Jazz’n’pop special concert"
          concertDate="14 juillet 2022 et 15 juillet 2022 - 20h à 3h"
          concertLink=""
          class="bg-concert3"
        ></concert-card>
        <div class="m-5 flex flex-col items-center justify-center gap-10 md:flex-row md:justify-around">
          <ArtistCircularCard artisteNom="James Blunt" artisteImageSrc="src/assets/artistes/pop/james_blunt.webp" />
          <ArtistCircularCard artisteNom="Alicia Moffet" artisteImageSrc="src/assets/artistes/pop/alicia_moffet.jpg" />
          <ArtistCircularCard artisteNom="Bastille" artisteImageSrc="src/assets/artistes/pop/bastille.jpg" />
          <ArtistCircularCard artisteNom="Stacey Ryan" artisteImageSrc="src/assets/artistes/jazz/stacey_ryan.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConcertCard from "../../components/big/concert/ConcertCard.vue";
import ArtistCircularCard from "../../components/big/artists/ArtistCircularCard.vue";
export default {
  components: {
    ConcertCard,
    ArtistCircularCard,
  },
};
</script>

<style></style>
