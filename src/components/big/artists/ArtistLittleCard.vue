<template>
  <div class="flex items-center justify-between p-2">
    <div>
      <h3 class="jazznpop-card-title">{{ artisteNom }}</h3>

      <p class="jazznpop-card-caption">Prochain concert :</p>
      <p class="jazznpop-card-caption">{{ artisteDate }}</p>
    </div>
    <div>
      <button
        class="m-3 flex flex-row items-center justify-center gap-3 rounded-full bg-yellow-400 fill-black stroke-black px-5 py-5 text-black"
      >
        <PlusIcon class="h-7 w-7" />
      </button>
    </div>
  </div>
</template>

<script>
import { PlusIcon } from "@heroicons/vue/solid";

export default {
  components: {
    PlusIcon,
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
