<template>
  <div class="flex w-fit flex-col items-center justify-start gap-1">
    <div class="h-28 w-28 rounded-full border-8 border-gray-300 lg:h-40 lg:w-40">
      <img
        :src="'../../../' + artisteImageSrc"
        alt="Source de l'image"
        class="h-full w-full rounded-full border-2 border-gray-900 object-cover dark:border-white"
      />
    </div>
    <div>
      <h3 class="jazznpop-card-caption text-center">{{ artisteNom }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    artisteImageSrc: {
      type: String,
      required: true,
    },
    artisteNom: {
      type: String,
      required: true,
    },
  },
};
</script>
