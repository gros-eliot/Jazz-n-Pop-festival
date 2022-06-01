<template>
  <div class="jazznpop-text p-page">
    <form enctype="multipart/form-data" @submit.prevent="deleteArtiste">
      <div class="py-5">
        <h2 class="jazznpop-h2">Supprimer un artiste</h2>
      </div>

      <div class="flex w-full flex-col gap-4">
        <div class="flex flex-col gap-4 md:mr-auto md:ml-auto md:flex-row md:items-center md:gap-16">
          <div class="flex flex-col">
            <span>Aperçu de la photo choisie</span>
            <img class="w-40 bg-center object-cover md:w-48 lg:w-52" :src="photoActuelle" />
          </div>
          <div class="flex w-full flex-col gap-4">
            <div class="flex flex-col">
              <span class="input-group-text">Nom de l'artiste</span>
              <input class="jazznpop-input bg-red-500 text-white" disabled v-model="artiste.nom" />
            </div>
            <div class="flex flex-col">
              <span class="input-group-text">Date du prochain concert de l'artiste</span>
              <input class="jazznpop-input bg-red-500 text-white" disabled v-model="artiste.date" />
            </div>
            <div class="flex flex-col">
              <span>Catégorie</span>
              <input class="jazznpop-input border-0 bg-red-500 text-white" v-model="artiste.cat" disabled />
            </div>
          </div>
        </div>

        <h3 role="alert" class="text-center">
          <strong>Attention : vous allez supprimer cet artiste, cette action est irréversible !</strong>
        </h3>
      </div>

      <div class="my-5 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-around">
        <text-bouton :redVersion="true" contenuTextBouton="Supprimer" type="submit" class="w-fit"></text-bouton>

        <router-link to="/artistes">
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
import TextBouton from "../../components/boutons/TextBouton.vue";

export default {
  name: "DeleteArtisteView",
  components: {
    TextBouton,
  },
  data() {
    return {
      artiste: {
        // Le artiste à créer
        nom: null, // son nom
        cat: null, // son nom
        photo: null, // sa photo (nom du fichier)
        date: null, // sa date de date
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
      // Test si le artiste demandé existe
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

    async deleteArtiste() {
      const firestore = getFirestore();
      // Suppresion du artiste
      await deleteDoc(doc(firestore, "artiste", this.$route.params.id));

      // Suppresson de l'image
      const storage = getStorage();
      // Référence du fichier de la photo
      let docRef = ref(storage, "artiste/" + this.artiste.photo);
      // Suppression du fichier
      deleteObject(docRef);

      // redirection sur la liste des artistes
      this.$router.push("/artistes");
    },
  },
};
</script>
