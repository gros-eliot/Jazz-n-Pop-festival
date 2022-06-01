<template>
  <div class="jazznpop-text p-page">
    <form enctype="multipart/form-data" @submit.prevent="deleteArtiste()">
      <div class="py-5">
        <h2 class="jazznpop-h2">Supprimer un concert (et ses dates) d'un artiste</h2>
      </div>

      <div class="flex w-full flex-col gap-4">
        <div class="flex flex-col">
          <span class="">Nom du concert</span>
          <input class="jazznpop-input border-0 bg-red-500 text-white" placeholder="Jazzy Stage" v-model="concertArtiste.nom" disabled />
        </div>

        <div class="flex flex-col">
          <span class="input-group-text">Date de début</span>
          <input
            type="date"
            class="jazznpop-input border-0 bg-red-500 text-white"
            placeholder="XX/XX/XXXX"
            format="dd/mm/yyyy"
            required
            v-model="concertArtiste.datedebut"
            disabled
          />
        </div>
        <div class="flex flex-col">
          <span class="input-group-text">Date de fin</span>
          <input
            type="date"
            class="jazznpop-input border-0 bg-red-500 text-white"
            placeholder="XX/XX/XXXX"
            format="dd/mm/yyyy"
            required
            v-model="concertArtiste.datefin"
            disabled
          />
        </div>

        <h3 role="alert" class="text-center">
          <strong>Attention : vous allez supprimer ce concert de l'artiste, cette action est irréversible !</strong>
        </h3>
      </div>

      <div class="my-5 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-around">
        <text-bouton :redVersion="true" contenuTextBouton="Supprimer" type="submit" class="w-fit"></text-bouton>

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
      concertArtiste: {
        nom: null,
        datedebut: null,
        datefin: null,
      },
      refConcertArtiste: null,
    };
  },
  mounted() {
    // Montage de la vue
    // Appel de la liste des pays
    console.log("id concert de l'artiste", this.$route.params.id);
    this.getConcertArtiste(this.$route.params.id);
  },
  methods: {
    async getConcertArtiste(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "concertartiste", id);
      this.refConcertArtiste = await getDoc(docRef);
      // Test si le participant demandé existe
      if (this.refConcertArtiste.exists()) {
        // Si oui on récupère ses données
        this.concertArtiste = this.refConcertArtiste.data();
      } else {
        // Sinon simple message d'erreur
        this.console.log("Concert d'artiste inexistant");
      }
    },

    async deleteArtiste() {
      const firestore = getFirestore();
      // Suppresion du artiste
      await deleteDoc(doc(firestore, "concertartiste", this.$route.params.id));

      // redirection sur la liste des artistes
      this.$router.push("/artistes");
    },
  },
};
</script>
