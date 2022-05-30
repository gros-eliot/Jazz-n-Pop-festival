<template>
  <button
    class="flex flex-row items-center justify-center gap-3 rounded-full px-5 py-5 md:px-14 md:py-5 lg:px-10 lg:py-5"
    :class="{
      'bg-red-jazzNpop fill-white stroke-white text-white': redVersion,
      'bg-yellow-400 fill-black stroke-black text-black': orangeVersion,
      'bg-white fill-black stroke-black text-black': whiteVersion,
    }"
  >
    <p class="hidden text-2xl font-bold lg:block">{{ contenuTextBouton }}</p>
    <PlusIcon class="h-7 w-7" />
  </button>
</template>

<script>
import { XIcon, PlusIcon, MenuAlt3Icon, ArrowRightIcon, ClockIcon } from "@heroicons/vue/outline";

export default {
  components: {
    MenuAlt3Icon,
    XIcon,
    PlusIcon,
    ArrowRightIcon,
    ClockIcon,
    UsersIcon,
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
