<template>
  <div class="grid max-w-6xl grid-cols-2 gap-3 p-3 text-center text-gray-900 md:grid-cols-1">
    <div
      class="grid grid-cols-1 justify-items-center p-2 md:grid-cols-5 md:p-5"
      :class="{
        'bg-yellow-400': tarif1,

        'bg-blue-400': tarif2,
      }"
    >
      <h3 class="jazznpop-text font-bold">Conditions</h3>
      <hr class="block py-1 md:hidden" />
      <p class="jazznpop-text">{{ cond1 }}</p>
      <hr class="block py-1 md:hidden" />
      <p class="jazznpop-text">{{ cond2 }}</p>
      <hr class="block py-1 md:hidden" />
      <p class="jazznpop-text">{{ cond3 }}</p>
      <hr class="block py-1 md:hidden" />
      <p class="jazznpop-text">{{ cond4 }}</p>
      <hr class="block py-1 md:hidden" />
    </div>
    <div
      class="grid grid-cols-1 justify-items-center p-2 md:grid-cols-5 md:p-5"
      :class="{
        'bg-yellow-400': tarif1,

        'bg-blue-400': tarif2,
      }"
    >
      <h3 class="jazznpop-text font-bold">Prix</h3>
      <hr class="block py-1 md:hidden" />
      <p class="jazznpop-text">{{ prix1 }}</p>
      <hr class="block py-1 md:hidden" />
      <p class="jazznpop-text">{{ prix2 }}</p>
      <hr class="block py-1 md:hidden" />
      <p class="jazznpop-text">{{ prix3 }}</p>
      <hr class="block py-1 md:hidden" />
      <p class="jazznpop-text">{{ prix4 }}</p>
      <hr class="block py-1 md:hidden" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cond1: { type: String, required: false },
    cond2: { type: String, required: false },
    cond3: { type: String, required: false },
    cond4: { type: String, required: false },

    prix1: { type: String, required: false },
    prix2: { type: String, required: false },
    prix3: { type: String, required: false },
    prix4: { type: String, required: false },

    tarif1: { type: Boolean, default: false },
    tarif2: { type: Boolean, default: false },
  },
};
</script>
