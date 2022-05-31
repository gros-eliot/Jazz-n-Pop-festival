<template>
  <div class="flex max-w-xl items-center justify-between p-2">
    <div>
      <h3 class="jazznpop-card-title">{{ artisteNom }}</h3>

      <p class="jazznpop-card-caption">Prochain concert :</p>
      <p class="jazznpop-card-caption">{{ artisteDate }}</p>
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
