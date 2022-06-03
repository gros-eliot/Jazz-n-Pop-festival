<template>
  <div class="p-page">
    <h1 class="jazznpop-h1 text-center">{{ concert.nom }}</h1>
    <img :src="imageData" :alt="concert.nom" class="my-10 h-72 w-full object-cover object-center" />

    <!-- Description du concert : div -->
    <div class="jazznpop-text my-10 flex flex-col gap-5">
      <h2 class="jazznpop-h2">Description du concert</h2>
      <p class="lg:p-ordinateur">
        {{ concert.description }}
      </p>
      <div class="flex flex-row flex-wrap gap-5">
        <CategorieName :NameCategory="concert.cat" />
        <CategorieName :NameCategory="concert.cat2" />
      </div>
    </div>
    <!-- Dates du concert : div -->
    <div class="jazznpop-text my-10 flex flex-col gap-5">
      <h2 class="jazznpop-h2">Dates du concert</h2>
      <div class="flex flex-col gap-3">
        <!--DateCard du dossier concert (=/= dossier artiste)-->
        <date-card datecardTitre="De 20h à 2h" datecardDate1="07/07/22" datecardDate2="08/07/22"></date-card>
        <date-card datecardTitre="De 20h à 2h" datecardDate1="10/07/22" datecardDate2="11/07/22"></date-card>
        <date-card datecardTitre="De 17h à 20h" datecardDate1="11/07/22" datecardDate2="12/07/22"></date-card>
        <date-card datecardTitre="De 20h à 2h" datecardDate1="12/07/22" datecardDate2="13/07/22"></date-card>
        <date-card datecardTitre="De 17h à 20h" datecardDate1="17/07/22" datecardDate2="18/07/22"></date-card>
        <date-card datecardTitre="De 20h à 1h" datecardDate1="20/07/22" datecardDate2="21/07/22"></date-card>
      </div>
      <p class="jazznpop-text">Les tarifs peuvent changer selon certaines conditions.</p>
      <p class="jazznpop-text font-bold">JAZZ’PASS valide pour ce concert !</p>
      <RouterLink to="/about">
        <text-bouton :redVersion="true" contenuTextBouton="Voir les tarifs" class="ml-auto mr-auto"></text-bouton>
      </RouterLink>
    </div>
    <!-- Concerts du concert : div -->
    <div class="jazznpop-text my-10 flex flex-col gap-10">
      <h2 class="jazznpop-h2">Artistes présents au concert</h2>
      <div class="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-4">
        <artist-circular-card artisteNom="Melody Gardot" artisteImageSrc="/artistes/jazz/melody_gardot.jpg"></artist-circular-card>
        <artist-circular-card artisteNom="Peter Cincotti" artisteImageSrc="/artistes/jazz/peter_cincotti.jpg"></artist-circular-card>
        <artist-circular-card artisteNom="Jean-Michel Blais" artisteImageSrc="/artistes/jazz/jean_michel_blais.jpg"></artist-circular-card>
        <artist-circular-card artisteNom="Daïda" artisteImageSrc="/artistes/jazz/daida.jpg"></artist-circular-card>
      </div>
      <div class="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
        <artist-circular-card artisteNom="Stacey Ryan" artisteImageSrc="/artistes/jazz/stacey_ryan.jpg"></artist-circular-card>
        <artist-circular-card artisteNom="Asaf Avidan" artisteImageSrc="/artistes/jazz/asaf_avidan.jpg"></artist-circular-card>
        <artist-circular-card artisteNom="Trio Viret" artisteImageSrc="/artistes/jazz/trio_viret.jpg"></artist-circular-card>
      </div>
      <RouterLink to="/artistes">
        <text-bouton :blueVersion="true" contenuTextBouton="Voir les artistes" class="ml-auto mr-auto"></text-bouton>
      </RouterLink>
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

import ArtistCircularCard from "../../components/big/artists/ArtistCircularCard.vue";
import DateCard from "../../components/big/concert/DateCard.vue";
import TextBouton from "../../components/boutons/TextBouton.vue";
import CategorieName from "../../components/categories/CategorieName.vue";
export default {
  components: {
    CategorieName,
    DateCard,
    TextBouton,
    ArtistCircularCard,
  },
  data() {
    return {
      imageData: "", // Image prévisualisée
      concert: {
        // Concert à créer
        nom: "", // son nom
        cat: "",
        cat2: "",
        date1: "", // sa date
        date2: "", // sa date (fin)
        time: "", // sa date (fin)
        photo: "", // sa photo (nom du fichier)
        description: "", // sa description
      },
      refConcert: null, // Référence du concert à modifier
      imgModifiee: false, // Indique si l'image du concert a été modifiée, par défaut : non
      photoActuelle: null, // Photo actuelle du concert
    };
  },
  mounted() {
    // Montage de la vue
    // Récupération du id passé en paramètre
    // On utilise le id passé par la route
    // via la variable système $route de la vue
    console.log("id concert", this.$route.params.id);
    // Recherche concert concerné
    this.getConcert(this.$route.params.id);
    // Appel de la liste des concerts
  },
  methods: {
    async getConcert(id) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document concert
      // Récupération sur Firestore du concert via son id
      const docRef = doc(firestore, "concert", id);
      // Référence du concert concerné
      this.refConcert = await getDoc(docRef);
      // Test si le concert demandé existe
      if (this.refConcert.exists()) {
        // Si oui on récupère ses données
        this.concert = this.refConcert.data();
        // Mémorisation photoActuelle
        this.photoActuelle = this.concert.photo;
      } else {
        // Sinon simple message d'erreur
        this.console.log("Concert inexistant");
      }
      // Obtenir le Storage
      const storage = getStorage();
      // Référence de l'image du concert
      const spaceRef = ref(storage, "concert/" + this.concert.photo);
      // Récupération de l'url complète de l'image
      getDownloadURL(spaceRef)
        .then((url) => {
          // Mise à jour de l'image prévisualisée
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },
  },
};
</script>

<style></style>
