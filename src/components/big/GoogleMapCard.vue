<template>
  <div class="flex items-center justify-center">
    <div class="flex w-fit flex-col">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43007.75376315996!2d6.806006479712902!3d47.645865897843684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47923b78fc4e48e1%3A0x409ce34b30d50d0!2sBelfort!5e0!3m2!1sfr!2sfr!4v1654263898745!5m2!1sfr!2sfr"
        class="h-fit w-full rounded-t-xl border-0"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div
        class="flex w-fit flex-row items-center justify-between gap-5 rounded-b-xl bg-gray-900 p-5 text-yellow-400 dark:bg-white dark:text-gray-900"
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
