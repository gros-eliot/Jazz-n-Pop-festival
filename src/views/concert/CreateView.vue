<template>
  <div class="jazznpop-text p-page">
    <form enctype="multipart/form-data" @submit.prevent="createConcert()">
      <div class="py-5">
        <h2 class="jazznpop-h2">Créer un concert</h2>
      </div>

      <div class="flex w-full flex-col gap-4">
        <div class="flex flex-col">
          <span class="font-medium">Nom du concert</span>
          <input class="jazznpop-input" placeholder="Jazzy stage" v-model="concert.nom" required />
        </div>
        <div class="flex flex-col">
          <span class="font-medium">Photo</span>
          <input type="file" class="jazznpop-input flex flex-wrap" ref="file" id="file" @change="previewImage" />
        </div>
        <div>
          <span class="font-medium">Aperçu de la photo choisie</span>

          <img class="w-40 bg-center object-cover md:w-48 lg:w-52" :src="imageData" />
        </div>

        <div class="flex flex-col">
          <span class="font-medium">Date de début du concert</span>
          <input type="text" class="jazznpop-input" placeholder="jour(XX) mois année(XXXX)" required v-model="concert.date1" />
        </div>
        <div class="flex flex-col">
          <span class="font-medium">Date de fin du concert</span>
          <input type="text" class="jazznpop-input" placeholder="jour(XX) mois année(XXXX)" required v-model="concert.date2" />
        </div>
        <div class="flex flex-col">
          <span class="font-medium">Horaires du concert (en heure)</span>
          <input type="text" class="jazznpop-input w-40" placeholder="XXh à XXh" required v-model="concert.time" />
        </div>

        <div class="flex flex-col">
          <span class="font-medium">Catégorie</span>

          <div class="flex flex-col gap-5">
            <select class="jazznpop-input" v-model="concert.cat">
              <option class="bg-white dark:bg-black" selected disabled>Sélectionner une catégorie</option>
              <option class="bg-white text-black dark:bg-black dark:text-white" v-for="categorie in listeCat" :key="categorie.libelle">
                {{ categorie.libelle }}
              </option>
            </select>
            <input type="text" class="jazznpop-input" placeholder="Catégorie secondaire" v-model="concert.cat2" />
          </div>
        </div>

        <div class="flex flex-col">
          <span class="font-medium">Description du concert</span>
          <textarea class="jazznpop-input h-32" placeholder="Saisissez une description ici..." v-model="concert.description" required />
        </div>
      </div>

      <div class="my-5 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-around">
        <text-bouton :redVersion="true" contenuTextBouton="Créer" type="submit" class="w-fit"></text-bouton>

        <router-link to="/concerts">
          <text-bouton :redVersion="true" contenuTextBouton="Annuler" class="w-fit"></text-bouton>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
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

import TextBouton from "../../components/boutons/TextBouton.vue";
import { PlusIcon } from "@heroicons/vue/outline";
export default {
  name: "CreateArtisteView",
  components: { TextBouton, PlusIcon },
  data() {
    return {
      imageData: null, // Image prévisualisée
      listeCat: [], // Liste des categorie pour l'artiste
      concert: {
        // Concert à créer
        nom: null, // son nom
        cat: null,
        cat2: null,
        date1: null, // sa date
        date2: null, // sa date (fin)
        time: null, // sa date (fin)
        photo: "", // sa photo (nom du fichier)
        description: "", // sa description
      },
    };
  },
  mounted() {
    // Montage de la vue
    // Appel de la liste des catégorie
    this.getCat();
  },
  methods: {
    async getCat() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document categorie
      const dbCat = collection(firestore, "categorie");
      // Liste des artistes triés
      // query permet de faire une requête sur Firebase
      // notement pour filtrer, trier ... des données
      //orderBy permet de préciser sur quel élément trier, et dans quel ordre
      // ici le nom des catégories par ordre croissant (asc)
      const q = query(dbCat, orderBy("libelle", "asc"));
      // Récupération de la liste des catégorie à partir de la query
      // La liste est synchronisée
      await onSnapshot(q, (snapshot) => {
        this.listeCat = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Liste des catégories", this.listeCat);
      });
    },

    previewImage: function (event) {
      // Mise à jour de la photo de l'artiste
      this.file = this.$refs.file.files[0];
      // Récupérer le nom du fichier pour la photo de l'artiste
      this.concert.photo = this.file.name;
      // Reference to the DOM input element
      // Reference du fichier à prévisualiser
      var input = event.target;
      // On s'assure que l'on a au moins un fichier à lire
      if (input.files && input.files[0]) {
        // Creation d'un filereader
        // Pour lire l'image et la convertir en base 64
        var reader = new FileReader();
        // fonction callback appellée lors que le fichier a été chargé
        reader.onload = (e) => {
          // Read image as base64 and set to imageData
          // lecture du fichier pour mettre à jour
          // la prévisualisation
          this.imageData = e.target.result;
        };
        // Demarrage du reader pour la transformer en data URL (format base 64)
        reader.readAsDataURL(input.files[0]);
      }
    },
    async createConcert() {
      // Obtenir storage Firebase
      const storage = getStorage();
      // Référence de l'image à uploader
      const refStorage = ref(storage, "concert/" + this.concert.photo);
      // Upload de l'image sur le Cloud Storage

      await uploadString(refStorage, this.imageData, "data_url").then((snapshot) => {
        console.log("Uploaded a base64 string");

        // Création de l'artiste sur le Firestore
        const db = getFirestore();
        const docRef = addDoc(collection(db, "concert"), this.concert);
      });
      // redirection sur la liste des  artistes
      this.$router.push("/concerts");
    },
  },
};
</script>
