<template>
  <div class="flex h-[30rem] w-72 items-end justify-center rounded-3xl bg-cover p-3 md:w-[20rem] lg:w-[24rem]">
    <div class="flex w-full flex-col gap-3">
      <CategorieName :redCategory="true" NameCategory="Pop" class="ml-auto mr-auto" />

      <h3 class="text-3xl font-bold text-white">{{ artisteNom }}</h3>

      <p class="text-2xl font-light text-white">{{ artisteDate }}</p>

      <PlusBouton :orangeVersion="true" contenuTextBouton="En savoir" class="ml-auto mr-auto w-fit" />
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
  },
};
</script>
