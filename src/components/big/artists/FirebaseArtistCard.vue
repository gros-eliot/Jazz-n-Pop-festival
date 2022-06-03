<template>
  <div class="my-2 mt-10 md:my-10">
    <h2 class="jazznpop-h2">Nos autres grands partenaires</h2>
  </div>

  <!--Div contenant TOUTES LES CARDS des artistes-->

  <div class="flex flex-col items-center justify-start md:flex-row md:flex-wrap">
    <!--Div contenant UNE CARD des artistes-->
    <div class="flex flex-col items-center justify-between p-1 py-5 md:flex-row md:py-2" v-for="artiste in listeArtiste" :key="artiste.id">
      <!--Div contenant la div(image+desc) + BOUTON en savoir plus-->
      <div class="flex w-full flex-col items-center justify-center gap-1 md:flex-row md:justify-between" v-if="!artiste.international">
        <!--Div contenant image + description de l'artiste-->
        <div class="grid grid-cols-1 justify-items-center gap-2 md:grid-cols-2">
          <img class="h-48 w-48 object-cover object-center" :src="artiste.photo" :alt="artiste.nom" />

          <!--Div contenant description de l'artiste-->
          <div class="flex flex-col gap-1">
            <h3 class="jazznpop-card-title">{{ artiste.nom }}</h3>
            <p class="jazznpop-card-caption">Prochain concert&nbsp;:</p>
            <p class="jazznpop-card-caption">{{ artiste.date }}</p>

            <div class="grid grid-cols-2">
              <div>
                <categorie-name :blueCategory="true" :NameCategory="artiste.cat" class="my-2"></categorie-name>
                <!--Div contenant boutons de modifications-->
                <div class="flex flex-row gap-3">
                  <RouterLink :to="{ name: 'CustomArtiste', params: { id: artiste.id } }" class="h-fit w-fit">
                    <PencilIcon class="my-3 h-8 w-8 dark:stroke-white">
                      <span class="sr-only">Modifier un artiste</span>
                    </PencilIcon>
                  </RouterLink>
                  <RouterLink :to="{ name: 'DeleteArtiste', params: { id: artiste.id } }" class="h-fit w-fit">
                    <TrashIcon class="my-3 h-8 w-8 stroke-red-jazzNpop">
                      <span class="sr-only">Supprimer un artiste</span>
                    </TrashIcon>
                  </RouterLink>
                </div>
              </div>

              <div class="block md:hidden">
                <RouterLink
                  :to="{ name: 'PortraitArtiste', params: { id: artiste.id } }"
                  class="m-3 flex flex-row items-center justify-center gap-3 rounded-full bg-yellow-400 fill-black stroke-black px-5 py-5 text-black focus-visible:shadow-xl focus-visible:shadow-blue-400"
                >
                  <PlusIcon class="h-7 w-7" />
                  <span class="sr-only">En savoir plus</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <div class="m-5 hidden md:block">
          <RouterLink
            :to="{ name: 'PortraitArtiste', params: { id: artiste.id } }"
            class="m-3 flex flex-row items-center justify-center gap-3 rounded-full bg-yellow-400 fill-black stroke-black px-5 py-5 text-black focus-visible:shadow-xl focus-visible:shadow-blue-400"
          >
            <PlusIcon class="h-7 w-7" />
            <span class="sr-only">En savoir plus</span>
          </RouterLink>
        </div>
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
      listeArtiste: [], // Liste des artistes
    };
  },

  mounted() {
    // Montage de la vue
    // Appel de la liste des artistes
    this.getArtiste();
  },
  methods: {
    async getArtiste() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document artiste
      const dbArtiste = collection(firestore, "artiste");
      // Liste des artistes triés sur leur nom
      const q = query(dbArtiste, orderBy("cat", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeArtiste = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        // Récupération des images de chaque artiste
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
