<template>
  <div class="p-page">
    <h1 class="jazznpop-h1 text-center">Jazzy Stage</h1>
    <img src="src/assets/concerts/concert1.jpg" alt="Concert Jazzy Stage" class="my-10 h-72 w-full object-cover" />

    <!-- Description du concert : div -->
    <div class="jazznpop-text my-10 flex flex-col gap-5">
      <h2 class="jazznpop-h2">Description du concert</h2>
      <p class="lg:p-ordinateur">
        Rejoignez le Jazzy Stage afin de découvrir les nouveautés musicales du <strong>jazz</strong> et de réécouter les grands classiques
        du genre.
      </p>
      <p class="lg:p-ordinateur">Le concert se passe généralement en intérieur, et le soir. Il peut également se passer en après-midi.</p>
      <div class="flex flex-row flex-wrap gap-5">
        <CategorieName :blueCategory="true" NameCategory="Intérieur" />
        <CategorieName :orangeCategory="true" NameCategory="Jazz" />
      </div>
    </div>
    <!-- Dates du concert : div -->
    <div class="jazznpop-text my-10 flex flex-col gap-5">
      <h2 class="jazznpop-h2">Dates du concert</h2>
      <div class="flex flex-col gap-3">
        <date-card datecardTitre="De 20h à 2h" datecardDate1="07/07/22" datecardDate2="08/07/22"></date-card>
        <date-card datecardTitre="De 20h à 2h" datecardDate1="10/07/22" datecardDate2="11/07/22"></date-card>
        <date-card datecardTitre="De 17h à 20h" datecardDate1="11/07/22"></date-card>
        <date-card datecardTitre="De 20h à 2h" datecardDate1="12/07/22" datecardDate2="13/07/22"></date-card>
        <date-card datecardTitre="De 17h à 20h" datecardDate1="17/07/22"></date-card>
        <date-card datecardTitre="De 20h à 1h" datecardDate1="20/07/22" datecardDate2="21/07/22"></date-card>
      </div>
      <p class="jazznpop-text">Les tarifs peuvent changer selon certaines conditions.</p>
      <p class="jazznpop-text font-bold">JAZZ’PASS valide pour ce concert !</p>
      <text-bouton :redVersion="true" contenuTextBouton="Voir les tarifs" class="ml-auto mr-auto"></text-bouton>
    </div>
    <!-- Artistes du concert : div -->
    <div class="jazznpop-text my-10 flex flex-col gap-10">
      <h2 class="jazznpop-h2">Artistes présents au concert</h2>
      <div class="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-4">
        <artist-circular-card
          artisteNom="Melody Gardot"
          artisteImageSrc="src/assets/artistes/jazz/melody_gardot.jpg"
        ></artist-circular-card>
        <artist-circular-card
          artisteNom="Peter Cincotti"
          artisteImageSrc="src/assets/artistes/jazz/peter_cincotti.jpg"
        ></artist-circular-card>
        <artist-circular-card
          artisteNom="Jean-Michel Blais"
          artisteImageSrc="src/assets/artistes/jazz/jean_michel_blais.jpg"
        ></artist-circular-card>
        <artist-circular-card artisteNom="Daïda" artisteImageSrc="src/assets/artistes/jazz/daida.jpg"></artist-circular-card>
      </div>
      <div class="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
        <artist-circular-card artisteNom="Stacey Ryan" artisteImageSrc="src/assets/artistes/jazz/stacey_ryan.jpg"></artist-circular-card>
        <artist-circular-card artisteNom="Asaf Avidan" artisteImageSrc="src/assets/artistes/jazz/asaf_avidan.jpg"></artist-circular-card>
        <artist-circular-card artisteNom="Trio Viret" artisteImageSrc="src/assets/artistes/jazz/trio_viret.jpg"></artist-circular-card>
      </div>
      <text-bouton :blueVersion="true" contenuTextBouton="Voir les artistes" class="ml-auto mr-auto"></text-bouton>
    </div>
  </div>
</template>

<script>
import ArtistCircularCard from "../../components/big/artists/ArtistCircularCard.vue";
import DateCard from "../../components/big/concert/DateCard.vue";
import TextBouton from "../../components/boutons/TextBouton.vue";
import CategorieName from "../../components/categories/CategorieName.vue";
export default {
  components: {
    CategorieName,
    DateCard,
    TextBouton,
    ArtistCircularCard,
  },
};
</script>

<style></style>
