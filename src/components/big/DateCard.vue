<template>
  <div class="flex flex-row items-center justify-between bg-yellow-400 p-3" v-for="concert in listeConcert" :key="concert.id">
    <div class="flex items-center gap-2">
      <div class="hidden md:block">
        <ClockIcon class="h-8 w-8 stroke-gray-900" />
        <span class="sr-only">Heures du concert</span>
      </div>

      <h3 class="pr-5 text-base font-bold md:text-lg lg:text-xl">{{ concert.nom }}</h3>
    </div>
    <div class="flex flex-row items-center gap-2">
      <div class="flex flex-col items-center">
        <p class="jazznpop-text font-bold">{{ dateFr(concert.datedebut) }}</p>
        <p class="jazznpop-text font-bold">{{ dateFr(concert.datefin) }}</p>
      </div>
      <ArrowRightIcon class="h-10 w-10 stroke-white" />
      <span class="sr-only">Voir les tarifs</span>
    </div>
  </div>
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

import { ClockIcon, ArrowRightIcon } from "@heroicons/vue/outline";
export default {
  data() {
    return {
      listeConcert: [], // Liste des pays pour la nationalité du participant
    };
  },
  components: {
    ClockIcon,
    ArrowRightIcon,
  },

  mounted() {
    // Montage de la vue
    // Appel de la liste des participants
    this.getDateConcert();
  },
  methods: {
    async getDateConcert() {
      const firestore = getFirestore();
      const dbConcert = collection(firestore, "concert");
      // Liste des participants triés
      // query permet de faire une requête sur Firebase
      // notement pour filtrer, trier ... des données
      //orderBy permet de préciser sur quel élément trier, et dans quel ordre
      // ici le nom du pays par ordre decroissant
      const q = query(dbConcert, orderBy("datedebut", "asc"));
      // Récupération de la liste des pays à partir de la query
      // La liste est synchronisée
      await onSnapshot(q, (snapshot) => {
        this.listeConcert = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Liste des concerts", this.listeConcert);
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
