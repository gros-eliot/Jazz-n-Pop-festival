<template>
  <section v-for="concertArtiste in listeConcertArtiste" :key="concertArtiste.id">
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
          <p class="jazznpop-text font-bold">{{ dateFr(concertArtiste.datedebut) }}</p>
          <p class="jazznpop-text font-bold">{{ dateFr(concertArtiste.datefin) }}</p>
        </div>
        <ArrowRightIcon class="h-10 w-10 stroke-white dark:stroke-zinc-900" />
        <span class="sr-only">Voir les tarifs</span>
      </div>
    </div>
    <div class="flex flex-row gap-3">
      <RouterLink :to="{ name: 'CustomConcertArtist', params: { id: concertArtiste.id } }" class="h-fit w-fit">
        <PencilIcon class="my-3 h-8 w-8 dark:stroke-white">
          <span class="sr-only">Modifier un concert pour cet artiste</span>
        </PencilIcon>
      </RouterLink>
      <RouterLink :to="{ name: 'DeleteConcertArtist', params: { id: concertArtiste.id } }" class="h-fit w-fit">
        <TrashIcon class="my-3 h-8 w-8 stroke-red-jazzNpop">
          <span class="sr-only">Supprimer un concert pour cet artiste</span>
        </TrashIcon>
      </RouterLink>
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
  data() {
    return {
      listeConcertArtiste: [], // Liste des
    };
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
    this.getDateConcert();
  },
  methods: {
    async getDateConcert() {
      const firestore = getFirestore();
      const dbConcertArtiste = collection(firestore, "concertartiste");
      // Liste des artistes de concert triés
      // query permet de faire une requête sur Firebase
      // notement pour filtrer, trier ... des données
      //orderBy permet de préciser sur quel élément trier, et dans quel ordre
      // ici date par ordre croissant
      const q = query(dbConcertArtiste, orderBy("datedebut", "asc"));
      // Récupération de la liste des concert artiste à partir de la query
      // La liste est synchronisée
      await onSnapshot(q, (snapshot) => {
        this.listeConcertArtiste = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Liste des concerts", this.listeConcertArtiste);
      });
    },

    // Format date en français
    dateFr(d) {
      let date = d.split("-");
      return date[2] + "/" + date[1] + "/" + date[0];
    },
  },
};
</script>

<style></style>
