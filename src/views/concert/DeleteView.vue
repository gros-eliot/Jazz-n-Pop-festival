<template>
  <div class="jazznpop-text p-page">
    <form enctype="multipart/form-data" @submit.prevent="deleteConcert">
      <div class="py-5">
        <h2 class="jazznpop-h2">Supprimer un concert</h2>
      </div>

      <div class="flex w-full flex-col gap-4">
        <div class="flex flex-col gap-4 md:mr-auto md:ml-auto md:flex-row md:items-center md:gap-16">
          <div class="flex flex-col">
            <span class="font-medium">Aperçu de la photo choisie</span>
            <img class="w-40 object-cover object-center md:w-48 lg:w-52" :src="imageData" :alt="concert.nom" />
          </div>
          <div class="flex w-full flex-col gap-4">
            <div class="flex flex-col">
              <span class="font-medium">Nom du concert</span>
              <input class="jazznpop-input bg-red-jazzNpop text-white" disabled v-model="concert.nom" />
            </div>

            <div class="flex flex-col">
              <span class="font-medium">Date du concert (début)</span>
              <input class="jazznpop-input bg-red-jazzNpop text-white" disabled v-model="concert.date1" />
            </div>
            <div class="flex flex-col">
              <span class="font-medium">Date du concert (fin)</span>
              <input class="jazznpop-input bg-red-jazzNpop text-white" disabled v-model="concert.date2" />
            </div>
            <div class="flex flex-col">
              <span class="font-medium">Horaires du concert (en heures)</span>
              <input class="jazznpop-input bg-red-jazzNpop text-white" disabled v-model="concert.time" />
            </div>
            <div class="flex flex-col">
              <span class="font-medium">Catégorie</span>
              <div class="flex flex-col gap-1">
                <input class="jazznpop-input border-0 bg-red-jazzNpop text-white" v-model="concert.cat" disabled />
                <input class="jazznpop-input border-0 bg-red-jazzNpop text-white" v-model="concert.cat2" disabled />
              </div>
            </div>

            <div class="flex flex-col">
              <span class="font-medium">Description du concert</span>
              <textarea class="jazznpop-input h-32 bg-red-jazzNpop text-white" v-model="concert.description" disabled />
            </div>
          </div>
        </div>

        <h3 role="alert" class="text-center">
          <strong>Attention : vous allez supprimer ce concert, cette action est irréversible !</strong>
        </h3>
      </div>

      <div class="my-5 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-around">
        <text-bouton :redVersion="true" contenuTextBouton="Supprimer" type="submit" class="w-fit"></text-bouton>

        <router-link to="/concerts">
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
      imageData: "",
      concert: {
        // Concert à créer
        nom: "", // son nom
        cat: "",
        cat2: "",
        date1: "", // sa date
        date2: "", // sa date (fin)
        time: "", // sa date (fin)
        description: "",
        photo: "", // sa photo (nom du fichier)
      },
      refConcert: null, // Référence du artiste à modifier
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
    this.getConcert(this.$route.params.id);
  },

  methods: {
    async getConcert(id) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document artiste
      // Récupération sur Firestore du artiste via son id
      const docRef = doc(firestore, "concert", id);
      // Référence du artiste concerné
      this.refConcert = await getDoc(docRef);
      // Test si l'artiste demandé existe
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
      // Référence de l'image du artiste
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

    async deleteConcert() {
      const firestore = getFirestore();
      // Suppresion du artiste
      await deleteDoc(doc(firestore, "concert", this.$route.params.id));

      // Suppresson de l'image
      const storage = getStorage();
      // Référence du fichier de la photo
      let docRef = ref(storage, "concert/" + this.concert.photo);
      // Suppression du fichier
      deleteObject(docRef);

      // redirection sur la liste des artistes
      this.$router.push("/concerts");
    },
  },
};
</script>
