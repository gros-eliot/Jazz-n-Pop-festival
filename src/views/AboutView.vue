<template>
  <!-- HERO DE LA PAGE-->
  <div class="-mt-4 h-full bg-about bg-cover bg-center p-page text-white">
    <div class="-mt-10 flex flex-col items-center md:mt-0 md:flex-row md:justify-center">
      <Monochrome class="h-[25rem] w-full max-w-md fill-white px-4" />
      <div class="flex flex-col items-center md:mt-12">
        <div class="-mt-10 flex flex-col gap-10">
          <h1 class="jazznpop-h1 text-center">C'est quoi&nbsp;?</h1>
          <p class="jazznpop-text md:p-5">
            Retrouvez différentes informations à propos du Jazz’n’Pop Festival, que ce soit à travers ses tarifs, ses salles, ses places, et
            d’autres encore !
          </p>
        </div>
        <a href="#scroll" class="block md:hidden">
          <text-bouton :orangeVersion="true" contenuTextBouton="Naviguer" class="my-10"></text-bouton>
        </a>
      </div>
    </div>
  </div>
  <!--CONTENU -->
  <div id="scroll" class="p-page">
    <!--Generalites -->
    <div class="my-10 flex flex-col gap-5">
      <h2 class="jazznpop-h2">Les choses à savoir sur le festival</h2>
      <h3 class="jazznpop-text font-bold">Localisation</h3>
      <p class="jazznpop-text lg:p-ordinateur">
        Le festival se trouve à la Place d’Armes, dans la ville de Belfort (90000). Proche de différentes frontières (Suisse, Allemagne...),
        le festival peut accueillir un grand nombre de visiteurs.
      </p>
      <RouterLink to="/contact">
        <TextBouton :redVersion="true" contenuTextBouton="En savoir plus" class="ml-auto mr-auto" />
      </RouterLink>
    </div>
    <!--Places -->
    <div class="my-10 flex flex-col gap-5">
      <h3 class="jazznpop-text font-bold">Places disponibles</h3>
      <p class="jazznpop-text lg:p-ordinateur">
        Au Jazz’n’Pop Festival, vous pourrez venir nombreux. En effet, notre festival possède un total de <strong>7000 places</strong>, dont
        6000 debouts et 1000 assises. Cette grande capacité vous permettra de venir en famille ou entre amis.
      </p>
    </div>
    <!--Scènes -->
    <div class="my-10 flex flex-col gap-5">
      <h3 class="jazznpop-text font-bold">Les scènes du festival</h3>
      <p class="jazznpop-text lg:p-ordinateur">
        Le Jazz’n’Pop Festival possède au total 3 scènes. Nous possédons 2 salles de concert, et une scène sur la place extérieure.
      </p>
      <div class="grid grid-cols-1 grid-rows-gallery md:grid-cols-gallery lg:h-[30rem]">
        <img src="../assets/festival/festival1.jpg" alt="Photo 1 du festival" class="h-full w-full object-cover" />
        <img src="../assets/festival/festival2.jpg" alt="Photo 2 du festival" class="h-full w-full object-cover" />
        <img src="../assets/festival/festival3.jpg" alt="Photo 3 du festival" class="h-full w-full object-cover" />
        <img src="../assets/festival/festival4.jpg" alt="Photo 4 du festival" class="h-full w-full object-cover" />
      </div>
    </div>
  </div>
  <!--Dates -->
  <div class="my-10 flex flex-col gap-5 bg-yellow-400 p-page py-8 text-gray-900">
    <h2 class="jazznpop-h2">Les dates du festival</h2>
    <p class="jazznpop-text">
      Le festival commencera cet été, et durera du<strong> jeudi 7 juillet au jeudi 21 juillet</strong> (2 semaines), avec une pause entre
      le 15 et 16 juillet 2022 (2 jours de pause).
    </p>
    <p class="jazznpop-text">Nous organisons 3 concerts spéciaux (Jazz’n’pop special concert) :</p>
    <ul class="jazznpop-text font-bold">
      <li>- le 14 juillet 2022</li>
      <li>- le 19 juillet 2022</li>
      <li>- le 21 juillet 2022</li>
    </ul>
    <p class="jazznpop-text">Où de nombreuses personnalités seront présentes pour vous faire passer un moment inoubliable.</p>
    <RouterLink to="/concerts">
      <TextBouton :whiteVersion="true" contenuTextBouton="Voir les concerts" class="ml-auto mr-auto" />
    </RouterLink>
  </div>

  <div class="my-10 flex flex-col gap-5 p-page">
    <h2 class="jazznpop-h2">Les tarifs</h2>
    <p class="jazznpop-text">Les tarifs d’accès aux concerts peuvent changer selon certaines conditions.</p>
    <div class="flex w-full justify-center">
      <tarifs-card class="w-full"></tarifs-card>
    </div>
    <p class="jazznpop-text">Les pass ci-dessus permettent un accès à plusieurs concerts.</p>
    <p class="jazznpop-text"><strong>Leur durée est valable sur une durée de 3 jours.</strong></p>
    <p class="jazznpop-text">
      Le <strong>all’pass permet l’accès à tout les concerts</strong>, tandis que le jazz’pass permet l’accès aux concerts de jazz
      uniquement, et le po’pass l’accès aux concerts de pop.
    </p>

    <button
      class="ml-auto mr-auto flex w-fit flex-row items-center justify-center gap-3 rounded-full bg-red-jazzNpop fill-white stroke-white px-10 py-5 text-white"
    >
      <p class="jazznpop-bouton">Acheter</p>
      <ArrowRightIcon class="h-7 w-7" />
      <span class="sr-only">Redirection (icône)</span>
    </button>
  </div>
</template>

<script>
import { ArrowRightIcon } from "@heroicons/vue/outline";
import TarifsCard from "../components/big/TarifsCard.vue";
import ArrowBouton from "../components/boutons/ArrowBouton.vue";
import TextBouton from "../components/boutons/TextBouton.vue";
import Monochrome from "../components/icons/JazzNPop_logos/big/Monochrome.vue";
export default {
  components: { Monochrome, TextBouton, TarifsCard, ArrowBouton, ArrowRightIcon },
};
</script>
