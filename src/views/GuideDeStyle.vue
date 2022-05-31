<template>
  <!--Couleurs -->

  <h1 class="bg-yellow-400 p-2 text-center font-abril-fatface text-xl text-black">Couleurs</h1>

  <div>
    <!--Couleurs principales-->
    <div class="my-5 flex flex-wrap justify-evenly">
      <div class="flex flex-col items-center gap-2">
        <div class="h-10 w-10 rounded-[10px_20px_30px_20px] bg-red-jazzNpop"></div>
        <p class="text-xs">Rouge JNP</p>
      </div>
      <div class="flex flex-col items-center gap-2">
        <div class="h-10 w-10 rounded-[10px_30px_20px_20px] bg-yellow-400"></div>
        <p class="text-xs">Yellow 400</p>
      </div>
      <div class="flex flex-col items-center gap-2">
        <div class="h-10 w-10 rounded-[10px_20px_20px_30px] bg-blue-400"></div>
        <p class="text-xs">Blue 400</p>
      </div>
      <div class="flex flex-col items-center gap-2">
        <div class="h-10 w-10 rounded-[30px_20px_10px_20px] bg-gray-900"></div>
        <p class="text-xs">Gray 900</p>
      </div>
      <div class="flex flex-col items-center gap-2">
        <div class="h-10 w-10 rounded-[40px_10px_30px_20px] border border-gray-900 bg-white"></div>
        <p class="text-xs">White</p>
      </div>
    </div>
    <!--DEGRADES : à utiliser ?-->
    <div class="my-5 flex flex-wrap justify-evenly">
      <div class="flex flex-col items-center gap-2">
        <div class="h-10 w-10 rounded-[40px_10px_30px_20px] border bg-gradient-to-b from-transparent to-black"></div>
        <p class="text-xs">Gradient 1</p>
      </div>
      <div class="flex flex-col items-center gap-2">
        <div class="h-10 w-10 rounded-[40px_10px_30px_20px] border bg-gradient-to-r from-black via-[#770000] to-transparent"></div>
        <p class="text-xs">Gradient 2</p>
      </div>
    </div>
  </div>

  <!--Typographies-->

  <h1 class="bg-yellow-400 p-2 text-center font-abril-fatface text-xl text-black">Typographies (responsives)</h1>

  <div class="my-5 flex flex-col">
    <div>
      <!--GENERALES-->
      <h1 class="jazznpop-h1">H1 | Jazz</h1>
      <p class="text-xs">Abril Fatface, regular</p>
      <h2 class="jazznpop-h2">H2 | Jazz'n'pop</h2>
      <p class="text-xs">Raleway, bold</p>
      <p class="jazznpop-text">Text | Jazz'n'pop festival</p>
      <p class="text-xs">Raleway, regular</p>
      <!--BOUTONS-->
      <hr class="mx-20 my-3 border-black" />
      <p class="jazznpop-bouton">Texte des boutons</p>
      <p class="text-xs">Raleway, bold</p>
      <!--CARDS-->
      <hr class="mx-20 my-3 border-black" />
      <h3 class="jazznpop-card-title">Titre des cards</h3>
      <p class="text-xs">Raleway, bold</p>
      <p class="jazznpop-card-caption">Texte des cards</p>
      <p class="text-xs">Raleway, light</p>
    </div>
  </div>

  <!--Icones et logos-->
  <h1 class="bg-yellow-400 p-2 text-center font-abril-fatface text-xl text-black">Icônes et logos</h1>

  <div class="h-full bg-gray-400 py-4">
    <!--Icônes -->
    <div class="grid grid-cols-4 justify-items-center">
      <MenuAlt3Icon class="h-10 w-10" />
      <XIcon class="h-10 w-10" />
      <PlusIcon class="h-10 w-10" />
      <ArrowRightIcon class="h-10 w-10" />
      <ClockIcon class="h-10 w-10" />
      <UsersIcon class="h-10 w-10" />
      <PartyIcon class="h-10 w-10" />
    </div>
    <!--Logo : grand format -->
    <div class="my-5 flex flex-col items-center justify-center gap-5">
      <LogoBigMonochrome />
      <LogoBigBichrome />
    </div>
    <!--Logo : moyen format -->
    <div class="my-5 flex flex-col items-center justify-center gap-5">
      <LogoMediumMonochrome />
      <LogoMediumBichrome />
    </div>
    <!--Logo : petit format -->
    <div class="my-5 flex flex-col items-center justify-center gap-5">
      <LogoSmall />
    </div>
  </div>

  <!-- Layouts principaux : header/footer/menu -->

  <h1 class="bg-yellow-400 p-2 text-center font-abril-fatface text-xl text-black">Layouts</h1>
  <div>
    <!--HEADER-->
    <HeaderView class="my-10" />
    <!--HEADER-->

    <!--FOOTER-->
    <FooterView class="my-10" />
    <!--FOOTER-->
  </div>

  <!--Composants (PETITS COMPOSANTS) -->
  <h1 class="bg-yellow-400 p-2 text-center font-abril-fatface text-xl text-black">Composants des pages (petits composants)</h1>

  <div class="flex h-full flex-col gap-10 bg-gray-400 py-4">
    <!--Boutons-->
    <div class="grid grid-cols-2 justify-items-center">
      <!--Boutons : Flèche (3 couleurs)-->
      <div class="flex w-fit flex-col gap-3">
        <ArrowBouton :orangeVersion="true" contenuTextBouton="Suivre" />
        <ArrowBouton :whiteVersion="true" contenuTextBouton="Suivre" />
        <ArrowBouton :redVersion="true" contenuTextBouton="Suivre" />
      </div>
      <!--Boutons : Plus (3 couleurs)-->
      <div class="flex w-fit flex-col gap-3">
        <PlusBouton :orangeVersion="true" contenuTextBouton="Suivre" />
        <PlusBouton :whiteVersion="true" contenuTextBouton="Suivre" />
        <PlusBouton :redVersion="true" contenuTextBouton="Suivre" />
      </div>
    </div>
    <!--Boutons : Texte uniquement (3 couleurs)-->
    <div class="flex flex-col gap-3">
      <TextBouton :orangeVersion="true" contenuTextBouton="En savoir plus" />
      <TextBouton :whiteVersion="true" contenuTextBouton="En savoir plus" />
      <TextBouton :redVersion="true" contenuTextBouton="En savoir plus" />
      <TextBouton :blueVersion="true" contenuTextBouton="En savoir plus" />
      <TextBouton :grayVersion="true" contenuTextBouton="En savoir plus" />
      <TextBouton :blackVersion="true" contenuTextBouton="En savoir plus" />
    </div>

    <!--Catégories des card-->
    <div class="flex flex-col gap-3">
      <CategorieName :blackCategory="true" NameCategory="Catégorie" />
      <CategorieName :blueCategory="true" NameCategory="Catégorie" />
      <CategorieName :redCategory="true" NameCategory="Catégorie" />
      <CategorieName :orangeCategory="true" NameCategory="Catégorie" />
    </div>

    <!--Composants des formulaires-->

    <form class="flex flex-col gap-3">
      <input
        type="text"
        class="p focus:none w-10/12 rounded-xl border-2 border-red-jazzNpop bg-white p-2 text-base focus-visible:ring-4 focus-visible:ring-gray-900"
        placeholder="Nom de l'input"
      />
      <div>
        <input type="checkbox" id="checkboxRed1" />
        <label for="checkboxRed1" aria-describedby="label">Red</label>
      </div>
    </form>
  </div>
  <!--Composants (GROS COMPOSANTS) -->
  <h1 class="bg-yellow-400 p-2 text-center font-abril-fatface text-xl text-black">Composants des pages (gros composants)</h1>
  <div class="flex h-full flex-col gap-10 bg-gray-400 py-4">
    <!-- Artiste : large card-->
    <div class="grid grid-cols-1 justify-items-center gap-3 lg:grid-cols-2">
      <ArtistCardJazz artisteNom="Melody Gardot" artisteDate="10/07/2022" class="bg-acj1 bg-center" />
      <ArtistCardPop artisteNom="Alan Walker" artisteDate="10/07/2022" class="bg-acp1 bg-center" />
    </div>
    <!-- Artiste : petite card-->
    <div class="md:grid-cols-2 lg:grid">
      <ArtistLittleCard artisteNom="Trio Viret" artisteDate="11/07/2022" />
      <ArtistLittleCard artisteNom="Coldplay" artisteDate="11/07/2022" />
    </div>

    <!--Artiste : card circulaire-->

    <ArtistCircularCard artisteNom="Asaf Avidan" artisteImageSrc="src/assets/artistes/jazz/asaf_avidan.jpg" />

    <!--Concert : large card-->

    <ConcertCard class="bg-concert1" concertNom="Jazz'n'Pop Festival" concertDate="11/07/2022"></ConcertCard>
    <ConcertCard class="bg-concert2" concertNom="Jazz'n'Pop Festival" concertDate="11/07/2022"></ConcertCard>
    <ConcertCard class="bg-concert3" concertNom="Jazz'n'Pop Festival" concertDate="11/07/2022"></ConcertCard>

    <!--Horaire-->
    <DateCard datecardTitre="Concert n°1" datecardDate1="11/07/2022" datecardDate2="12/07/2022" />
    <!--Map card-->
    <GoogleMapCard mapcardTitle="Places d'Armes, Belfort (90)" />
    <!--Tableau des tarifs-->
    <TarifsCard />
  </div>

  <!---->
  <!---->
  <!---->
  <!---->

  <!--Pictos & images -->
  <h1 class="bg-yellow-400 p-2 text-center font-abril-fatface text-xl text-black">Pictos & images</h1>
  <div class="flex p-3">
    <Disque class="h-20 w-20" />
    <Saxophone class="h-20 w-20" />
  </div>

  <div class="grid grid-cols-3">
    <!--Exemples d'images-->

    <img src="../assets/concerts/concert1.jpg" alt="Concert de jazz" class="w-full" />
    <img src="../assets/concerts/concert2.jpg" alt="Concert de pop" class="w-full" />
    <img src="../assets/concerts/concert3.jpg" alt="Concert spécial" class="w-full" />
    <!--
    <img src="../assets/festival/festival1.jpg" alt="Photos du lieu du festival" class="w-full" />
    <img src="../assets/festival/festival2.jpg" alt="Photos du lieu du festival" class="w-full" />
    <img src="../assets/festival/festival3.jpg" alt="Photos du lieu du festival" class="w-full" />
    <img src="../assets/festival/festival4.jpg" alt="Photos du lieu du festival" class="w-full" />
    -->
  </div>
</template>

<script>
import { MenuAlt3Icon, ArrowRightIcon, ClockIcon } from "@heroicons/vue/outline";
import { XIcon, PlusIcon, UsersIcon } from "@heroicons/vue/solid";
import PartyIcon from "../components/icons/PartyIcon.vue";

import LogoBigMonochrome from "../components/icons/JazzNPop_logos/big/Monochrome.vue";
import LogoBigBichrome from "../components/icons/JazzNPop_logos/big/Bichrome.vue";

import LogoMediumMonochrome from "../components/icons/JazzNPop_logos/medium/Monochrome.vue";
import LogoMediumBichrome from "../components/icons/JazzNPop_logos/medium/Bichrome.vue";

import LogoSmall from "../components/icons/JazzNPop_logos/small/Monochrome.vue";

import HeaderView from "../components/layouts/HeaderView.vue";
import FooterView from "../components/layouts/FooterView.vue";

import Disque from "../components/pictos/Disque.vue";
import Saxophone from "../components/pictos/Saxophone.vue";

// Composants : boutons
import ArrowBouton from "../components/boutons/ArrowBouton.vue";
import PlusBouton from "../components/boutons/PlusBouton.vue";
import TextBouton from "../components/boutons/TextBouton.vue";

//Composants: catégories

import CategorieName from "../components/categories/CategorieName.vue";

//Gros composants
import ArtistCardJazz from "../components/big/artists/ArtistCardJazz.vue";
import ArtistCardPop from "../components/big/artists/ArtistCardPop.vue";
import ArtistLittleCard from "../components/big/artists/ArtistLittleCard.vue";
import ArtistCircularCard from "../components/big/artists/ArtistCircularCard.vue";

//Gros artistes
import ConcertCard from "../components/big/concert/ConcertCard.vue";

import DateCard from "../components/big/DateCard.vue";
import GoogleMapCard from "../components/big/GoogleMapCard.vue";
import TarifsCard from "../components/big/TarifsCard.vue";

//Export des composants
export default {
  components: {
    MenuAlt3Icon,
    XIcon,
    PlusIcon,
    ArrowRightIcon,
    ClockIcon,
    UsersIcon,
    PartyIcon,
    LogoBigMonochrome,
    LogoBigBichrome,
    LogoMediumMonochrome,
    LogoMediumBichrome,
    LogoSmall,

    HeaderView,
    FooterView,

    ArrowBouton,
    PlusBouton,
    TextBouton,

    CategorieName,

    Disque,
    Saxophone,

    ArtistCardJazz,
    ArtistCardPop,
    ArtistLittleCard,
    ArtistCircularCard,

    ConcertCard,

    DateCard,
    GoogleMapCard,
    TarifsCard,
  },
};
</script>

<style></style>
