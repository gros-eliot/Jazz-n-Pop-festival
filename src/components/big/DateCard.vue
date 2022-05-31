<template>
  <div class="flex flex-row items-center justify-between bg-yellow-400 p-3">
    <div class="flex items-center gap-2">
      <ClockIcon class="h-8 w-8 stroke-gray-900" />
      <span class="sr-only">Heures du concert</span>

      <h3 class="text-base font-bold md:text-lg lg:text-xl">{{ datecardTitre }}</h3>
    </div>
    <div class="flex flex-row items-center gap-2">
      <div class="flex flex-col items-center">
        <p class="jazznpop-text font-bold">{{ datecardDate1 }}</p>
        <p class="jazznpop-text font-bold">{{ datecardDate2 }}</p>
      </div>
      <ArrowRightIcon class="h-10 w-10 stroke-white" />
      <span class="sr-only">Voir les tarifs</span>
    </div>
  </div>
</template>

<script>
import { ClockIcon, ArrowRightIcon } from "@heroicons/vue/outline";
export default {
  components: {
    ClockIcon,
    ArrowRightIcon,
  },
  props: {
    datecardTitre: {
      type: String,
      required: true,
    },
    datecardDate1: {
      type: String,
      required: true,
    },
    datecardDate2: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
