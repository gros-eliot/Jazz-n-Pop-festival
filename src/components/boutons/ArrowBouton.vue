<template>
  <button
    class="flex flex-row items-center justify-center gap-3 rounded-full px-8 py-3 md:px-14 md:py-5 lg:px-10 lg:py-5"
    :class="{
      'bg-red-jazzNpop fill-white stroke-white text-white': redVersion,
      'bg-orange-400 fill-white stroke-white text-white': orangeVersion,
      'bg-white fill-black stroke-black text-black': whiteVersion,
    }"
  >
    <p class="hidden text-2xl font-bold lg:block">{{ contenuTextBouton }}</p>
    <ArrowRightIcon class="h-7 w-7" />
  </button>
</template>

<script>
import { MenuAlt3Icon, ArrowRightIcon, ClockIcon } from "@heroicons/vue/outline";
import { XIcon, PlusIcon, UsersIcon } from "@heroicons/vue/solid";

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
