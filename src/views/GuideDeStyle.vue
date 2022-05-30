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
      <h1 class="font-abril-fatface text-6xl lg:text-7xl">H1 | Jazz</h1>
      <p class="text-xs">Abril Fatface, regular</p>
      <h2 class="text-3xl font-bold md:text-4xl lg:text-5xl">H2 | Jazz'n'pop</h2>
      <p class="text-xs">Raleway, bold</p>
      <p class="text-base md:text-lg lg:text-xl">Text | Jazz'n'pop festival</p>
      <p class="text-xs">Raleway, regular</p>
      <!--BOUTONS-->
      <hr class="mx-20 my-3 border-black" />
      <p class="text-2xl font-bold">Texte des boutons</p>
      <p class="text-xs">Raleway, bold</p>
      <!--CARDS-->
      <hr class="mx-20 my-3 border-black" />
      <h3 class="text-3xl font-bold">Titre des cards</h3>
      <p class="text-xs">Raleway, bold</p>
      <p class="text-2xl font-light">Texte des cards</p>
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

  <div class="h-full bg-gray-400 py-4">
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
    <div class="gap3 flex flex-col">
      <CategorieName :blackCategory="true" />
    </div>
  </div>
  <!--Pictos & images -->
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

// Composants : boutons
import ArrowBouton from "../components/boutons/ArrowBouton.vue";
import PlusBouton from "../components/boutons/PlusBouton.vue";
import TextBouton from "../components/boutons/TextBouton.vue";

//Composants: catégories

import CategorieName from "../components/categories/CategorieName.vue";
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
  },
};
</script>

<style></style>
