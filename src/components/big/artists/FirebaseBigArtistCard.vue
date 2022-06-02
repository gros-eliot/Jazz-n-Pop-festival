<template>
  <div class="my-2 md:my-10">
    <h2 class="jazznpop-h2">Nos figures internationales</h2>
  </div>
  <div>
    <div class="flex flex-col items-center justify-center gap-10 md:flex-row md:flex-wrap lg:justify-start">
      <div v-for="artiste in listeArtiste" :key="artiste.id">
        <!--BG de l'image-->
        <div
          class="flex h-[30rem] w-72 items-end justify-center rounded-3xl bg-cover bg-center p-3 md:w-[20rem] lg:w-[24rem]"
          :style="{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),url('${artiste.photo}')`,
          }"
          v-if="artiste.international === true"
        >
          <!--INFOS DE LA CARD-->
          <div class="flex w-full flex-col gap-3">
            <CategorieName :redCategory="true" :NameCategory="artiste.cat" class="ml-auto mr-auto" />
            <div class="flex flex-col items-center justify-center md:flex-row md:justify-between">
              <div>
                <h3 class="jazznpop-card-title text-white">{{ artiste.nom }}</h3>
                <div class="flex flex-col gap-0">
                  <p class="jazznpop-card-caption text-white">Prochain concert :</p>
                  <p class="jazznpop-card-caption text-white">{{ artiste.date }}</p>
                </div>
              </div>
              <div class="flex flex-row gap-3">
                <RouterLink :to="{ name: 'CustomArtiste', params: { id: artiste.id } }" class="h-fit w-fit">
                  <PencilIcon class="my-3 h-8 w-8 stroke-white">
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
            <RouterLink :to="{ name: 'PortraitArtiste', params: { id: artiste.id } }">
              <PlusBouton :orangeVersion="true" contenuTextBouton="En savoir" class="ml-auto mr-auto w-fit" />
              <span class="sr-only">En savoir plus</span>
            </RouterLink>
          </div>
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
import PlusBouton from "../../boutons/PlusBouton.vue";
import { PlusIcon, PencilIcon, TrashIcon } from "@heroicons/vue/outline";
export default {
  components: {
    CategorieName,
    PlusBouton,
    PlusIcon,
    PencilIcon,
    TrashIcon,
  },
  data() {
    return {
      listeArtiste: [], // Liste des participants
    };
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
