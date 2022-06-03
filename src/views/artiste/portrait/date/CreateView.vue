<template>
  <div class="jazznpop-text p-page">
    <form enctype="multipart/form-data" v-for="concertArtiste in concertsArtistes" :key="concertArtiste.id">
      <div class="py-5">
        <h2 class="jazznpop-h2">Créer un concert (et ses dates) d'un artiste</h2>
      </div>

      <div class="flex w-full flex-col gap-4">
        <div class="flex flex-col">
          <span class="font-medium">Nom du concert</span>
          <input class="jazznpop-input" placeholder="Jazzy Stage" v-model="concertArtiste.nom" required />
        </div>

        <div class="flex flex-col">
          <span class="font-medium">Date de début</span>
          <input
            type="date"
            class="jazznpop-input"
            placeholder="XX/XX/XXXX"
            format="dd/mm/yyyy"
            required
            v-model="concertArtiste.dateDebut"
          />
        </div>
        <div class="flex flex-col">
          <span class="font-medium">Date de fin</span>
          <input
            type="date"
            class="jazznpop-input"
            placeholder="XX/XX/XXXX"
            format="dd/mm/yyyy"
            required
            v-model="concertArtiste.dateFin"
          />
        </div>
      </div>

      <div class="my-5 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-around">
        <text-bouton :redVersion="true" contenuTextBouton="Créer" type="submit" class="w-fit"></text-bouton>

        <router-link to="/artiste_view">
          <text-bouton :redVersion="true" contenuTextBouton="Annuler" class="w-fit"></text-bouton>
        </router-link>
      </div>
    </form>
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
import TextBouton from "../../../../components/boutons/TextBouton.vue";

export default {
  name: "CreateConcertArtisteView",
  components: { TextBouton },
  data() {
    return {
      artiste: {
        concertsArtistes: [],
      },
      refArtiste: null,
    };
  },
  mounted() {
    // Montage de la vue
    // Appel de la liste des concert artiste
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
      } else {
        // Sinon simple message d'erreur
        this.console.log("artiste inexistant");
      }
    },
  },
};
</script>
