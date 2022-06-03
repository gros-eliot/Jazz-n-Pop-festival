<template>
  <div class="p-page">
    <h1 class="jazznpop-h1 text-center">{{ artiste.nom }}</h1>
    <!--DIV contenant le hero de la personne + sa description-->
    <div class="flex max-w-full flex-col">
      <!--DIV contenant le hero de la personne-->
      <div class="mt-5 flex flex-col items-center justify-center gap-10 md:mt-10 md:flex-row lg:flex-row-reverse">
        <img class="w-40 bg-center object-cover md:w-48 lg:w-64" :src="photoActuelle" :alt="artiste.nom" />
        <div class="flex flex-wrap gap-5 md:flex-col">
          <categorie-name :NameCategory="artiste.cat"></categorie-name>
        </div>
      </div>
      <!--DIV contenant  sa description-->
      <div class="mt-10">
        <h2 class="jazznpop-h2">Description de l'artiste...</h2>
        <div class="my-6 flex flex-col gap-0">
          <p class="jazznpop-text font-bold">Site officiel</p>
          <a :href="artiste.site" class="jazznpop-text underline">{{ artiste.site }}</a>
        </div>
        <div class="my-6 flex flex-col gap-0">
          <p class="jazznpop-text font-bold">Généralités</p>
          <p class="jazznpop-text lg:p-ordinateur">
            {{ artiste.description }}
          </p>
        </div>
      </div>
    </div>

    <div class="mt-10">
      <div class="flex flex-row items-center gap-4">
        <h2 class="jazznpop-h2">Dates de l'artiste</h2>
      </div>
      <div class="mt-10 flex flex-col gap-1">
        <date-card :listeConcertsArtisteCompo="artiste.concertsArtistes" />
      </div>
    </div>
    <div class="my-10">
      <h2 class="jazznpop-h2">Voir aussi</h2>
      <div class="mt-10 flex flex-col items-center justify-center gap-5 md:flex-row md:justify-around md:gap-1">
        <ArtistCircularCard artisteNom="Peter Cincotti" artisteImageSrc="/artistes/jazz/peter_cincotti.jpg" />
        <ArtistCircularCard artisteNom="Jean-Michel Blais" artisteImageSrc="/artistes/jazz/jean_michel_blais.jpg" />
      </div>
    </div>
  </div>
</template>

<!--
import DateCard from "../../../components/big/artists/DateCard.vue";
import CategorieName from "../../../components/categories/CategorieName.vue";
import ArtistCircularCard from "../../../components/big/artists/ArtistCircularCard.vue";
import { PencilIcon, PlusIcon } from "@heroicons/vue/outline";
export default {
  name: "PortraitView",
  components: { CategorieName, DateCard, ArtistCircularCard, PencilIcon, PlusIcon },-->

<script>
import DateCard from "../../components/big/artists/DateCard.vue";
import CategorieName from "../../components/categories/CategorieName.vue";
import ArtistCircularCard from "../../components/big/artists/ArtistCircularCard.vue";
import { PencilIcon, PlusIcon } from "@heroicons/vue/outline";

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

// Storage
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytes,
  uploadString,
  deleteObject,
  listAll,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "DeleteArtisteView",
  components: { CategorieName, DateCard, ArtistCircularCard, PencilIcon, PlusIcon },
  data() {
    return {
      artiste: {
        nom: null, // son nom
        cat: null, // son nom
        photo: "", // sa photo (nom du fichier)
        date: null, // sa date de date
        international: "", // nationalité
        site: null, // site
        description: null, // desc
        concertsArtistes: [],
      },

      refArtiste: null, // Référence du artiste à modifier
      photoActuelle: null, // Photo actuelle du artiste
    };
  },
  mounted() {
    // Montage de la vue
    // Récupération du id passé en paramètre
    // On utilise le id passé par la route
    // via la variable système $route de la vue
    console.log("id artiste", this.$route.params.id);
    // Recherche artiste concerné
    this.getArtiste(this.$route.params.id);
  },

  methods: {
    async getArtiste(id) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document artiste
      // Récupération sur Firestore du artiste via son id
      const docRef = doc(firestore, "artiste", id);
      // Référence du artiste concerné
      this.refArtiste = await getDoc(docRef);
      // Test si l'artiste demandé existe
      if (this.refArtiste.exists()) {
        // Si oui on récupère ses données
        this.artiste = this.refArtiste.data();
        // Mémorisation photoActuelle
        this.photoActuelle = this.artiste.photo;
      } else {
        // Sinon simple message d'erreur
        this.console.log("artiste inexistant");
      }
      // Obtenir le Storage
      const storage = getStorage();
      // Référence de l'image du artiste
      const spaceRef = ref(storage, "artiste/" + this.artiste.photo);
      // Récupération de l'url complète de l'image
      getDownloadURL(spaceRef)
        .then((url) => {
          // Mise à jour de l'image prévisualisée
          this.photoActuelle = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },
  },
};
</script>
