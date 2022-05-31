<template>
  <div class="flex h-[30rem] w-72 items-end justify-center rounded-3xl bg-cover p-3 md:w-[20rem] lg:w-[24rem]">
    <div class="flex w-full flex-col gap-3">
      <CategorieName :orangeCategory="true" NameCategory="Jazz" class="ml-auto mr-auto" />

      <h3 class="jazznpop-card-title text-white">{{ artisteNom }}</h3>

      <div class="flex flex-col gap-0">
        <p class="jazznpop-card-caption text-white">Prochain concert :</p>
        <p class="jazznpop-card-caption text-white">{{ artisteDate }}</p>
      </div>

      <RouterLink :to="'/' + artisteLink">
        <PlusBouton :orangeVersion="true" contenuTextBouton="En savoir" class="ml-auto mr-auto w-fit" />
      </RouterLink>
    </div>
  </div>
</template>

<script>
import CategorieName from "../../categories/CategorieName.vue";
import PlusBouton from "../../boutons/PlusBouton.vue";
export default {
  components: {
    CategorieName,
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
    artisteLink: {
      type: String,
      required: true,
    },
  },
};
</script>
