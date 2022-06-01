<template>
  <div class="jazznpop-text p-page">
    <div class="absolute inset-x-0 -z-10">
      <disque class="h-fit w-fit max-w-full opacity-5 dark:fill-white dark:opacity-10" aria-hidden="true">
        <span class="sr-only">Image de disque</span>
      </disque>
    </div>
    <div class="my-14 flex flex-col gap-5">
      <h1 class="jazznpop-h1 text-center">Page 404</h1>
      <h2 class="jazznpop-h2 text-center">Page non disponible</h2>
    </div>

    <h2 class="jazznpop-h2 my-5">Rechercher ailleurs...</h2>
    <form class="flex w-fit flex-col gap-3" action="https://duckduckgo.com/" method="GET">
      <label for="q" class="flex flex-row items-center gap-2"
        >Rechercher sur <strong>DuckDuckGo</strong><SearchIcon class="h-8 w-8"
      /></label>
      <input class="jazznpop-input dark:bg-black dark:bg-opacity-10" type="text" id="q" name="q" x-model="q" />

      <text-bouton type="submit" :redVersion="true" contenuTextBouton="Rechercher" class="ml-auto mr-auto"></text-bouton>
    </form>

    <div class="my-14 flex flex-col gap-5">
      <h2 class="jazznpop-h2 my-5 text-center">Liens principaux du site</h2>
      <ul class="flex flex-col items-center justify-center gap-8 text-lg font-bold underline lg:flex-row lg:text-xl">
        <li>
          <RouterLink to="/" class="flex flex-row items-center gap-2"> <HomeIcon class="h-4 w-4" />Accueil</RouterLink>
        </li>
        <li>
          <RouterLink to="/concerts" class="flex flex-row items-center gap-2"> <ClockIcon class="h-4 w-4" />Programmes</RouterLink>
        </li>
        <li>
          <RouterLink to="/artistes" class="flex flex-row items-center gap-2"> <UsersIcon class="h-4 w-4" />Artistes</RouterLink>
        </li>
        <li>
          <RouterLink to="/about" class="flex flex-row items-center gap-2"> <PartyIcon class="h-4 w-4" />Festival</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" class="flex flex-row items-center gap-2"> <PhoneIcon class="h-4 w-4" />Contact</RouterLink>
        </li>
        <li>
          <RouterLink to="/mentions_legales" class="flex flex-row items-center gap-2">
            <DotsVerticalIcon class="h-4 w-4" />Mentions légales</RouterLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { SearchIcon, HomeIcon, PhoneIcon, DotsVerticalIcon } from "@heroicons/vue/solid";
import { ClockIcon, UsersIcon } from "@heroicons/vue/outline";
import PartyIcon from "../components/icons/PartyIcon.vue";
import TextBouton from "../components/boutons/TextBouton.vue";
import Disque from "../components/pictos/Disque.vue";
import Saxophone from "../components/pictos/Saxophone.vue";
export default {
  components: { Disque, TextBouton, Saxophone, PartyIcon, SearchIcon, HomeIcon, ClockIcon, UsersIcon, PhoneIcon, DotsVerticalIcon },
};
</script>
