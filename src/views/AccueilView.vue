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

  <div class="flex h-5/6 w-full flex-col items-center justify-center bg-hero1 p-3 text-white md:h-4/6">
    <h1 class="font-abril-fatface text-6xl lg:text-7xl">Concerts</h1>
    <h2>Retrouvez ici les différents concerts disponibles cet été, au Jazz’n’Pop Festival.</h2>
  </div>
</template>

<script>
import Monochrome from "../components/icons/JazzNPop_logos/big/Monochrome.vue";
export default {
  components: { Monochrome },
};
</script>
