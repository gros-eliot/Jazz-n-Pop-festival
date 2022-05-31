<template>
  <div class="jazznpop-text p-page">
    <div class="absolute inset-x-0 -z-10">
      <disque class="h-fit w-fit max-w-full opacity-5 dark:fill-white dark:opacity-10"></disque>
    </div>
    <div class="my-14 flex flex-col gap-5">
      <h1 class="jazznpop-h1 text-center">Page 404</h1>
      <h2 class="jazznpop-h2 text-center">Page non disponible</h2>
      <p class="jazznpop-text">La page demandée est momentanément indisponible ou n'existe pas.</p>
    </div>

    <form class="flex flex-col gap-3" action="https://duckduckgo.com/" method="GET">
      <label for="q" class="flex flex-row items-center gap-2"
        >Rechercher sur <strong>DuckDuckGo</strong><SearchIcon class="h-8 w-8"
      /></label>
      <input class="jazznpop-input dark:bg-black dark:bg-opacity-10" type="text" id="q" name="q" x-model="q" />

      <text-bouton type="submit" :redVersion="true" contenuTextBouton="Rechercher" class="ml-auto mr-auto"></text-bouton>
    </form>

    <div class="my-14 flex flex-col gap-5">
      <h2 class="jazznpop-h2 text-center">Liens du site</h2>
      <ul class="flex flex-col items-center justify-center gap-5 text-lg underline lg:flex-row lg:text-xl">
        <li>
          <RouterLink to="/">Accueil</RouterLink>
        </li>
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
    </div>
  </div>
</template>

<script>
import { SearchIcon } from "@heroicons/vue/solid";
import TextBouton from "../components/boutons/TextBouton.vue";
import Disque from "../components/pictos/Disque.vue";
import Saxophone from "../components/pictos/Saxophone.vue";
export default {
  components: { Disque, TextBouton, SearchIcon, Saxophone },
};
</script>
