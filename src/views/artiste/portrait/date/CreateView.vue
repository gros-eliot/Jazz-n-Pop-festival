<template>
  <div class="jazznpop-text p-page">
    <form enctype="multipart/form-data" @submit.prevent="createConcertArtiste()">
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
            v-model="concertArtiste.datedebut"
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
            v-model="concertArtiste.datefin"
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
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  addDoc, // Ajouter un document à une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import TextBouton from "../../../../components/boutons/TextBouton.vue";

export default {
  name: "CreateConcertArtisteView",
  components: { TextBouton },
  data() {
    return {
      listeConcertArtiste: [], // Liste des concerts artistes
      concertArtiste: {
        // Le concert artiste à créer
        nom: null, // son nom
        datedebut: null, // son prénom
        datefin: null, // sa date de naissance
      },
    };
  },
  mounted() {
    // Montage de la vue
    // Appel de la liste des concert artiste
    this.getConcertArtiste();
  },
  methods: {
    async getConcertArtiste() {
      const firestore = getFirestore();
      const dbConcertArtiste = collection(firestore, "concertartiste");
      // Liste des artistes triés
      // query permet de faire une requête sur Firebase
      // notement pour filtrer, trier ... des données
      //orderBy permet de préciser sur quel élément trier, et dans quel ordre
      // ici tri par date début par ordre croissant (asc)
      const q = query(dbConcertArtiste, orderBy("datedebut", "asc"));
      // Récupération de la liste des concerts artistes à partir de la query
      // La liste est synchronisée
      await onSnapshot(q, (snapshot) => {
        this.listeConcertArtiste = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Liste des concerts", this.listeConcertArtiste);
      });
    },

    async createConcertArtiste() {
      // Création du artiste sur le Firestore
      const db = getFirestore();
      const docRef = addDoc(collection(db, "concertartiste"), this.concertArtiste);

      // redirection sur la liste des artistes
      this.$router.push("/artiste_view");
    },
  },
};
</script>
