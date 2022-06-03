<template>
  <div class="jazznpop-text p-page">
    <form enctype="multipart/form-data" @submit.prevent="updateConcert()">
      <div class="py-5">
        <h2 class="jazznpop-h2">Modifier un concert</h2>
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
        <text-bouton :redVersion="true" contenuTextBouton="Modifier" type="submit" class="w-fit"></text-bouton>

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
import { PlusIcon } from "@heroicons/vue/outline";

export default {
  name: "CustomArtistView",
  components: {
    TextBouton,
    PlusIcon,
  },

  data() {
    return {
      imageData: "", // Image prévisualisée
      listeCat: [], // Liste des categorie pour le concert
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
    this.getCat();
  },

  methods: {
    async getCat() {
      const firestore = getFirestore();

      const dbCat = collection(firestore, "categorie");

      const q = query(dbCat, orderBy("libelle", "asc"));

      await onSnapshot(q, (snapshot) => {
        this.listeCat = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Liste des catégories", this.listeCat);
      });
    },

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

    previewImage: function (event) {
      // Mise à jour de la photo du concert
      this.file = this.$refs.file.files[0];
      // Récupérer le nom du fichier pour la photo du concert
      this.concert.photo = this.file.name;
      // Si cette fonction s'exécute, c'est que l'image est modifiée
      this.imgModifiee = true;
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

    async updateConcert() {
      // Si l'image a été modifiée
      if (this.imgModifiee) {
        // On supprime l'ancienne
        const storage = getStorage();
        // Référence du fichier
        let docRef = ref(storage, "concert/" + this.photoActuelle);
        // Suppression photo actuelle
        deleteObject(docRef);
        // création nouvelle photo
        // Référence de l'image à uploader
        docRef = ref(storage, "concert/" + this.concert.photo);
        await uploadString(docRef, this.imageData, "data_url").then((snapshot) => {
          console.log("Uploaded a base64 string", this.concert.photo);
        });
      }
      // Dans tous les cas on met à jour le concert dans Firestore
      const firestore = getFirestore();
      // Modification du concert à partir de son id
      await updateDoc(doc(firestore, "concert", this.$route.params.id), this.concert);
      // redirection sur la liste des concerts
      this.$router.push("/concerts");
    },
  },
};
</script>
