<template>
  <div
    class="rounder-full flex items-center justify-center py-1 px-5 text-base"
    :class="{
      'bg-red-jazzNpop text-white': redCategory,
      'bg-orange-400 text-white': orangeCategory,
      'bg-blue-400 text-white': blueCategory,
      'bg-gray-900 text-orange-400': blackCategory,
    }"
  >
    <p class="text-center">{{ NameCategory }}</p>
  </div>
</template>

<script>
export default {
  props: {
    NameCategory: {
      type: String,
      required: true,
    },
    redCategory: {
      type: Boolean,
      default: false,
    },
    orangeCategory: {
      type: Boolean,
      default: false,
    },
    blueCategory: {
      type: Boolean,
      default: false,
    },
    blackCategory: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
