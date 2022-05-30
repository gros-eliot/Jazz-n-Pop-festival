<template>
  <div class="flex max-w-xl items-center justify-between p-2">
    <div>
      <h3 class="text-3xl font-bold">{{ artisteNom }}</h3>

      <p class="text-2xl font-light">Prochain concert :</p>
      <p class="text-2xl font-light">{{ artisteDate }}</p>
    </div>
    <div>
      <PlusBouton :orangeVersion="true" contenuTextBouton="En savoir" />
    </div>
  </div>
</template>

<script>
import PlusBouton from "../../boutons/PlusBouton.vue";

export default {
  components: {
    PlusBouton,
  },
  props: {
    artisteNom: {
      type: String,
      required: true,
    },
    artisteDate: {
      type: String,
      required: true,
    },
  },
};
</script>
