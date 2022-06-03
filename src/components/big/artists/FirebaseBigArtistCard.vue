<template>
  <div class="my-2 md:my-10">
    <h2 class="jazznpop-h2">Nos figures internationales</h2>
  </div>

  <div class="justifys-start my-5 flex flex-col gap-5">
    <span class="jazznpop-text">Rechercher un artiste (international)</span>
    <div class="flex flex-row gap-3">
      <input v-model="filter" class="jazznpop-input dark:border-white" />
      <button class="rounded-xl bg-red-500 py-2 px-4" type="button" title="Filtrage">
        <SearchIcon class="h-8 w-8 stroke-white" />
      </button>
    </div>
  </div>

  <div>
    <div class="grid grid-cols-1 justify-items-center gap-10 md:grid md:grid-cols-artiste-international md:flex-row">
      <section v-for="artiste in filterByName" :key="artiste.id">
        <!--BG de l'image-->
        <div
          class="flex h-[30rem] w-72 items-end justify-center rounded-3xl bg-cover bg-center p-3 md:w-[20rem] lg:w-[24rem]"
          :style="{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),url('${artiste.photo}')`,
          }"
          v-if="artiste.international"
        >
          <!--INFOS DE LA CARD-->
          <div class="flex w-full flex-col gap-3">
            <CategorieName :redCategory="true" :NameCategory="artiste.cat" class="ml-auto mr-auto" />
            <div class="flex flex-col items-center justify-center md:flex-row md:justify-between">
              <div>
                <h3 class="jazznpop-card-title text-white">{{ artiste.nom }}</h3>
                <div class="flex flex-col gap-0">
                  <p class="jazznpop-card-caption text-white">Prochain concert :</p>
                  <p class="jazznpop-card-caption text-white">{{ artiste.date }}</p>
                </div>
              </div>
              <div class="flex flex-row gap-3">
                <RouterLink :to="{ name: 'CustomArtiste', params: { id: artiste.id } }" class="h-fit w-fit">
                  <PencilIcon class="my-3 h-8 w-8 stroke-white">
                    <span class="sr-only">Modifier un artiste</span>
                  </PencilIcon>
                </RouterLink>
                <RouterLink :to="{ name: 'DeleteArtiste', params: { id: artiste.id } }" class="h-fit w-fit">
                  <TrashIcon class="my-3 h-8 w-8 stroke-red-jazzNpop">
                    <span class="sr-only">Supprimer un artiste</span>
                  </TrashIcon>
                </RouterLink>
              </div>
            </div>
            <RouterLink :to="{ name: 'PortraitArtiste', params: { id: artiste.id } }">
              <PlusBouton :orangeVersion="true" contenuTextBouton="En savoir" class="ml-auto mr-auto w-fit" />
              <span class="sr-only">En savoir plus</span>
            </RouterLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
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

import CategorieName from "../../categories/CategorieName.vue";
import PlusBouton from "../../boutons/PlusBouton.vue";
import { PlusIcon, PencilIcon, TrashIcon, SearchIcon } from "@heroicons/vue/outline";
export default {
  components: {
    CategorieName,
    PlusBouton,
    PlusIcon,
    PencilIcon,
    TrashIcon,
    SearchIcon,
  },
  data() {
    return {
      listeArtiste: [], // Liste des artistes
      filter: "",
    };
  },
  computed: {
    // Tri des artiste par nom en ordre croissant
    orderByNat: function () {
      // Parcours et tri des artiste 2 à 2
      return this.listeArtiste.sort(function (artiste) {
        // Si le nom du artiste est avant on retourne -1
        if (artiste.international === true) return -1;
        // Sinon ni avant ni après (homonyme) on retourne 0
        return 0;
      });
    },
    // Filtrage de la propriété calculée de tri
    filterByName: function () {
      // On effectue le fitrage seulement si le filtre est rnseigné
      if (this.filter.length > 0) {
        // On récupère le filtre saisi en minuscule (on évite les majuscules)
        let filter = this.filter.toLowerCase();
        // Filtrage de la propriété calculée de tri
        return this.orderByNat.filter(function (artiste) {
          // On ne renvoie que les artiste dont le nom contient
          // la chaine de caractère du filtre
          return artiste.nom.toLowerCase().includes(filter);
        });
      } else {
        // Si le filtre n'est pas saisi
        // On renvoie l'intégralité de la liste triée
        return this.orderByNat;
      }
    },
  },

  mounted() {
    // Appel de la liste des artistes
    this.getArtiste();
  },

  methods: {
    async getArtiste() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document artiste
      const dbArtiste = collection(firestore, "artiste");
      // Liste des artistes triés sur leur nom
      const q = query(dbArtiste, orderBy("cat", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeArtiste = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        // Récupération des images de chaque artiste
        // parcours de la liste
        this.listeArtiste.forEach(function (personne) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupération de l'image par son nom de fichier
          const spaceRef = ref(storage, "artiste/" + personne.photo);
          // Récupération de l'url complète de l'image
          getDownloadURL(spaceRef)
            .then((url) => {
              // On remplace le nom du fichier
              // Par l'url complète de la photo
              personne.photo = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },
  },
};
</script>
