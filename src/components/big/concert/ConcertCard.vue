<template>
  <div class="ml-auto mr-auto flex w-5/6 flex-col gap-5 rounded-3xl bg-cover p-5">
    <div class="flex flex-row justify-end gap-5">
      <CategorieName :blueCategory="false" :blackCategory="true" :redCategory="false" :orangeCategory="false" NameCategory="Concert" />
    </div>
    <div class="flex flex-col gap-2 text-white">
      <h3 class="text-3xl font-bold">{{ concertNom }}</h3>

      <p class="text-2xl font-light">{{ concertDate }}</p>
    </div>
    <div class="flex flex-row justify-end">
      <ArrowBouton :whiteVersion="true" contenuTextBouton="Voir" />
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
      required: true,
    },
    concertNom: {
      type: String,
      required: true,
    },
    concertDate: {
      type: String,
      required: true,
    },
  },
};
</script>
