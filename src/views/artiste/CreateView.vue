<template>
  <div class="jazznpop-text p-page">
    <form enctype="multipart/form-data" @submit.prevent="createArtiste()">
      <div class="py-5">
        <h2 class="jazznpop-h2">Créer un artiste</h2>
      </div>

      <div class="flex w-full flex-col gap-4">
        <div class="flex flex-col">
          <span class="">Nom de l'artiste</span>
          <input class="jazznpop-input" placeholder="Melody Gardot" v-model="artiste.nom" required />
        </div>
        <div class="flex flex-col">
          <span>Photo</span>
          <input type="file" class="jazznpop-input flex flex-wrap" ref="file" id="file" @change="previewImage" />
        </div>
        <div>
          <span>Aperçu de la photo choisie</span>

          <img class="w-40 bg-center object-cover md:w-48 lg:w-52" :src="imageData" />
        </div>

        <div class="flex flex-col">
          <span class="input-group-text">Date du prochain concert de l'artiste</span>
          <input type="text" class="jazznpop-input" placeholder="jour(XX) mois année(XXXX)" required v-model="artiste.date" />
        </div>

        <div class="flex flex-col">
          <span>Catégorie</span>

          <select class="jazznpop-input" v-model="artiste.cat">
            <option class="bg-white dark:bg-black" selected disabled>Sélectionner une catégorie</option>
            <option class="bg-white text-black dark:bg-black dark:text-white" v-for="categorie in listeCat" :key="categorie.libelle">
              {{ categorie.libelle }}
            </option>
          </select>
        </div>
      </div>

      <div class="my-5 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-around">
        <text-bouton :redVersion="true" contenuTextBouton="Créer" type="submit" class="w-fit"></text-bouton>

        <router-link to="/artistes">
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

export default {
  name: "CreateArtisteView",
  components: { TextBouton },
  data() {
    return {
      imageData: null, // Image prévisualisée
      listeCat: [], // Liste des categorie pour l'artiste
      artiste: {
        // L'artiste' à créer
        nom: null, // son nom
        photo: null, // sa photo (nom du fichier)
        cat: null, // sa catégorie
        date: null, // sa date
        international: false, // international ou pas ?
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
      // Liste des participants triés
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
      this.artiste.photo = this.file.name;
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
    async createArtiste() {
      // Obtenir storage Firebase
      const storage = getStorage();
      // Référence de l'image à uploader
      const refStorage = ref(storage, "artiste/" + this.artiste.photo);
      // Upload de l'image sur le Cloud Storage

      await uploadString(refStorage, this.imageData, "data_url").then((snapshot) => {
        console.log("Uploaded a base64 string");

        // Création de l'artiste sur le Firestore
        const db = getFirestore();
        const docRef = addDoc(collection(db, "artiste"), this.artiste);
      });
      // redirection sur la liste des  artistes
      this.$router.push("/artistes");
    },
  },
};
</script>
