<template>
  <button
    class="flex flex-row items-center justify-center gap-3 rounded-full px-5 py-5 md:px-14 md:py-5 lg:px-10 lg:py-5"
    :class="{
      'bg-red-jazzNpop fill-white stroke-white text-white hover:bg-red-900 active:bg-red-900': redVersion,
      'bg-yellow-400 fill-black stroke-black text-black hover:bg-yellow-900 active:bg-yellow-900': orangeVersion,
      'bg-white fill-black stroke-black text-black hover:bg-zinc-500 active:bg-zinc-500': whiteVersion,
    }"
  >
    <p class="jazznpop-bouton hidden lg:block">{{ contenuTextBouton }}</p>
    <ArrowRightIcon class="h-7 w-7" />
    <span class="sr-only">Redirection (icône)</span>
  </button>
</template>

<script>
import { ArrowRightIcon } from "@heroicons/vue/outline";

export default {
  components: {
    ArrowRightIcon,
  },
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
