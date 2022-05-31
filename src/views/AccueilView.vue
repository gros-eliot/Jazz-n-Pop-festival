<template>
  <!--HERO-->
  <div class="z-[1] -mt-[3.3rem]">
    <div
      class="flex h-screen w-full flex-col items-center justify-center bg-[linear-gradient(180deg,_#FF0000_0%,_#FBBF24_100%)] text-white md:h-5/6 md:p-6"
    >
      <Monochrome class="h-[25rem] w-full max-w-md fill-white p-4" />
      <h1 class="sr-only">Jazz'n'Pop festival</h1>
      <p class="text-2xl font-light">Édition été 2022</p>
      <h3 class="text-3xl font-bold">Bienvenue</h3>
    </div>
  </div>

  <!--Pages artistes et concerts-->
  <PagePresentation
    class="bg-hero1"
    otherpageTitle="Concerts"
    otherpageDesc="Retrouvez ici les différents concerts disponibles cet été, au Jazz’n’Pop Festival."
    otherpageLink=""
  />
  <PagePresentation
    class="bg-hero2"
    otherpageTitle="Artistes"
    otherpageDesc="Découvrez les figures musicales présentes au festival."
    otherpageLink="artistes"
  />

  <!--Page : le festival (à propos)-->
  <Disque class="absolute -left-10 z-[-1] h-52 w-52 opacity-5" /><span class="sr-only">Image de disque</span>

  <div class="m-5 flex flex-col items-center justify-center">
    <h1 class="text-center font-abril-fatface text-4xl lg:text-5xl">Le Jazz’n’Pop Festival, c'est...</h1>
    <div class="my-5 flex flex-col items-center justify-center md:flex-row md:gap-10">
      <div class="flex flex-col items-center justify-center gap-1 p-3">
        <h2 class="text-3xl font-bold text-yellow-400">7000</h2>
        <p class="jazznpop-text">places disponibles</p>
      </div>
      <div class="flex flex-col items-center justify-center gap-1 p-3">
        <h2 class="text-3xl font-bold text-yellow-400">De 15 à 25€</h2>
        <p class="jazznpop-text">selon les tarifs</p>
      </div>
      <div class="flex flex-col items-center justify-center gap-1 p-3">
        <h2 class="text-3xl font-bold text-yellow-400">2 semaines</h2>
        <p class="jazznpop-text">à partir de juillet 2022</p>
      </div>
    </div>
    <text-bouton :redVersion="true" contenuTextBouton="En savoir plus" />
  </div>

  <Saxophone class="absolute right-10 z-[-1] -mt-48 h-64 w-64 rotate-12 opacity-5" /><span class="sr-only">Image de saxophone</span>
</template>

<script>
import Monochrome from "../components/icons/JazzNPop_logos/big/Monochrome.vue";
import TextBouton from "../components/boutons/TextBouton.vue";
import PagePresentation from "../components/home/PagePresentation.vue";
import Disque from "../components/pictos/Disque.vue";
import Saxophone from "../components/pictos/Saxophone.vue";
export default {
  components: { Monochrome, TextBouton, PagePresentation, Disque, Saxophone },
};
</script>
