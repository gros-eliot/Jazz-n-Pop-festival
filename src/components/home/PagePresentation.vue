<template>
  <div class="w-full bg-cover p-5 py-10 text-white">
    <div class="z-20 flex w-full flex-col items-center justify-center gap-10">
      <h1 class="font-abril-fatface text-6xl lg:text-7xl">{{ otherpageTitle }}</h1>
      <h2 class="text-center text-3xl font-bold md:text-4xl lg:text-5xl">
        {{ otherpageDesc }}
      </h2>
      <RouterLink :to="'/' + otherpageLink">
        <TextBouton :orangeVersion="true" contenuTextBouton="Consulter" class="w-fit" />
      </RouterLink>
    </div>
  </div>
</template>

<script>
import TextBouton from "../boutons/TextBouton.vue";
export default {
  components: {
    TextBouton,
  },
  props: {
    otherpageTitle: {
      type: String,
      required: true,
    },
    otherpageDesc: {
      type: String,
      required: true,
    },
    otherpageLink: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
