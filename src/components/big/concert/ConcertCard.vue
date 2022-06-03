<template>
  <div
    class="my-5 ml-auto mr-auto flex flex-col gap-5 rounded-3xl bg-cover bg-center p-5"
    v-for="concert in listeConcert"
    :key="concert.id"
    :style="{
      backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.6) 61.02%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, rgba(255, 0, 0, 0.3), rgba(255, 0, 0, 0.3)),url('${concert.photo}')`,
    }"
  >
    <div class="flex flex-row justify-end gap-5 bg-cover bg-center">
      <CategorieName :NameCategory="concert.cat" />
      <CategorieName :NameCategory="concert.cat2" />
      <!-- v-for="concert in listeConcert" :key="concert.id" -->
    </div>
    <div class="flex flex-col gap-2 text-white">
      <h3 class="jazznpop-card-title">{{ concert.nom }}</h3>

      <p class="jazznpop-card-caption font-bold">Date la plus proche&nbsp;:</p>
      <p class="jazznpop-card-caption">du {{ concert.date1 }} au {{ concert.date2 }} - {{ concert.time }}</p>
    </div>
    <div class="flex flex-row items-center justify-between gap-5">
      <div class="flex h-fit w-fit flex-row items-center justify-center gap-10 rounded-full bg-black px-5 py-1">
        <RouterLink :to="{ name: 'CustomConcert', params: { id: concert.id } }">
          <PencilIcon class="my-3 h-8 w-8 stroke-white">
            <span class="sr-only">Modifier un concert</span>
          </PencilIcon>
        </RouterLink>
        <RouterLink :to="{ name: 'DeleteConcert', params: { id: concert.id } }">
          <TrashIcon class="my-3 h-8 w-8 stroke-red-jazzNpop">
            <span class="sr-only">Supprimer un concert</span>
          </TrashIcon>
        </RouterLink>
      </div>

      <RouterLink :to="{ name: 'ConcertView', params: { id: concert.id } }">
        <ArrowBouton :whiteVersion="true" contenuTextBouton="Voir" />
      </RouterLink>
    </div>
  </div>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

import ArrowBouton from "../../boutons/ArrowBouton.vue";
import CategorieName from "../../categories/CategorieName.vue";
import { PencilIcon, TrashIcon } from "@heroicons/vue/outline";

export default {
  components: {
    ArrowBouton,
    CategorieName,
    PencilIcon,
    TrashIcon,
  },
  data() {
    return {
      listeConcert: [], // Liste des artistes
    };
  },

  mounted() {
    this.getConcert();
  },
  methods: {
    async getConcert() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document artiste
      const dbConcert = collection(firestore, "concert");
      // Liste des concerts triés sur leur date
      const q = query(dbConcert, orderBy("date1", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeConcert = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        // Récupération des images de chaque artiste
        // parcours de la liste
        this.listeConcert.forEach(function (personne) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupération de l'image par son nom de fichier
          const spaceRef = ref(storage, "concert/" + personne.photo);
          // Récupération de l'url complète de l'image
          getDownloadURL(spaceRef)
            .then((url) => {
              // On remplace le nom du fichier
              // Par l'url complète de la photo
              personne.photo = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },
  },
};
</script>
