<template>
  <div class="ml-auto mr-auto flex flex-col gap-5 rounded-3xl bg-cover p-5">
    <div class="flex flex-row justify-end gap-5">
      <CategorieName NameCategory="Concert" />
      <CategorieName NameCategory="Spécial" />
      <!-- v-for="concert in listeConcert" :key="(concert.id = 'Salut')" -->
    </div>
    <div class="flex flex-col gap-2 text-white">
      <h3 class="jazznpop-card-title">{{ concertNom }}</h3>

      <p class="jazznpop-card-caption">{{ concertDate }}</p>
    </div>
    <div class="flex flex-row justify-end">
      <RouterLink :to="'/' + concertLink">
        <ArrowBouton :whiteVersion="true" contenuTextBouton="Voir" />
      </RouterLink>
    </div>
  </div>
</template>
<script>
import ArrowBouton from "../../boutons/ArrowBouton.vue";
import CategorieName from "../../categories/CategorieName.vue";
export default {
  components: {
    ArrowBouton,
    CategorieName,
  },
  props: {
    orangeCategory: { type: Boolean, default: false },
    blueCategory: { type: Boolean, default: false },
    redCategory: { type: Boolean, default: false },
    blackCategory: { type: Boolean, default: false },
    NameCategory: {
      type: String,
      required: false,
    },
    concertNom: {
      type: String,
      required: false,
    },
    concertDate: {
      type: String,
      required: false,
    },
    concertLink: {
      type: String,
      required: false,
    },
  },
};
</script>
