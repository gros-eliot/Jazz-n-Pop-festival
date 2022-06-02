<template>
  <div class="ml-auto mr-auto flex h-[20rem] w-11/12 max-w-2xl rounded-xl bg-[url('../../assets/pictos/map.jpg')] bg-cover bg-center">
    <span class="sr-only">Carte google map</span>
    <div class="flex w-full items-end">
      <div
        class="flex w-full flex-row items-center justify-between gap-1 rounded-b-xl bg-gray-900 p-5 text-yellow-400 dark:bg-white dark:text-gray-900"
      >
        <h3 class="text-xl font-bold md:text-3xl">{{ mapcardTitle }}</h3>
        <a
          href="https://www.google.com/maps/place/Mairie+de+Belfort/@47.6379236,6.8606643,17z/data=!3m1!4b1!4m5!3m4!1s0x47923b5f4ba75a69:0x1c99bbb93747b3ac!8m2!3d47.63792!4d6.862853"
        >
          <ArrowBouton :orangeVersion="true" contenuTextBouton="Visiter" />
          <span class="sr-only">Voir sur Google Map</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowBouton from "../boutons/ArrowBouton.vue";
export default {
  components: {
    ArrowBouton,
  },
  props: {
    mapcardTitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
