<template>
  <div class="dark:bg-red-jazzNpopDark flex flex-col items-center gap-10 bg-red-jazzNpop p-3">
    <LogoBigBichrome class="mt-5 ml-auto mr-auto" />
    <span class="sr-only">Logo du festival Jazz'n'Pop</span>

    <ul class="flex w-[50%] flex-col justify-center gap-10 text-lg font-bold text-white md:items-center lg:w-[100%] lg:flex-row lg:text-xl">
      <li>
        <RouterLink to="/concerts">Programmes</RouterLink>
      </li>
      <li>
        <RouterLink to="/artistes">Artistes</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">Festival</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact">Contact</RouterLink>
      </li>
      <li>
        <RouterLink to="/mentions_legales">Mentions légales</RouterLink>
      </li>
    </ul>
    <div class="w-[90%] px-4 text-center text-base font-light text-white">
      <p>© Jazz’n’Pop Festival, Eliot Gros, MMI de Montbéliard (France)</p>
    </div>
  </div>
</template>

<script>
import LogoBigMonochrome from "../icons/JazzNPop_logos/big/Monochrome.vue";
import LogoBigBichrome from "../icons/JazzNPop_logos/big/Bichrome.vue";

export default {
  components: {
    LogoBigMonochrome,
    LogoBigBichrome,
  },
};
</script>
