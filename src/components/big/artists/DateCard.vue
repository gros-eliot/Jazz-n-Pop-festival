<template>
  <section v-for="concertArtiste in listeConcertsArtisteCompo" :key="concertArtiste.id">
    <div class="flex flex-row items-center justify-between bg-yellow-400 p-3 text-gray-900 dark:text-gray-900">
      <div class="flex items-center gap-2">
        <div class="hidden md:block">
          <ClockIcon class="h-8 w-8 stroke-gray-900" />
          <span class="sr-only">Heures du concert</span>
        </div>
        <h3 class="pr-5 text-base font-bold md:text-lg lg:text-xl">{{ concertArtiste.nom }}</h3>
      </div>
      <div class="flex flex-row items-center gap-2">
        <div class="flex flex-col items-center">
          <p class="jazznpop-text font-bold">{{ concertArtiste.dateDebut }}</p>
          <p class="jazznpop-text font-bold">{{ concertArtiste.dateFin }}</p>
        </div>
        <ArrowRightIcon class="h-10 w-10 stroke-white dark:stroke-zinc-900" />
        <span class="sr-only">Voir les tarifs</span>
      </div>
    </div>
  </section>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  setDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import { ClockIcon, ArrowRightIcon, PencilIcon, TrashIcon } from "@heroicons/vue/outline";
export default {
  props: {
    listeConcertsArtisteCompo: Array, // Liste des
  },

  components: {
    ClockIcon,
    ArrowRightIcon,
    PencilIcon,
    TrashIcon,
  },

  mounted() {
    // Montage de la vue
    // Appel de la liste des artistes

    console.log(this.listeConcertsArtisteCompo);
  },
};
</script>

<style></style>
