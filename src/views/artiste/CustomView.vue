<template>
  <div class="m-10">
    <form enctype="multipart/form-data" @submit.prevent="updateArtiste">
      <div class="py-5">
        <h2 class="jazznpop-h2">Mise à jour d'un artiste</h2>
      </div>

      <div class="flex w-full flex-col gap-4">
        <div class="flex flex-col">
          <span class="font-medium">Nom de l'artiste</span>
          <input class="jazznpop-input" placeholder="Melody Gardot" v-model="artiste.nom" required />
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
          <span class="font-medium">Date du prochain concert de l'artiste</span>
          <input type="text" class="jazznpop-input" placeholder="jour(XX) mois année(XXXX)" required v-model="artiste.date" />
        </div>

        <div class="flex flex-col">
          <span class="font-medium">Catégorie</span>

          <select class="jazznpop-input" v-model="artiste.cat">
            <option class="bg-white dark:bg-black" selected disabled>Sélectionner une catégorie</option>
            <option class="bg-white text-black dark:bg-black dark:text-white" v-for="categorie in listeCat" :key="categorie.libelle">
              {{ categorie.libelle }}
            </option>
          </select>
        </div>

        <div class="flex flex-col">
          <div>
            <span class="font-medium">Concerts de l'artiste </span>
            <span class="text-xs"
              >(pas encore fonctionnel, mais création possible sur Firebase et visualisation sur la vue "PortraitView.vue"&nbsp;!)</span
            >
          </div>
          <div class="flex flex-col md:flex-row">
            <div class="flex flex-col gap-2">
              <input class="jazznpop-input max-w-md" placeholder="Nom du concert" disabled />
              <input class="jazznpop-input max-w-md" placeholder="Date début" disabled />
              <input class="jazznpop-input max-w-md" placeholder="Date fin" disabled />
            </div>
            <div
              class="my-3 ml-auto mr-auto flex h-fit w-fit flex-row items-center justify-center gap-3 rounded-full bg-yellow-400 fill-black stroke-black px-5 py-5 text-black focus-visible:shadow-xl focus-visible:shadow-blue-400 md:mx-3 md:mb-auto md:mt-auto"
            >
              <PlusIcon class="h-7 w-7" />
              <span class="sr-only">Ajouter un concert</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col">
          <span class="font-medium">Site de l'artiste</span>
          <input class="jazznpop-input" placeholder="https://melodygardot.co.uk/" v-model="artiste.site" required />
        </div>

        <div class="flex flex-col">
          <span class="font-medium">Description de l'artiste</span>
          <textarea class="jazznpop-input h-32" placeholder="Saisissez une description ici..." v-model="artiste.description" required />
        </div>
      </div>

      <div class="my-5 flex flex-row items-center gap-3">
        <input
          type="checkbox"
          @click="artiste.international = !artiste.international"
          :checked="artiste.international"
          v-model="artiste.international"
        />
        <label>Cet artiste est <strong>international</strong> (affichage spécial)</label>
      </div>

      <div class="my-5 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-around">
        <text-bouton :redVersion="true" contenuTextBouton="Modifier" type="submit" class="w-fit"></text-bouton>

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
import { PlusIcon } from "@heroicons/vue/outline";

export default {
  name: "CustomArtistView",
  components: {
    TextBouton,
    PlusIcon,
  },

  data() {
    return {
      imageData: null, // Image prévisualisée
      listeCat: [], // Liste des catégories
      artiste: {
        nom: "", // son nom
        cat: "", // sa catégorie
        date: "", // son prénom
        photo: "", // sa photo (nom du fichier)
        international: "", // nationalité
        site: "", // site
        description: "", // desc
      },

      refArtiste: null, // Référence du artiste à modifier
      imgModifiee: false, // Indique si l'image du artiste a été modifiée, par défaut : non
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
    // Appel de la liste des artistes
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
        // Mémorisation photoActuelle
        this.photoActuelle = this.artiste.photo;
      } else {
        // Sinon simple message d'erreur
        this.console.log("Artiste inexistant");
      }
      // Obtenir le Storage
      const storage = getStorage();
      // Référence de l'image du artiste
      const spaceRef = ref(storage, "artiste/" + this.artiste.photo);
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
      // Mise à jour de la photo du artiste
      this.file = this.$refs.file.files[0];
      // Récupérer le nom du fichier pour la photo du artiste
      this.artiste.photo = this.file.name;
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

    async updateArtiste() {
      // Si l'image a été modifiée
      if (this.imgModifiee) {
        // On supprime l'ancienne
        const storage = getStorage();
        // Référence du fichier
        let docRef = ref(storage, "artiste/" + this.photoActuelle);
        // Suppression photo actuelle
        deleteObject(docRef);
        // création nouvelle photo
        // Référence de l'image à uploader
        docRef = ref(storage, "artiste/" + this.artiste.photo);
        await uploadString(docRef, this.imageData, "data_url").then((snapshot) => {
          console.log("Uploaded a base64 string", this.artiste.photo);
        });
      }
      // Dans tous les cas on met à jour l'artiste dans Firestore
      const firestore = getFirestore();
      // Modification du artiste à partir de son id
      await updateDoc(doc(firestore, "artiste", this.$route.params.id), this.artiste);
      // redirection sur la liste des artistes
      this.$router.push("/artistes");
    },

    dateFr(d) {
      let date = d.split("-");
      return date[2] + "/" + date[1] + "/" + date[0];
    },
  },
};
</script>
