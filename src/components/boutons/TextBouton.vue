<template>
  <button
    class="flex w-fit items-center justify-center gap-3 rounded-full px-12 py-4 md:px-16 md:py-5 lg:px-24 lg:py-5"
    :class="{
      'bg-red-jazzNpop fill-white stroke-white text-white': redVersion,
      'bg-yellow-400 fill-black stroke-black text-black': orangeVersion,
      'bg-blue-400 fill-white stroke-white text-white': blueVersion,
      'bg-gray-700 fill-white stroke-white text-white': grayVersion,
      'bg-gray-900 fill-white stroke-white text-white': blackVersion,
      'bg-white fill-black stroke-black text-black': whiteVersion,
    }"
  >
    <p class="jazznpop-bouton">{{ contenuTextBouton }}</p>
  </button>
</template>

<script>
export default {
  props: {
    redVersion: {
      type: Boolean,
      default: false,
    },
    orangeVersion: {
      type: Boolean,
      default: false,
    },
    whiteVersion: {
      type: Boolean,
      default: false,
    },
    blueVersion: {
      type: Boolean,
      default: false,
    },
    grayVersion: {
      type: Boolean,
      default: false,
    },
    blackVersion: {
      type: Boolean,
      default: false,
    },
    contenuTextBouton: {
      type: String,
      required: true,
    },
  },
};
</script>
