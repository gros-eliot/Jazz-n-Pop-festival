<template>
  <div class="container">
    <form enctype="multipart/form-data" @submit.prevent="deleteArtiste">
      <div class="card bg-dark">
        <div class="card-header">
          <h5 style="color: white">Suppression d'un artiste</h5>
        </div>

        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <div class="text-center">
                <img class="preview img-fluid" :src="photoActuelle" />
              </div>
            </div>

            <div class="col-6">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Nom</span>
                </div>
                <input class="form-control" placeholder="Nom de la personne" v-model="artiste.nom" disabled />
              </div>

              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Date</span>
                </div>
                <input type="date" class="form-control" v-model="artiste.date" format="dd/mm/yyyy" disabled />
              </div>

              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Catégorie</span>
                </div>
                <input class="form-control" v-model="artiste.cat" disabled />
              </div>
            </div>
          </div>

          <h5 class="alert alert-warning text-center" role="alert">
            Attention vous allez supprimer cet artiste, cette action est irréversible !!
          </h5>
        </div>

        <div class="card-footer">
          <button type="submit" class="btn btn-dark">Supprimer</button>
          <button class="btn btn-dark">
            <RouterLink to="/artistes">Cancel</RouterLink>
          </button>
        </div>
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

export default {
  name: "DeleteView",
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
