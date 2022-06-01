<template>
  <div class="jazznpop-text p-page">
    <form enctype="multipart/form-data" @submit.prevent="createConcert()">
      <div class="py-5">
        <h2 class="jazznpop-h2">Créer un concert (et ses dates) d'un artiste</h2>
      </div>

      <div class="flex w-full flex-col gap-4">
        <div class="flex flex-col">
          <span class="">Nom du concert</span>
          <input class="jazznpop-input" placeholder="Jazzy Stage" v-model="concert.nom" required />
        </div>

        <div class="flex flex-col">
          <span class="input-group-text">Date de début</span>
          <input type="text" class="jazznpop-input" placeholder="jour(XX) mois année(XXXX)" required v-model="concert.datedebut" />
        </div>
        <div class="flex flex-col">
          <span class="input-group-text">Date de fin</span>
          <input type="text" class="jazznpop-input" placeholder="jour(XX) mois année(XXXX)" required v-model="concert.datefin" />
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

export default {
  name: "CreateView",
  data() {
    return {
      listeConcert: [], // Liste des pays pour la nationalité du participant
      concert: {
        // Le participant à créer
        nom: null, // son nom
        datedebut: null, // son prénom
        datefin: null, // sa date de naissance
      },
    };
  },
  mounted() {
    // Montage de la vue
    // Appel de la liste des pays
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
      // ici le nom du pays par ordre croissant (asc)
      const q = query(dbConcert, orderBy("nom", "asc"));
      // Récupération de la liste des pays à partir de la query
      // La liste est synchronisée
      await onSnapshot(q, (snapshot) => {
        this.listePays = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Liste des concerts", this.listePays);
      });
    },

    async createConcert() {
      // Création du participant sur le Firestore
      const db = getFirestore();
      const docRef = addDoc(collection(db, "concert"), this.concert);

      // redirection sur la liste des participants
      this.$router.push("/artiste_view");
    },
  },
};
</script>
