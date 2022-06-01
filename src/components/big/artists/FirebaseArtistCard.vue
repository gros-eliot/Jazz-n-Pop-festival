<template>
  <div class="my-10 flex items-center gap-5">
    <h2 class="jazznpop-h2">Nos autres grands partenaires</h2>
    <RouterLink to="/artiste_create" class="rounded-full border border-gray-900 p-3 dark:border-white">
      <PlusIcon class="h-10 w-10 dark:stroke-white"><span class="sr-only">Ajouter un artiste</span></PlusIcon>
    </RouterLink>
  </div>

  <div class="flex flex-row flex-wrap justify-around">
    <div class="flex flex-col items-center justify-between p-5 md:flex-row" v-for="artiste in listeArtiste" :key="artiste.id">
      <div class="grid-rows-[repeat(2,minmax(150px, 200px))] grid grid-cols-1 gap-2 md:grid-cols-2">
        <img class="h-44 w-44 object-cover object-center" :src="artiste.photo" :alt="artiste.nom" />
        <div class="flex flex-col gap-1">
          <h3 class="jazznpop-card-title">{{ artiste.nom }}</h3>
          <p class="jazznpop-card-caption">Prochain concert :</p>
          <p class="jazznpop-card-caption">{{ artiste.date }}</p>
          <categorie-name :blueCategory="true" :NameCategory="artiste.cat"></categorie-name>
          <div class="flex flex-row gap-1">
            <PencilIcon class="m-3 h-8 w-8 dark:stroke-white"><span class="sr-only">Modifier un artiste</span></PencilIcon>
            <TrashIcon class="m-3 h-8 w-8 dark:stroke-white"><span class="sr-only">Supprimer un artiste</span></TrashIcon>
          </div>
        </div>
      </div>
      <div class="m-5">
        <button
          class="m-3 flex flex-row items-center justify-center gap-3 rounded-full bg-yellow-400 fill-black stroke-black px-5 py-5 text-black"
        >
          <PlusIcon class="h-7 w-7" />
          <span class="sr-only">En savoir plus</span>
        </button>
      </div>
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

import CategorieName from "../../categories/CategorieName.vue";
import { PlusIcon, PencilIcon, TrashIcon } from "@heroicons/vue/outline";

export default {
  name: "ListeView",
  components: { CategorieName, PlusIcon, PencilIcon, TrashIcon },
  data() {
    return {
      listeArtiste: [], // Liste des participants
    };
  },
  props: {
    artisteDate: {
      type: String,
      required: true,
    },
  },
  mounted() {
    // Montage de la vue
    // Appel de la liste des participants
    this.getArtiste();
  },
  methods: {
    async getArtiste() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbArtiste = collection(firestore, "artiste");
      // Liste des participants triés sur leur nom
      const q = query(dbArtiste, orderBy("cat", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeArtiste = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        // Récupération des images de chaque participant
        // parcours de la liste
        this.listeArtiste.forEach(function (personne) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupération de l'image par son nom de fichier
          const spaceRef = ref(storage, "artiste/" + personne.photo);
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

<style></style>
