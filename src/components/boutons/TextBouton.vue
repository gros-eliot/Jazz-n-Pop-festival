<template>
  <button
    class="flex items-center justify-center gap-3 rounded-full px-8 py-3 md:px-14 md:py-5 lg:px-10 lg:py-5"
    :class="{
      'bg-red-jazzNpop fill-white stroke-white text-white': redVersion,
      'bg-orange-400 fill-white stroke-white text-white': orangeVersion,
      'bg-white fill-black stroke-black text-black': whiteVersion,
    }"
  >
    <p class="text-2xl font-bold">{{ contenuTextBouton }}</p>
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
    contenuTextBouton: {
      type: String,
      required: true,
    },
  },
};
</script>
