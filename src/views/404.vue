<template>
  <div class="jazznpop-text p-page">
    <disque class="absolute inset-x-0 -z-10 h-fit w-fit opacity-5 dark:fill-white dark:opacity-10"></disque>
    <div class="my-10 flex flex-col gap-5">
      <h1 class="jazznpop-h1 text-center">Page 404</h1>
      <h2 class="jazznpop-h2 text-center">Page non disponible</h2>
      <p class="jazznpop-text">La page demandée est momentanément indisponible ou n'existe pas.</p>
    </div>

    <form class="flex flex-col gap-3" action="https://google.com/" method="GET" x-data="{ q:'', }" x-on:submit="q = q + ' site:google.com'">
      <label for="q" class="flex flex-row items-center gap-2">Rechercher sur <strong>Google</strong><SearchIcon class="h-8 w-8" /></label>
      <input class="jazznpop-input dark:bg-black dark:bg-opacity-10" type="text" id="q" name="q" x-model="q" />

      <text-bouton type="submit" :redVersion="true" contenuTextBouton="Rechercher" class="ml-auto mr-auto"></text-bouton>
    </form>
  </div>
</template>

<script>
import { SearchIcon } from "@heroicons/vue/solid";
import TextBouton from "../components/boutons/TextBouton.vue";
import Disque from "../components/pictos/Disque.vue";
export default {
  components: { Disque, TextBouton, SearchIcon },
};
</script>
